import React from 'react';
import 'components/ConfirmationModal/ConfirmationModal.css';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Notifications } from 'utils';
import { removeContactFromRecycleBin } from 'redux/recycleBin/recycleBinSlice';
import { ConfirmationModal } from 'components';

export const DeleteFromRecycleBinModal = ({ isOpen, onClose, contact }) => {
  const dispatch = useDispatch();
  const deleteContact = () => {
    dispatch(removeContactFromRecycleBin(contact.id));
    Notifications.showRecyclebinInfo(contact);
  };

  return (
    <ConfirmationModal
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={deleteContact}
      action="delete contact"
    >
      <>
        <p className="confirmation__message">
          <span>Are you sure you want to delete contact with name</span>{' '}
          <span>
            <b>{contact.name}</b>
          </span>{' '}
          <span>and number</span>{' '}
          <span>
            <b>{contact.number}</b>{' '}
          </span>
          from recycle bin?
        </p>
        <p className="confirmation__message">
          It will be impossible to restore this contact.
        </p>
      </>
    </ConfirmationModal>
  );
};

DeleteFromRecycleBinModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
