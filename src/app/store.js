import { configureStore } from '@reduxjs/toolkit';

import { writingsSlice } from '../features/api/writingsSlice';

import genericModalSlice from '../features/modal/genericModalSlice';
import globalDataSlice from '../features/globalData';
import surfacesSlice from '../features/surfaces';

export default configureStore({
  reducer: {
    genericModal: genericModalSlice,
    globalData: globalDataSlice,
    surfaces: surfacesSlice,
    [writingsSlice.reducerPath]: writingsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(writingsSlice.middleware),
});
