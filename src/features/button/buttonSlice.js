import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activation: false,
  activeButtonClass: 'sdm-active-btn',
};

const buttonSlice = createSlice({
  name: 'button',
  initialState,
  reducers: {
    setActivation: (state, action) => {
      state.activation = !state.activation;
      const audioButton = document.getElementById(action.payload);
      if (state.activation) {
        audioButton.classList.add(state.activeButtonClass);
      } else {
        audioButton.classList.remove(state.activeButtonClass);
      }
    },
  },
});

export const { setActivation } = buttonSlice.actions;

export default buttonSlice.reducer;
