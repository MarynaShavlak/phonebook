import React from 'react';
import PropTypes from 'prop-types';
import { Name } from 'shared/components/ContactForm/ContactForm.styled';
import { ModalInputWrapper, ModalError } from 'shared/commonStyledComponents';

export const ModalInput = ({ groupName, groupNameError, handleNameChange }) => {
  return (
    <ModalInputWrapper>
      <Name
        type="text"
        name="name"
        value={groupName}
        onChange={e => handleNameChange(e.target.value)}
      />
      {groupNameError && <ModalError>{groupNameError}</ModalError>}
    </ModalInputWrapper>
  );
};

ModalInput.propTypes = {
  groupName: PropTypes.string.isRequired,
  handleNameChange: PropTypes.func.isRequired,
  groupNameError: PropTypes.string,
};
