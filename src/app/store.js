import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { authApiSlice } from '../features/api/authApiSlice';
import { userSlice } from '../features/api/userSlice';
import { writingsSlice } from '../features/api/writingsSlice';

import authSlice from '../features/auth';
import globalDataSlice from '../features/globalData';
import surfacesSlice from '../features/surfaces';

const rootReducer = combineReducers({
  globalData: globalDataSlice,
  surfaces: surfacesSlice,
  auth: authSlice,
  [authApiSlice.reducerPath]: authApiSlice.reducer,
  [userSlice.reducerPath]: userSlice.reducer,
  [writingsSlice.reducerPath]: writingsSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApiSlice.middleware,
      userSlice.middleware,
      writingsSlice.middleware
    ),
  devTools: process.env.NODE_ENV !== 'production',
});
