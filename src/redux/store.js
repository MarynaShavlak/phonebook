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
// import { filterByNameReducer } from './filters/contacts/filterByNameSlice';
import { filterByNameReducer } from './filters/filterByNameSlice';
import { filterFavoritesByNameReducer } from './filters/favorites/filterByNameSlice';
import { filterRecyclebinByNameReducer } from './filters/recyclebin/filterByNameSlice';
// import { filterByNumberReducer } from './filters/contacts/filterByNumberSlice';
import { filterByNumberReducer } from './filters/filterByNumberSlice';
import { filterFavoritesByNumberReducer } from './filters/favorites/filterByNumberSlice';
import { filterRecyclebinByNumberReducer } from './filters/recyclebin/filterByNumberSlice';
import { contactListReducer } from './contacts/contactListSlice';
import { recycleBinReducer } from './recycleBin/recycleBinSlice';
import { favoritesReducer } from './favorites/favoritesSlice';
import { groupsReducer } from './groups/groupsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactListReducer,
    filterByName: filterByNameReducer,
    filterFavoritesByName: filterFavoritesByNameReducer,
    filterRecyclebinByName: filterRecyclebinByNameReducer,
    filterByNumber: filterByNumberReducer,
    filterFavoritesByNumber: filterFavoritesByNumberReducer,
    filterRecyclebinByNumber: filterRecyclebinByNumberReducer,
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
