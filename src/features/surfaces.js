import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modulesModalOpened: false,
  mainDrawerOpened: false,
};

const surfacesSlice = createSlice({
  name: 'surfaces',
  initialState,
  reducers: {
    setModulesModalOpened: (state, action) => {
      state.modulesModalOpened = !!action.payload;
    },
    setMainDrawerOpened: (state, action) => {
      state.mainDrawerOpened = !!action.payload;
    },
  },
});

export const { setModulesModalOpened, setMainDrawerOpened } =
  surfacesSlice.actions;

export default surfacesSlice.reducer;
