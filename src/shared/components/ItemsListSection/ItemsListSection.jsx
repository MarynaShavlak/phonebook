import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ItemsList, ContactSortMenu } from 'components';
import { Notification, EmptyStateMessage } from 'shared';
import {
  selectContacts,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/contacts';
import {
  selectRecyclebinContacts,
  selectFilteredRecyclebinContacts,
} from 'redux/recycleBin';
import {
  selectFavoritesContacts,
  selectFilteredFavoritesContacts,
} from 'redux/favorites';

import { selectFilter } from 'redux/filters';
import { ROUTES } from 'constants';

export const ItemsListSection = ({ page, renderContact }) => {
  // const isOnFavoritesPage = page === ROUTES.FAVORITES;
  const isOnGroupsPage = page === ROUTES.GROUPS;
  const isOnContactsPage = page === ROUTES.CONTACTS;
  // const isOnRecyclebinPage = page === ROUTES.RECYCLEBIN;

  const navigate = useNavigate();
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

  const getItems = page => {
    switch (page) {
      case ROUTES.CONTACTS:
        return allContacts;
      case ROUTES.FAVORITES:
        return favoriteContacts;
      case ROUTES.RECYCLEBIN:
        return recyclebinContacts;
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
      default:
        return filteredContacts;
    }
  };
  const filter = useSelector(selectFilter(page));
  const items = getItems(page);
  const filteredItems = getFilteredItems(page);
  const isFiltered = !!filter && !!items?.length;

  const openCreateNewContactPage = () => {
    navigate(`${ROUTES.CREATE}`);
  };

  return (
    <>
      <>
        {filteredItems?.length ? (
          <>
            <ContactSortMenu />
            <ItemsList
              items={filteredItems}
              renderItem={renderContact}
              page={page}
            />
          </>
        ) : isFiltered ? (
          <Notification
            message={`No contacts found matching your search criteria for names or numbers containing '${filter}'`}
          />
        ) : isOnContactsPage || isOnGroupsPage ? (
          <EmptyStateMessage onActionBtnClick={openCreateNewContactPage} />
        ) : (
          <Notification message={`There are no contacts in ${page} now`} />
        )}
      </>
    </>
  );
};
