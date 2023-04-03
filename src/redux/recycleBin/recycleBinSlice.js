import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  recycleBin: [],
};

const recycleBinSlice = createSlice({
  name: 'recycleBin',
  initialState,
  reducers: {
    addContactToRecycleBin(state, action) {
      state.recycleBin = [action.payload, ...state.recycleBin];
    },

    removeContactFromRecycleBin(state, action) {
      state.recycleBin = state.recycleBin.filter(
        contact => contact.id !== action.payload
      );
    },
    clearRecycleBin(state) {
      state.recycleBin = [];
    },
  },
});

const persistConfig = {
  key: 'recycleBin',
  storage,
  whitelist: ['recycleBin'],
};

export const {
  addContactToRecycleBin,
  removeContactFromRecycleBin,
  clearRecycleBin,
} = recycleBinSlice.actions;

export const recycleBinReducer = persistReducer(
  persistConfig,
  recycleBinSlice.reducer
);
