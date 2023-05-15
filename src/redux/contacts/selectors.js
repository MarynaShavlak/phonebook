import { createSelector } from '@reduxjs/toolkit';
import { selectFilterByName } from 'redux/filters/selectors';
export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterByName('contacts')],

  (contacts, filterByName) => {
    console.log('filterByName: ', filterByName);
    const normalizeFilter = filterByName.toLowerCase();
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
