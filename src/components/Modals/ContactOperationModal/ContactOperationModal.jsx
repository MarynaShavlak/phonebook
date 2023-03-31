import React from 'react';
import PropTypes from 'prop-types';
import { ConfirmationModal } from 'components';
import { getMessage } from 'utils';
import { ContactActions } from 'constants';

export const ContactOperationModal = ({
  contact,
  action,
  onConfirm,
  ...otherProps
}) => {
  return (
    <ConfirmationModal action={action} onConfirm={onConfirm} {...otherProps}>
      <div className="confirmation__message">
        {getMessage({ action, contact })}
      </div>
    </ConfirmationModal>
  );
};

ContactOperationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  action: PropTypes.oneOf([
    ContactActions.REMOVE_TO_RECYCLE_BIN,
    ContactActions.RESTORE,
    ContactActions.DELETE,
  ]).isRequired,

  onConfirm: PropTypes.func,
};
