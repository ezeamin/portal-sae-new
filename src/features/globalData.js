import { createSlice } from '@reduxjs/toolkit';

const defaultPortraitValue = window.innerWidth < 600;

const initialState = {
  actualPage: 'Inicio',
  user: {
    name: 'Ezequiel Amin',
    number: 20437063932,
  },
  isPortrait: defaultPortraitValue,
};

const globalDataSlice = createSlice({
  name: 'globalData',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setActualPage: (state, action) => {
      state.actualPage = action.payload;
    },
    setIsPortrait: (state, action) => {
      if (state.isPortrait !== action.payload)
        state.isPortrait = action.payload;
    },
  },
});

export const { setUser, setActualPage, setIsPortrait } =
  globalDataSlice.actions;

export default globalDataSlice.reducer;
