import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  contacts: [],
};

const contactListSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      state.contacts = [action.payload, ...state.contacts];
    },

    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },

    updateContactList(state, action) {
      state.contacts = state.contacts.map(el => {
        if (el.name === action.payload.name) {
          const newEl = {
            id: el.id,
            name: el.name,
            number: action.payload.number,
          };
          return newEl;
        }

        if (el.number === action.payload.number) {
          const newEl = {
            id: el.id,
            name: action.payload.name,
            number: el.number,
          };
          return newEl;
        }

        return el;
      });
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

export const { deleteContact, addContact, updateContactList } =
  contactListSlice.actions;
export const contactListReducer = persistReducer(
  persistConfig,
  contactListSlice.reducer
);
