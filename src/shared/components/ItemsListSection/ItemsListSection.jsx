import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ItemsList, ContactSortMenu } from 'components';
import { Notification, EmptyStateMessage } from 'shared';
import { selectContacts, selectFilteredContacts } from 'redux/contacts';
import {
  selectRecyclebinContacts,
  selectFilteredRecyclebinContacts,
} from 'redux/recycleBin';
import {
  selectFavoritesContacts,
  selectFilteredFavoritesContacts,
} from 'redux/favorites';

import { selectFilter } from 'redux/filters';
import { selectGroups, selectFilteredGroups } from 'redux/groups';
import { ROUTES } from 'constants';

export const ItemsListSection = ({ page, renderItem, onActionBtnClick }) => {
  // const isOnFavoritesPage = page === ROUTES.FAVORITES;
  const isOnGroupsPage = page === ROUTES.GROUPS;
  const isOnContactsPage = page === ROUTES.CONTACTS;
  // const isOnRecyclebinPage = page === ROUTES.RECYCLEBIN;

  const allContacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);
  const favoriteContacts = useSelector(selectFavoritesContacts);
  const filteredFavoritesContacts = useSelector(
    selectFilteredFavoritesContacts
  );
  const recyclebinContacts = useSelector(selectRecyclebinContacts);
  const filteredRecyclebinContacts = useSelector(
    selectFilteredRecyclebinContacts
  );
  const groups = useSelector(selectGroups);
  const filteredGroups = useSelector(selectFilteredGroups);

  const getItems = page => {
    switch (page) {
      case ROUTES.CONTACTS:
        return allContacts;
      case ROUTES.FAVORITES:
        return favoriteContacts;
      case ROUTES.RECYCLEBIN:
        return recyclebinContacts;
      case ROUTES.GROUPS:
        return groups;
      default:
        return allContacts;
    }
  };
  const getFilteredItems = page => {
    switch (page) {
      case ROUTES.CONTACTS:
        return filteredContacts;
      case ROUTES.FAVORITES:
        return filteredFavoritesContacts;
      case ROUTES.RECYCLEBIN:
        return filteredRecyclebinContacts;
      case ROUTES.GROUPS:
        return filteredGroups;
      default:
        return filteredContacts;
    }
  };
  const filter = useSelector(selectFilter(page));
  console.log('filter in listSection: ', filter);
  const items = getItems(page);
  const filteredItems = getFilteredItems(page);
  const isFiltered = !!filter && !!items?.length;
  const noMatchesMessage = isOnGroupsPage
    ? `No groups found matching your search criteria for names containing '${filter}'`
    : `No contacts found matching your search criteria for names or numbers containing '${filter}'`;

  return (
    <>
      <>
        {filteredItems?.length ? (
          <>
            <ContactSortMenu />
            <ItemsList
              items={filteredItems}
              renderItem={renderItem}
              page={page}
            />
          </>
        ) : isFiltered ? (
          <Notification message={noMatchesMessage} />
        ) : isOnContactsPage || isOnGroupsPage ? (
          <EmptyStateMessage onActionBtnClick={onActionBtnClick} page={page} />
        ) : (
          <Notification message={`There are no contacts in ${page} now`} />
        )}
      </>
    </>
  );
};

ItemsListSection.propTypes = {
  page: PropTypes.string.isRequired,
  renderItem: PropTypes.func,
  onActionBtnClick: PropTypes.func,
};
