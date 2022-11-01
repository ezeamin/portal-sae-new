import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

/* ---------------------- Environment variables ----------------------------- */
const baseUrl = process.env.REACT_APP_BASE_URL;
/* ------------------------------------------------------------------------- */

export const writingsSlice = createApi({
  reducerPath: 'writings',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getWritings: builder.query({
      query: () => `find-all-by-filters-paginated?page=0&size=20`,
    }),
  }),
});

export const { useGetWritingsQuery } = writingsSlice;
