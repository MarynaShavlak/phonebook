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
import { filterReducer } from './filters/filterSlice';
import { contactListReducer } from './contacts/contactListSlice';
import { recycleBinReducer } from './recycleBin/recycleBinSlice';
import { favoritesReducer } from './favorites/favoritesSlice';
import { groupsReducer } from './groups/groupsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactListReducer,
    filter: filterReducer,
    recycleBin: recycleBinReducer,
    favorites: favoritesReducer,
    groups: groupsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
