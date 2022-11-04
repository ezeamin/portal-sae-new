import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchWritings: false,
};

const genericModalSlice = createSlice({
  name: 'modalState',
  initialState,
  reducers: {
    setWritingsModalSearch: (state, action) => {
      state.searchWritings = action.payload.searchWritings;
    },
  },
});

export const { setWritingsModalSearch } = genericModalSlice.actions;

export default genericModalSlice.reducer;