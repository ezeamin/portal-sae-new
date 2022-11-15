import { createApi } from '@reduxjs/toolkit/dist/query/react';

import { baseUrlTypes } from '../../constants/api/urls';
import { rtkBaseQuery } from './customBaseQuery';

const type = baseUrlTypes.USERS;

export const userSlice = createApi({
  baseQuery: rtkBaseQuery,
  endpoints: (builder) => ({
    putUpdateUser: builder.mutation({
      query: (user) => ({
        url: `/update-user`,
        method: 'PUT',
        body: user,
        type,
      }),
    }),
    putUpdatePassword: builder.mutation({
      query: (data) => ({
        url: `/update-password`,
        method: 'PUT',
        body: data,
        type,
      }),
    }),
    putTermsAndConditions: builder.mutation({
      query: () => ({
        url: `/accept-terms`,
        method: 'PUT',
        body: {},
        type,
      }),
    }),
    getTermsPdf: builder.query({
      query: () => ({
        url: `/terms-and-conditions`,
        method: 'GET',
        type,
      }),
    }),
  }),
});

export const {
  usePutUpdateUserMutation,
  usePutUpdatePasswordMutation,
  usePutTermsAndConditionsMutation,
  useGetTermsPdfQuery,
} = userSlice;
