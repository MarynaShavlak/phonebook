import { createSelector } from '@reduxjs/toolkit';
import { ROUTES } from 'constants';
import { selectFilter } from 'redux/filters';

export const selectRecyclebinContacts = state => state.recycleBin.recycleBin;
export const selectFilteredRecyclebinContacts = createSelector(
  [selectRecyclebinContacts, selectFilter(ROUTES.RECYCLEBIN)],

  (contacts, filter) => {
    const normalizeFilter = filter.toLowerCase();
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
