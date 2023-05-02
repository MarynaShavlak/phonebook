import { createSelector } from '@reduxjs/toolkit';
import {
  selectFilterByName,
  selectFilterByNumber,
} from 'redux/filters/selectors';
export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterByName, selectFilterByNumber],

  (contacts, filterByName, filterByNumber) => {
    const normalizeFilter = filterByName.toLowerCase();
    if (!contacts) return [];
    return contacts
      ?.filter(({ name }) => name.toLowerCase().includes(normalizeFilter))
      ?.filter(({ number }) => number.includes(filterByNumber));
  }
);
