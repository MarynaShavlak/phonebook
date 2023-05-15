import { createSelector } from '@reduxjs/toolkit';
import { selectFilterRecyclebinByName } from 'redux/filters/recyclebin/selectors';
export const selectRecycleBinContacts = state => state.recycleBin.recycleBin;
export const selectFilteredRecyclebinContacts = createSelector(
  [selectRecycleBinContacts, selectFilterRecyclebinByName],

  (contacts, filterByName) => {
    const normalizeFilter = filterByName.toLowerCase();
    if (!contacts) return [];
    const recyclebinContacts = contacts.filter(contact => {
      return (
        contact.name.includes(normalizeFilter) ||
        contact.number.includes(normalizeFilter)
      );
    });
    return recyclebinContacts;
  }
);
