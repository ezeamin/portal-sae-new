import { configureStore } from "@reduxjs/toolkit";

import globalDataSlice from "../features/globalData";

export const store = configureStore({
    reducer: {
        globalData: globalDataSlice
    },
  });