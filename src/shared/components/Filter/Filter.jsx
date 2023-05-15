import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FilterBlock, Info } from './Filter.styled';
import { Name } from 'shared/components/ContactForm/ContactForm.styled';

import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
// import { setFilterByName } from 'redux/filters/contacts/filterByNameSlice';
// import { setFilterByNumber } from 'redux/filters/contacts/filterByNumberSlice';
import { setFilterByName } from 'redux/filters/filterByNameSlice';
import { setFilterByNumber } from 'redux/filters/filterByNumberSlice';
import { setFilterFavoritesByName } from 'redux/filters/favorites/filterByNameSlice';
import { setFilterFavoritesByNumber } from 'redux/filters/favorites/filterByNumberSlice';
import { setFilterRecyclebinByName } from 'redux/filters/recyclebin/filterByNameSlice';
import { setFilterRecyclebinByNumber } from 'redux/filters/recyclebin/filterByNumberSlice';
import {
  selectFilterByName,
  selectFilterByNumber,
} from 'redux/filters/selectors';
import {
  selectFilterFavoritesByName,
  selectFilterFavoritesByNumber,
} from 'redux/filters/favorites/selectors';
import {
  selectFilterRecyclebinByName,
  selectFilterRecyclebinByNumber,
} from 'redux/filters/recyclebin/selectors';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { selectFilteredFavoritesContacts } from 'redux/favorites/selectors';
import { selectFilteredRecyclebinContacts } from 'redux/recycleBin/selectors';
import { ROUTES } from 'constants';

export function Filter({ page }) {
  const isOnContactsPage = page === ROUTES.CONTACTS;
  const isOnFavoritesPage = page === ROUTES.FAVORITES;
  const isOnRecyclebinPage = page === ROUTES.RECYCLEBIN;

  // const filterByName = useSelector(selectFilterByName);
  // const filterByNumber = useSelector(selectFilterByNumber);
  const filterByName = useSelector(selectFilterByName('contacts'));
  const filterByNumber = useSelector(selectFilterByNumber('contacts'));
  const filterFavoritesByName = useSelector(selectFilterFavoritesByName);
  const filterFavoritesByNumber = useSelector(selectFilterFavoritesByNumber);
  const filterRecyclebinByName = useSelector(selectFilterRecyclebinByName);
  const filterRecyclebinByNumber = useSelector(selectFilterRecyclebinByNumber);

  const filteredContacts = useSelector(selectFilteredContacts);
  const filteredFavoritesContacts = useSelector(
    selectFilteredFavoritesContacts
  );
  const filteredRecyclebinContacts = useSelector(
    selectFilteredRecyclebinContacts
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const nameSearch = isOnContactsPage
    ? filterByName
    : isOnFavoritesPage
    ? filterFavoritesByName
    : filterRecyclebinByName;

  const numberSearch = isOnContactsPage
    ? filterByNumber
    : isOnFavoritesPage
    ? filterFavoritesByNumber
    : filterRecyclebinByNumber;

  const contacts = isOnContactsPage
    ? filteredContacts
    : isOnFavoritesPage
    ? filteredFavoritesContacts
    : filteredRecyclebinContacts;

  const updateFilterName = value => {
    return isOnContactsPage
      ? dispatch(setFilterByName({ name: page, value: value }))
      : isOnFavoritesPage
      ? dispatch(setFilterFavoritesByName(value))
      : dispatch(setFilterRecyclebinByName(value));
  };

  const updateFilterNumber = value => {
    return isOnContactsPage
      ? dispatch(setFilterByNumber({ name: page, value: value }))
      : isOnFavoritesPage
      ? dispatch(setFilterFavoritesByNumber(value))
      : dispatch(setFilterRecyclebinByNumber(value));
  };

  const onChangeFilter = ({ target: { name, value } }) => {
    // updateQueryString(name, value);
    updateFilterName(value);
    updateFilterNumber(value);
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
          value={nameSearch}
          onChange={onChangeFilter}
        />
      </label>
      {nameSearch && (
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
