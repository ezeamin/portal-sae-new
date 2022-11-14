import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {
    modal: false,
    name: '',
    type: '',
  }
};

const genericModalSlice = createSlice({
  name: 'modalState',
  initialState,
  reducers: {
    setModal: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setModal } = genericModalSlice.actions;

export default genericModalSlice.reducer;