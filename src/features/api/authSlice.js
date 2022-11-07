import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

/* ---------------------- Environment variables ----------------------------- */
const baseUrl = process.env.REACT_APP_AUTH_BASE_URL;
/* ------------------------------------------------------------------------- */

export const authSlice = createApi({
  tagTypes: ['Auth'],
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    postLogin: builder.mutation({
      query: ({ user }) => ({
        url: `/login`,
        method: 'POST',
        body: user,
      }),
      transformResponse: (response, meta, arg) => response.data,
      transformErrorResponse: (response, meta, arg) => response.status,
    }),
  }),
});

export const { usePostLoginMutation } = authSlice;
