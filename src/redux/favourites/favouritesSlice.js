import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  favourites: [],
};

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addContactToFavourites(state, action) {
      state.favourites = [action.payload, ...state.favourites];
    },

    removeContactFromFavourites(state, action) {
      state.favourites = state.favourites.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

const persistConfig = {
  key: 'favourites',
  storage,
  whitelist: ['favourites'],
};

export const { addContactToFavourites, removeContactFromFavourites } =
  favouritesSlice.actions;

export const favouritesReducer = persistReducer(
  persistConfig,
  favouritesSlice.reducer
);
