import { configureStore } from '@reduxjs/toolkit';
import drumPadReducer from './features/drumPad/drumPadSlice';
import powerReducer from './features/power/powerSlice';
import displayReducer from './features/display/displaySlice';
import volumeReducer from './features/volume/volumeSlice';
import bankReducer from './features/bank/bankSlice';

export const store = configureStore({
  reducer: {
    drumPad: drumPadReducer,
    power: powerReducer,
    display: displayReducer,
    volume: volumeReducer,
    bank: bankReducer,
  },
});
