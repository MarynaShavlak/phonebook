import PropTypes from 'prop-types';
import { FilterBlock } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterByName } from 'redux/filterByNameSlice';
import { setFilterByNumber } from 'redux/filterByNumberSlice';
import { getFilterByName, getFilterByNumber } from 'redux/selectors';

export function Filter({ name }) {
  const filterByName = useSelector(getFilterByName);
  const filterByNumber = useSelector(getFilterByNumber);
  const dispatch = useDispatch();

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

  return (
    <FilterBlock>
      <label className="filter__field">
        <span className="filter__label">{`Find contacts by ${name}`}</span>
        <input
          className="filter__input"
          type="text"
          name={name}
          placeholder={`Enter ${name} to search contact...`}
          value={setFilterValue()}
          onChange={onChangeFilter}
        />
      </label>
    </FilterBlock>
  );
}

Filter.propTypes = {
  name: PropTypes.string,
};
