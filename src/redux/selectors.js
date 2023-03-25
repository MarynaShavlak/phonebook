import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectRecycleBinContacts = state => state.recycleBin.recycleBin;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilterByName = state => state.filterName.value;
export const selectFilterByNumber = state => state.filterNumber.value;
export const selectIsEditContactModalOpen = state =>
  state.edditedContact.isModalOpen;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterByName, selectFilterByNumber],

  (contacts, filterByName, filterByNumber) => {
    const normalizeFilter = filterByName.toLowerCase();
    return contacts
      .filter(({ name }) => name.toLowerCase().includes(normalizeFilter))
      .filter(({ number }) => number.includes(filterByNumber));
  }
);
