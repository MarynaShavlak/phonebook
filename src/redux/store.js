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
import { authReducer } from 'redux/auth/authSlice';
import { filterByNameReducer } from './filters/filterByNameSlice';
import { filterByNumberReducer } from './filters/filterByNumberSlice';
import { contactListReducer } from './contacts/contactListSlice';
import { recycleBinReducer } from './recycleBin/recycleBinSlice';
import { favouritesReducer } from './favourites/favouritesSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactListReducer,
    filterName: filterByNameReducer,
    filterNumber: filterByNumberReducer,
    recycleBin: recycleBinReducer,
    favourites: favouritesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
