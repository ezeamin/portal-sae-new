import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { store } from '../../app/store';

import Cookies from 'js-cookie';

import { loginAdapter, userAdapter } from '../../adapters/authAdapter';

import { setAccessToken } from '../auth';
import { setUser } from '../globalData';

import { baseUrlTypes } from '../../constants/api/urls';
import { rtkBaseQuery } from './customBaseQuery';

const type = baseUrlTypes.AUTH;

export const authApiSlice = createApi({
  baseQuery: rtkBaseQuery,
  endpoints: (builder) => ({
    postLogin: builder.mutation({
      query: (user) => ({
        url: `/login`,
        method: 'POST',
        body: user,
        type,
      }),
      transformResponse: (response) => {
        const data = loginAdapter(response);
        if (process.env.NODE_ENV !== 'production') {
          Cookies.set('refreshToken', data?.refreshToken, {
            expires: 1,
            secure: true,
          });
        }

        return data;
      },
      transformErrorResponse: (response) => response.status,
    }),
    postRefresh: builder.mutation({
      query: () => ({
        url: `/refresh`,
        method: 'POST',
        body: { refresh_token: Cookies.get('refreshToken') },
        type,
      }),
      transformResponse: (response) => {
        const data = loginAdapter(response);
        if (process.env.NODE_ENV !== 'production') {
          Cookies.set('refreshToken', data?.refreshToken);
        }

        const user = userAdapter(data.user);

        store.dispatch(setAccessToken(data.accessToken));
        store.dispatch(setUser(user));

        return data;
      },
      transformErrorResponse: (response) => response.status,
    }),
    postRestorePassword: builder.mutation({
      query: (data) => ({
        url: `/forgot-password`,
        method: 'POST',
        body: data,
        type,
      }),
    }),
    postLogout: builder.mutation({
      query: () => ({
        url: `/logout`,
        method: 'POST',
        type,
      }),
    }),
  }),
});

export const {
  usePostLoginMutation,
  usePostRefreshMutation,
  usePostRestorePasswordMutation,
} = authApiSlice;
