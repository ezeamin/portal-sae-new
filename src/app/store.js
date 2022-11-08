import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { authApiSlice } from '../features/api/authApiSlice';
import { writingsSlice } from '../features/api/writingsSlice';

import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authSlice from '../features/auth';
import globalDataSlice from '../features/globalData';
import surfacesSlice from '../features/surfaces';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  globalData: globalDataSlice,
  surfaces: surfacesSlice,
  auth: authSlice,
  [authApiSlice.reducerPath]: authApiSlice.reducer,
  [writingsSlice.reducerPath]: writingsSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(
  //     authApiSlice.middleware,
  //     writingsSlice.middleware
  //   ),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
