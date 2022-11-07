import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

/* ---------------------- Environment variables ----------------------------- */
const baseUrl = process.env.REACT_APP_PORTAL_BASE_URL;
/* ------------------------------------------------------------------------- */

export const writingsSlice = createApi({
  reducerPath: 'writings',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getWritings: builder.query({
      query: ({ numPage, quantityPerPage }) =>
        `find-all-by-filters-paginated?page=${numPage}&size=${quantityPerPage}`,
    }),
  }),
});

export const { useGetWritingsQuery } = writingsSlice;
