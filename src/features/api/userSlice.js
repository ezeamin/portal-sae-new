import { createApi } from '@reduxjs/toolkit/dist/query/react';

import { baseUrlTypes } from '../../constants/api/urls';
import { rtkBaseQuery } from './customBaseQuery';

const userBaseUrl = '/users';

export const userSlice = createApi({
  baseQuery: rtkBaseQuery,
  endpoints: (builder) => ({
    putUpdateUser: builder.mutation({
      query: (user) => ({
        url: `${userBaseUrl}/update-user`,
        method: 'PUT',
        body: user,
        type: baseUrlTypes.AUTH,
      }),
    }),
    putUpdatePassword: builder.mutation({
      query: (data) => ({
        url: `${userBaseUrl}/update-password`,
        method: 'PUT',
        body: data,
        type: baseUrlTypes.AUTH,
      }),
    }),
  }),
});

export const { usePutUpdateUserMutation, usePutUpdatePasswordMutation } = userSlice;
