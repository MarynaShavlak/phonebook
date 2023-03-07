import PropTypes from 'prop-types';
import { FilterBlock } from './Filter.styled';

export function Filter({ name, value, onChange, type }) {
  return (
    <FilterBlock>
    <label className="filter__field">
        <span className="filter__label">{type}</span>
        <input
          className="filter__input"
          type="text"
          name={name}
          placeholder={`Enter ${name} to search contact...`}
          value={value}
          onChange={onChange}
         />
    </label>
  </FilterBlock>);
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
}