import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';
import { loginAdapter } from '../../adapters/authAdapter';
import { baseUrlList, baseUrlTypes } from '../../constants/api/urls';
import { setAccessToken, setRefreshToken } from '../auth';
import { setUser } from '../globalData';

let baseUrl = '';

const customBaseQuery = async (args, api, extraOptions) =>
  fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      // getState() trae el estado del store
      const { auth } = getState();
      
      if (auth.accessToken) {
        headers.set('Authorization', `Bearer ${auth.accessToken}`);
      }
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  })(args, api, extraOptions);

export const rtkBaseQuery = async (args, api, extraOptions) => {
  const { type } = args;
  baseUrl = baseUrlList[type];

  let result = await customBaseQuery(args, api, extraOptions);

  if (
    type !== baseUrlTypes.AUTH &&
    result.error &&
    result.error.status === 401
  ) {
    console.log("Token no valido")
    // try to get a new token
    const refreshResult = await customBaseQuery(
      `${baseUrlList.AUTH}/auth/refresh`,
      api,
      extraOptions
    );
    if (refreshResult?.data) {
      // store the new token
      console.log("Token actualizado")
      const formatRes = loginAdapter(refreshResult);

      api.dispatch(setAccessToken(formatRes.accessToken));
      api.dispatch(setRefreshToken(formatRes.refreshToken));

      // retry the initial query
      result = await customBaseQuery(args, api, extraOptions);
    } else {
      api.dispatch(setUser(null));
      api.dispatch(setAccessToken(null));
      api.dispatch(setRefreshToken(null));
    }
  }

  return result;
};
