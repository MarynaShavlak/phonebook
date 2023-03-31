import React from 'react';
import 'components/ConfirmationModal/ConfirmationModal.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Notifications } from 'utils';
import * as contactsOperations from 'redux/contacts/contactsOperations';
import { removeContactFromRecycleBin } from 'redux/recycleBin/recycleBinSlice';
import { selectContacts } from 'redux/contacts/selectors';
import { ConfirmationModal } from 'components';

export const RestoreFromRecycleBinModal = ({ isOpen, onClose, contact }) => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const restoreContact = () => {
    const isContactExist = checkContactInBook(contact);
    if (isContactExist) return;

    dispatch(contactsOperations.addContact(contact));
    dispatch(removeContactFromRecycleBin(contact.id));
    Notifications.showContactSuccess('restore', contact);
  };

  const checkContactInBook = contact => {
    const isNumberExist = contacts.some(el => el.number === contact.number);
    const isNameExist = contacts.some(el => el.name === contact.name);

    if (isNameExist || isNumberExist) {
      Notifications.showContactWarn(isNameExist, isNumberExist, contact);
      return true;
    }

    return false;
  };

  return (
    <ConfirmationModal
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={restoreContact}
      action="restore contact"
    >
      <>
        <p className="confirmation__message">
          <span>Are you sure you want to restore contact with name</span>{' '}
          <span>
            <b>{contact.name}</b>
          </span>{' '}
          <span>and number</span>{' '}
          <span>
            <b>{contact.number}</b>{' '}
          </span>
          in your contacts list?
        </p>
      </>
    </ConfirmationModal>
  );
};

RestoreFromRecycleBinModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
