import { createSlice } from '@reduxjs/toolkit';
import { AUDIO_DRUMS, AUDIO_PIANO } from '../../data';

const initialState = {
  audio: AUDIO_DRUMS,
  activeKey: '',
  timeStamp: null,
  activation: false,
  activationClassName: 'active-btn',
};

const drumPadSlice = createSlice({
  name: 'drumPad',
  initialState,
  reducers: {
    setAudio: (state, action) => {
      state.audio = action.payload;
    },
    setActiveKey: (state, action) => {
      state.activeKey = action.payload;
      console.log(state.activeKey);
    },
    resetActiveKey: (state) => {
      state.activeKey = '';
    },
    setTimeStamp: (state) => {
      state.timeStamp = performance.now();
    },
    setActivation: (state, action) => {
      state.activation = !state.activation;
      const audioButton = document.getElementById(action.payload);
      if (state.activation) {
        audioButton.classList.add(state.activationClassName);
      } else {
        audioButton.classList.remove(state.activationClassName);
      }
    },
  },
});

export const {
  setAudio,
  setActiveKey,
  resetActiveKey,
  setTimeStamp,
  setActivation,
} = drumPadSlice.actions;

export default drumPadSlice.reducer;
