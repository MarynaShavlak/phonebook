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

    // updateContactList(state, action) {
    //   state.contacts = state.contacts.map(el => {
    //     if (el.name === action.payload.name) {
    //       const newEl = {
    //         id: el.id,
    //         name: el.name,
    //         number: action.payload.number,
    //       };
    //       return newEl;
    //     }

    //     if (el.number === action.payload.number) {
    //       const newEl = {
    //         id: el.id,
    //         name: action.payload.name,
    //         number: el.number,
    //       };
    //       return newEl;
    //     }

    //     return el;
    //   });
    // },
  },
});

const persistConfig = {
  key: 'recycleBin',
  storage,
  whitelist: ['recycleBin'],
};

export const { addContactToRecycleBin, removeContactFromRecycleBin } =
  recycleBinSlice.actions;

export const recycleBinReducer = persistReducer(
  persistConfig,
  recycleBinSlice.reducer
);
