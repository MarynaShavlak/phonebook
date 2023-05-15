import { createSelector } from '@reduxjs/toolkit';
import { selectFilterFavoritesByName } from 'redux/filters/favorites/selectors';
export const selectFavoritesContacts = state => state.favorites.favorites;

export const selectFilteredFavoritesContacts = createSelector(
  [selectFavoritesContacts, selectFilterFavoritesByName],

  (contacts, filterFavoritesByName) => {
    const normalizeFilter = filterFavoritesByName.toLowerCase();
    if (!contacts) return [];
    const filteredContacts = contacts.filter(contact => {
      return (
        contact.name.includes(normalizeFilter) ||
        contact.number.includes(normalizeFilter)
      );
    });
    return filteredContacts;
  }
);
