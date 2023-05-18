import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { List, ContactItem } from './ItemsList.styled';
import { ROUTES } from 'constants';
import { LOCAL_STORAGE_KEYS } from 'constants';
import { useLocalStorageNonString } from 'hooks';

export const ItemsList = ({ items, renderItem, page }) => {
  const storedOption = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_KEYS.SORT_STATE)
  );

  const [type, setType] = useState(storedOption);
  console.log('type: ', type);

  const isOnContactsPage = page === ROUTES.CONTACTS;
  const itemsToDisplay = isOnContactsPage ? items : items;

  return (
    <>
      <List>
        {itemsToDisplay.map(contact => (
          <ContactItem key={contact.id}>{renderItem(contact)}</ContactItem>
        ))}
      </List>
    </>
  );
};

ItemsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  renderItem: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired,
};
