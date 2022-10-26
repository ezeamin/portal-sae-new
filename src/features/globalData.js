import { createSlice } from '@reduxjs/toolkit';
import themes from '../constants/themes';

const defaultPortraitValue = window.innerWidth < 600;

const initialState = {
  currentModule: 1000,
  user: {
    name: 'Ezequiel Amin',
    number: 20437063932,
    notifications: 5,
  },
  isPortrait: defaultPortraitValue,
  theme: themes.LIGHT,
};

const globalDataSlice = createSlice({
  name: 'globalData',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setCurrentModule: (state, action) => {
      state.currentModule = action.payload;
    },
    setIsPortrait: (state, action) => {
      if (state.isPortrait !== action.payload)
        state.isPortrait = action.payload;
    },
    setTheme: (state, action) => {
      switch (action.payload) {
        case themes.DARK:
          state.theme = themes.DARK;
          break;
        case themes.LIGHT:
          state.theme = themes.LIGHT;
          break;
        default:
          return;
      }
    },
  },
});

export const { setUser, setCurrentModule, setIsPortrait, setTheme } =
  globalDataSlice.actions;

export default globalDataSlice.reducer;
