import Cookies from 'js-cookie';

import { setAccessToken } from '../auth';
import { setUser } from '../globalData';

import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';
import { loginAdapter } from '../../adapters/authAdapter';

import { baseUrlList, baseUrlTypes } from '../../constants/api/urls';

let baseUrl = '';

const customBaseQuery = async (args, api, extraOptions) =>
  fetchBaseQuery({
    baseUrl,
    credentials: 'include',
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
    // result.error &&
    result.error?.status === 401
  ) {
    console.log('Token no valido');

    // try to get a new token
    const refreshResponse = await fetch(`${baseUrlList.AUTH}/refresh`, {
      method: 'POST',
      body: {
        refresh_token: Cookies.get('refreshToken'),
      },
    });
    const refreshResult = await refreshResponse.json();

    if (refreshResult?.data) {
      // store the new token
      console.log('Token actualizado');

      const formatRes = loginAdapter(refreshResult);

      //* Set refresh con cookie
      if (process.env.NODE_ENV !== 'production') {
        Cookies.set('refreshToken', formatRes.refreshToken, {
          expires: 1,
          secure: true,
        });
      }

      api.dispatch(setAccessToken(formatRes.accessToken));

      // retry the initial query
      result = await customBaseQuery(args, api, extraOptions);
    } else {
      api.dispatch(setUser(null));
      api.dispatch(setAccessToken(null));
      Cookies.remove('refreshToken');
    }
  }

  return result;
};
