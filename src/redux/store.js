import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { filterByNameReducer } from './filterByNameSlice';
import { filterByNumberReducer } from './filterByNumberSlice';
import { contactListReducer } from './contactListSlice';
import { editContactReducer } from './editContactSlice';

export const store = configureStore({
  reducer: {
    contacts: contactListReducer,
    filterName: filterByNameReducer,
    filterNumber: filterByNumberReducer,
    edditedContact: editContactReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
