import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { authApiSlice } from '../features/api/authApiSlice';
import { userSlice } from '../features/api/userSlice';
import { writingsSlice } from '../features/api/writingsSlice';

import { persistReducer, persistStore } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';

import authSlice from '../features/auth';
import globalDataSlice from '../features/globalData';
import surfacesSlice from '../features/surfaces';

const persistConfig = {
  key: 'root',
  storage: storageSession,
};

const rootReducer = combineReducers({
  globalData: globalDataSlice,
  surfaces: surfacesSlice,
  auth: authSlice,
  [authApiSlice.reducerPath]: authApiSlice.reducer,
  [userSlice.reducerPath]: userSlice.reducer,
  [writingsSlice.reducerPath]: writingsSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      // ! Esto debe ser corregido
    }).concat(
      thunk,
      authApiSlice.middleware,
      userSlice.middleware,
      writingsSlice.middleware,
    ),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
