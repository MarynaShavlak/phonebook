import React from 'react';
import PropTypes from 'prop-types';
import { ConfirmationModal } from 'components';
import { getMessage } from 'utils';
import { CONTACT_ACTIONS, GROUP_ACTIONS } from 'constants';

export const OperationModal = ({ data, action, ...otherProps }) => {
  // const { id, name, number, contacts } = data;
  console.log('action', action);
  return (
    <ConfirmationModal action={action} {...otherProps}>
      <div className="confirmation__message">
        {getMessage({ action, data })}
      </div>
    </ConfirmationModal>
  );
};

OperationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  data: PropTypes.oneOfType([
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      contacts: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          name: PropTypes.string,
          number: PropTypes.string,
        })
      ),
    }),
  ]).isRequired,
  action: PropTypes.oneOf([
    CONTACT_ACTIONS.REMOVE_TO_RECYCLE_BIN,
    CONTACT_ACTIONS.RESTORE,
    CONTACT_ACTIONS.DELETE,
    GROUP_ACTIONS.DELETE,
    GROUP_ACTIONS.EDIT,
  ]).isRequired,

  onConfirm: PropTypes.func,
};
