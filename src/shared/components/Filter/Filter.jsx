import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { FilterBlock, Info } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { setFilterByName } from 'redux/filters/filterByNameSlice';
import { setFilterByNumber } from 'redux/filters/filterByNumberSlice';
import {
  selectFilterByName,
  selectFilterByNumber,
} from 'redux/filters/selectors';
import { selectFilteredContacts } from 'redux/contacts/selectors';

export function Filter({ name }) {
  const filterByName = useSelector(selectFilterByName);
  const filterByNumber = useSelector(selectFilterByNumber);
  const filteredContacts = useSelector(selectFilteredContacts);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const input = useRef();
  const inputFilterValue = input.current?.value;

  const setFilterValue = name => {
    switch (name) {
      case 'name':
        return filterByName;
      case 'number':
        return filterByNumber;
      default:
        return;
    }
  };

  const onChangeFilter = ({ target: { name, value } }) => {
    updateQueryString(name, value);
    switch (name) {
      case 'name':
        dispatch(setFilterByName(value));
        break;
      case 'number':
        dispatch(setFilterByNumber(value));
        break;
      default:
        return console.warn(`Type of field with name ${name} is not found`);
    }
  };

  const updateQueryString = (name, value) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.delete(name);
    if (value) newParams.append(name, value.toLowerCase());
    newParams.sort();
    setSearchParams(newParams);
  };

  return (
    <FilterBlock>
      <label>
        <span>{`Search by ${name}`}</span>
        <input
          ref={input}
          type="text"
          name={name}
          placeholder={`Type ${name}...`}
          value={setFilterValue(name)}
          onChange={onChangeFilter}
        />
      </label>
      {inputFilterValue && (
        <Info>
          Contacts found: <span>{filteredContacts.length}</span>
        </Info>
      )}
    </FilterBlock>
  );
}

Filter.propTypes = {
  name: PropTypes.string,
};
