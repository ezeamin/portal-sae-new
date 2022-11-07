import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from '../features/api/authSlice';
import { writingsSlice } from '../features/api/writingsSlice';

import globalDataSlice from '../features/globalData';
import surfacesSlice from '../features/surfaces';

export default configureStore({
  reducer: {
    globalData: globalDataSlice,
    surfaces: surfacesSlice,
    [authSlice.reducerPath]: authSlice.reducer,
    [writingsSlice.reducerPath]: writingsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(writingsSlice.middleware),
});
