import { createApi } from '@reduxjs/toolkit/dist/query/react';
import Cookies from 'js-cookie';

import { loginAdapter } from '../../adapters/authAdapter';
import { baseUrlTypes } from '../../constants/api/urls';
import { rtkBaseQuery } from './customBaseQuery';

export const authApiSlice = createApi({
  baseQuery: rtkBaseQuery,
  endpoints: (builder) => ({
    postLogin: builder.mutation({
      query: (user) => ({
        url: `/login`,
        method: 'POST',
        body: user,
        type: baseUrlTypes.AUTH,
      }),
      transformResponse: (response) => {
        const data = loginAdapter(response);
        if (process.env.NODE_ENV !== 'production') {
          Cookies.set('refreshToken', data?.refreshToken);
        }

        return data;
      },
      transformErrorResponse: (response) => response.status,
    }),
    postRefresh: builder.mutation({
      query: (user) => ({
        url: `/refresh`,
        method: 'POST',
        body: user,
        type: baseUrlTypes.AUTH,
      }),
      transformResponse: (response) => {
        const data = loginAdapter(response);
        if (process.env.NODE_ENV !== 'production') {
          Cookies.set('refreshToken', data?.refreshToken);
        }

        return data;
      },
      transformErrorResponse: (response) => response.status,
    }),
    postRestorePassword: builder.mutation({
      query: (data) => ({
        url: `/forgot-password`,
        method: 'POST',
        body: data,
        type: baseUrlTypes.AUTH,
      }),
    }),
    postLogout: builder.mutation({
      query: () => ({
        url: `/logout`,
        method: 'POST',
        type: baseUrlTypes.AUTH,
      }),
    }),
  }),
});

export const {
  usePostLoginMutation,
  usePostRefreshMutation,
  usePostRestorePasswordMutation,
} = authApiSlice;
