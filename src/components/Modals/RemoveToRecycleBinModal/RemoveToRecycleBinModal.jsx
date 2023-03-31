import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import 'components/ConfirmationModal/ConfirmationModal.css';
import { getCurrentTime, Notifications } from 'utils';
import * as contactsOperations from 'redux/contacts/contactsOperations';
import { addContactToRecycleBin } from 'redux/recycleBin/recycleBinSlice';
import { selectRecycleBinContacts } from 'redux/recycleBin/selectors';
import { ConfirmationModal } from 'components';

export const RemoveToRecycleBinModal = ({ isOpen, onClose, contact }) => {
  const contacts = useSelector(selectRecycleBinContacts);
  const dispatch = useDispatch();

  const removeContactToRecycleBin = () => {
    dispatch(contactsOperations.deleteContact(contact.id));

    const checkContactInRecycleBin = contact => {
      const isContactExist = contacts.some(el => el.id === contact.id);
      if (isContactExist) {
        Notifications.showRecyclebinWarn(contact);
      }
      return isContactExist;
    };

    if (checkContactInRecycleBin(contact)) return;
    Notifications.showContactSuccess('delete', contact);
    const removalContactTime = getCurrentTime();
    console.log('removalContactTime: ', removalContactTime);
    dispatch(addContactToRecycleBin({ ...contact, removalContactTime }));
  };

  return (
    <ConfirmationModal
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={removeContactToRecycleBin}
      action="remove contact to recycle bin"
    >
      <>
        <p className="confirmation__message">
          <span>Are you sure you want to remove contact with name</span>{' '}
          <span>
            <b>{contact.name}</b>
          </span>{' '}
          <span>and number</span>{' '}
          <span>
            <b>{contact.number}</b>{' '}
          </span>
          to recycle bin?
        </p>
      </>
    </ConfirmationModal>
  );
};

RemoveToRecycleBinModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
