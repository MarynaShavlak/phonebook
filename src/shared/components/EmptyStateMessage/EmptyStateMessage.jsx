import React from 'react';
import { Button } from 'shared/commonStyledComponents.jsx';
import { Notification } from 'shared';
// import { ROUTES } from 'constants';

export const EmptyStateMessage = ({ onActionBtnClick }) => {
  // const isOnFavoritesPage = page === ROUTES.FAVORITES;
  // const isOnGroupsPage = page === ROUTES.GROUPS;
  // const isOnContactsPage = page === ROUTES.CONTACTS;
  // const isOnRecyclebinPage = page === ROUTES.RECYCLEBIN;

  return (
    <>
      <Notification message="Add your first contact today and discover the amazing possibilities of Phone Genie!" />
      <Button type="button" onClick={onActionBtnClick}>
        Add contact
      </Button>
    </>
  );
};
