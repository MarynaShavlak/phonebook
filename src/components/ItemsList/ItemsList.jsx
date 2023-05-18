import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { List, ContactItem } from './ItemsList.styled';
import { useSort } from 'hooks';
import { SORT_TYPES, LOCAL_STORAGE_KEYS } from 'constants';
import { ROUTES } from 'constants';

const { SORT_OPTION_KEY, REVERSE_SORT_KEY } = LOCAL_STORAGE_KEYS;

export const ItemsList = ({ items, renderItem, page }) => {
  // const { sortOption, reverseSort, sortContacts } = useSort(
  //   localStorage.getItem(SORT_OPTION_KEY) || SORT_TYPES.ALPHABETICALLY,
  //   localStorage.getItem(REVERSE_SORT_KEY) === 'true'
  // );

  // useEffect(() => {
  //   localStorage.setItem(SORT_OPTION_KEY, sortOption);
  //   localStorage.setItem(REVERSE_SORT_KEY, reverseSort);
  // }, [sortOption, reverseSort]);

  // const sortedContacts = sortContacts(items);
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
