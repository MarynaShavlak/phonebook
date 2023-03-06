import PropTypes from 'prop-types';
import { FilterBlock } from './Filter.styled';

export function Filter({ value, onChange }) {
  return (
    <FilterBlock>
    <label className="filter__field">
        <span className="filter__label">Find contacts by name</span>
        <input
          className="filter__input"
          type="text"
          value={value}
          onChange={onChange}
         />
    </label>
  </FilterBlock>);
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
}