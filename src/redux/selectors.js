import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.contacts;
export const getFilterByName = state => state.filterName.value;
export const getFilterByNumber = state => state.filterNumber.value;

export const getFilteredContacts = createSelector(
  [getContacts, getFilterByName, getFilterByNumber],

  (contacts, filterByName, filterByNumber) => {
    const normalizeFilter = filterByName.toLowerCase();
    return contacts
      .filter(contact => contact.name.toLowerCase().includes(normalizeFilter))
      .filter(contact => contact.number.includes(filterByNumber));
  }
);
