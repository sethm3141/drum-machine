import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  text: '',
};

const displaySlice = createSlice({
  name: 'display',
  initialState,
  reducers: {
    setText: (state, action) => {
      const newText = action.payload;
      state.text = newText;
    },
    emptyText: (state) => {
      state.text = '';
    },
  },
});

export const { setText, emptyText } = displaySlice.actions;

export default displaySlice.reducer;
