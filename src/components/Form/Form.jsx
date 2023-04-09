import React from 'react';
import PropTypes from 'prop-types';
import { FormStyled, FormItem, FormList } from './Form.styled';
import { renderIcons } from 'utils/renderIcons';
import { OperationButton } from 'components';

export function Form({ name, number, operationType, onSubmit, onChange }) {
  return (
    <FormStyled onSubmit={onSubmit}>
      <FormList>
        <FormItem>
          <label>
            <span>Name</span>
            <span>
              {renderIcons('man', 20)}
              <input
                type="text"
                name="name"
                value={name}
                onChange={onChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </span>
          </label>
        </FormItem>
        <FormItem>
          <label>
            <span>Number</span>
            <span>
              {renderIcons('number', 20)}
              <input
                type="tel"
                name="number"
                value={number}
                onChange={onChange}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </span>
          </label>
        </FormItem>
      </FormList>
      <OperationButton>{operationType}</OperationButton>
    </FormStyled>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  operationType: PropTypes.string.isRequired,
};
