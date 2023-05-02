import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addContactToFavorites(state, action) {
      state.favorites = [action.payload, ...state.favorites];
    },

    removeContactFromFavorites(state, action) {
      state.favorites = state.favorites.filter(
        contact => contact.id !== action.payload
      );
    },
    updateFavoriteContact(state, action) {
      const newContacts = state.favorites.map(el => {
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
      state.favorites = newContacts;
    },

    clearFavourites(state) {
      state.favorites = [];
    },
  },
});

const persistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['favorites'],
};

export const {
  addContactToFavorites,
  removeContactFromFavorites,
  updateFavoriteContact,
  clearFavourites,
} = favoritesSlice.actions;

export const favoritesReducer = persistReducer(
  persistConfig,
  favoritesSlice.reducer
);
