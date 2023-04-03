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
  clearFavourites,
} = favoritesSlice.actions;

export const favoritesReducer = persistReducer(
  persistConfig,
  favoritesSlice.reducer
);
