import { createApi } from '@reduxjs/toolkit/dist/query/react';

import { loginAdapter } from '../../adapters/authAdapter';
import { baseUrlTypes } from '../../constants/api/urls';
import { rtkBaseQuery } from './customBaseQuery';

const authBaseUrl = '/auth';

export const authApiSlice = createApi({
  baseQuery: rtkBaseQuery,
  endpoints: (builder) => ({
    postLogin: builder.mutation({
      query: (user) => ({
        url: `${authBaseUrl}/login`,
        method: 'POST',
        body: user,
        type: baseUrlTypes.AUTH,
      }),
      transformResponse: (response) => loginAdapter(response),
      transformErrorResponse: (response) => response.status,
    }),
    postRefresh: builder.mutation({
      query: (user) => ({
        url: `${authBaseUrl}/refresh`,
        method: 'POST',
        body: user,
        type: baseUrlTypes.AUTH,
      }),
      transformResponse: (response) => loginAdapter(response),
      transformErrorResponse: (response) => response.status,
    }),
    postLogout: builder.mutation({
      query: () => ({
        url: `${authBaseUrl}/logout`,
        method: 'POST',
        type: baseUrlTypes.AUTH,
      }),
    }),
  }),
});

export const { usePostLoginMutation, usePostRefreshMutation } = authApiSlice;
