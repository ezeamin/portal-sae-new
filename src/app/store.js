import { configureStore } from "@reduxjs/toolkit";

import globalDataSlice from "../features/globalData";
import surfacesSlice from "../features/surfaces";

export const store = configureStore({
    reducer: {
        globalData: globalDataSlice,
        surfaces: surfacesSlice,
    },
  });