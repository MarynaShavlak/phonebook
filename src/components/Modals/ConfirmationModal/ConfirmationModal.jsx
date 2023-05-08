import React from 'react';
import PropTypes from 'prop-types';
import { getModalMessage } from 'utils';
import { CONTACT_ACTIONS, GROUP_ACTIONS } from 'constants';
import { CustomModal } from 'shared';

export const ConfirmationModal = ({ data, action, ...otherProps }) => {
  return (
    <CustomModal action={action} {...otherProps}>
      <div className="confirmation__message">
        {getModalMessage({ action, data })}
      </div>
    </CustomModal>
  );
};

ConfirmationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  data: PropTypes.oneOfType([
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
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
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
      })
    ),
  ]),
  action: PropTypes.oneOf([
    CONTACT_ACTIONS.REMOVE_TO_RECYCLE_BIN,
    CONTACT_ACTIONS.RESTORE,
    CONTACT_ACTIONS.DELETE,
    CONTACT_ACTIONS.DELETE_ALL,
    GROUP_ACTIONS.DELETE,
    GROUP_ACTIONS.EDIT,
    GROUP_ACTIONS.ADD,
  ]).isRequired,

  onConfirm: PropTypes.func,
};
