import { createSelector } from '@reduxjs/toolkit';
import { ROUTES } from 'constants';
import { selectFilter } from 'redux/filters/selectors';
export const selectFavoritesContacts = state => state.favorites.favorites;

export const selectFilteredFavoritesContacts = createSelector(
  [selectFavoritesContacts, selectFilter(ROUTES.FAVORITES)],

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
