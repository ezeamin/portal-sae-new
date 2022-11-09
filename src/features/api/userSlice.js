import { createApi } from '@reduxjs/toolkit/dist/query/react';

import { baseUrlTypes } from '../../constants/api/urls';
import { rtkBaseQuery } from './customBaseQuery';

export const userSlice = createApi({
  baseQuery: rtkBaseQuery,
  endpoints: (builder) => ({
    putUpdateUser: builder.mutation({
      query: (user) => ({
        url: `/update-user`,
        method: 'PUT',
        body: user,
        type: baseUrlTypes.USERS,
      }),
    }),
    putUpdatePassword: builder.mutation({
      query: (data) => ({
        url: `/update-password`,
        method: 'PUT',
        body: data,
        type: baseUrlTypes.USERS,
      }),
    }),
  }),
});

export const { usePutUpdateUserMutation, usePutUpdatePasswordMutation } = userSlice;
