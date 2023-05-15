import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from 'redux/filters/selectors';
export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter('contacts')],

  (contacts, filter) => {
    const normalizeFilter = filter.toLowerCase();
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
