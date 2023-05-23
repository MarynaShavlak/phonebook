import React, { useEffect } from 'react';
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
import { selectFilteredGroups } from 'redux/groups';
import { ROUTES } from 'constants';

export const Filter = ({ page, isSearchMenuOpen }) => {
  const isOnContactsPage = page === ROUTES.CONTACTS;
  const isOnFavoritesPage = page === ROUTES.FAVORITES;
  const isOnGroupsPage = page === ROUTES.GROUPS;
  const isOnRecyclebinPage = page === ROUTES.RECYCLEBIN;
  const updateFilter = value => {
    dispatch(setFilter({ name: page, value: value }));
  };

  useEffect(() => {
    if (!isSearchMenuOpen) {
      updateFilter('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSearchMenuOpen]);

  const filter = useSelector(selectFilter(page));
  const filteredContacts = useSelector(selectFilteredContacts);
  const filteredFavoritesContacts = useSelector(
    selectFilteredFavoritesContacts
  );
  const filteredRecyclebinContacts = useSelector(
    selectFilteredRecyclebinContacts
  );
  const filteredGroups = useSelector(selectFilteredGroups);
  // const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const items = isOnContactsPage
    ? filteredContacts
    : isOnFavoritesPage
    ? filteredFavoritesContacts
    : isOnRecyclebinPage
    ? filteredRecyclebinContacts
    : filteredGroups;

  const itemsName = isOnGroupsPage ? 'Groups' : 'Contacts';

  const onChangeFilter = ({ target: { name, value } }) => {
    // updateQueryString(name, value);
    updateFilter(value);
  };

  return (
    isSearchMenuOpen && (
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
            {itemsName} found: <span>{items.length}</span>
          </Info>
        )}
      </FilterBlock>
    )
  );
};

Filter.propTypes = {
  page: PropTypes.string.isRequired,
};

// const updateQueryString = (name, value) => {
//   const newParams = new URLSearchParams(searchParams.toString());
//   newParams.delete(name);
//   if (value) newParams.append(name, value.toLowerCase());
//   newParams.sort();
//   setSearchParams(newParams);
// };
