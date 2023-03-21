import { configureStore } from '@reduxjs/toolkit';
import { filterByNameReducer } from './filterByNameSlice';
import { filterByNumberReducer } from './filterByNumberSlice';
import { contactListReducer } from './contactListSlice';

export const store = configureStore({
  reducer: {
    contacts: contactListReducer,
    filterName: filterByNameReducer,
    filterNumber: filterByNumberReducer,
  },
});
