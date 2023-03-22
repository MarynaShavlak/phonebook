import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getRecycleBinContacts = state => state.recycleBin.recycleBin;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getFilterByName = state => state.filterName.value;
export const getFilterByNumber = state => state.filterNumber.value;
export const isEditContactModalOpen = state => state.edditedContact.isModalOpen;

export const getFilteredContacts = createSelector(
  [getContacts, getFilterByName, getFilterByNumber],

  (contacts, filterByName, filterByNumber) => {
    const normalizeFilter = filterByName.toLowerCase();
    return contacts
      .filter(({ name }) => name.toLowerCase().includes(normalizeFilter))
      .filter(({ number }) => number.includes(filterByNumber));
  }
);
