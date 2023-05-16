import React from 'react';
import PropTypes from 'prop-types';
import { FilterBlock, Info } from './Filter.styled';
import { Name } from 'shared/components/ContactForm/ContactForm.styled';

import { useDispatch, useSelector } from 'react-redux';
// import { useSearchParams } from 'react-router-dom';
import { setFilter } from 'redux/filters/filterSlice';
import { selectFilter } from 'redux/filters/selectors';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { selectFilteredFavoritesContacts } from 'redux/favorites/selectors';
import { selectFilteredRecyclebinContacts } from 'redux/recycleBin/selectors';
import { ROUTES } from 'constants';

export function Filter({ page }) {
  const isOnContactsPage = page === ROUTES.CONTACTS;
  const isOnFavoritesPage = page === ROUTES.FAVORITES;
  // const isOnRecyclebinPage = page === ROUTES.RECYCLEBIN;

  const filter = useSelector(selectFilter(page));
  const filteredContacts = useSelector(selectFilteredContacts);
  const filteredFavoritesContacts = useSelector(
    selectFilteredFavoritesContacts
  );
  const filteredRecyclebinContacts = useSelector(
    selectFilteredRecyclebinContacts
  );
  // const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const contacts = isOnContactsPage
    ? filteredContacts
    : isOnFavoritesPage
    ? filteredFavoritesContacts
    : filteredRecyclebinContacts;

  const updateFilter = value => {
    dispatch(setFilter({ name: page, value: value }));
  };

  const onChangeFilter = ({ target: { name, value } }) => {
    // updateQueryString(name, value);
    updateFilter(value);
  };

  // const updateQueryString = (name, value) => {
  //   const newParams = new URLSearchParams(searchParams.toString());
  //   newParams.delete(name);
  //   if (value) newParams.append(name, value.toLowerCase());
  //   newParams.sort();
  //   setSearchParams(newParams);
  // };

  return (
    <FilterBlock>
      <label>
        <Name
          type="text"
          name="search"
          placeholder={`Search...`}
          value={filter}
          onChange={onChangeFilter}
        />
      </label>
      {filter && (
        <Info>
          Contacts found: <span>{contacts.length}</span>
        </Info>
      )}
    </FilterBlock>
  );
}

Filter.propTypes = {
  page: PropTypes.string.isRequired,
};
