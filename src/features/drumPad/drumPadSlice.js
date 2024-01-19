import { createSlice } from '@reduxjs/toolkit';
import { AUDIO_DRUMS, AUDIO_PIANO } from '../../data';

const initialState = {
  audio: AUDIO_DRUMS,
  activeKey: '',
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
  },
});

export const { setAudio, setActiveKey, resetActiveKey } = drumPadSlice.actions;

export default drumPadSlice.reducer;
