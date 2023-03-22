import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './ConfirmRestoreModal.css';
import Modal from 'react-modal';
import { IconButton } from 'components';
import { renderIcons } from 'utils/renderIcons';
import { iconSize } from 'constants';
import * as contactsOperations from 'redux/contactsOperations';
import * as Notifications from 'utils/notifications';
import { removeContactFromRecycleBin } from 'redux/recycleBinSlice';
import { getContacts } from 'redux/selectors';

Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    background: 'white',
    width: '700px',
    padding: '30px 20px',
    border: 'none',
    transform: 'translate(-50%, -50%)',
  },
};

export const ConfirmRestoreModal = ({ isOpen, onClose, contact }) => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const confirmRestoreContact = () => {
    console.log('confirm restore');
    const checkContactInBook = contact => {
      const isNumberExist = contacts.some(el => el.number === contact.number);
      const isNameExist = contacts.some(el => el.name === contact.name);
      Notifications.showInfoNotification(isNameExist, isNumberExist, contact);
      const isContactExist = isNameExist || isNumberExist;
      return isContactExist;
    };
    if (checkContactInBook(contact)) return;
    dispatch(contactsOperations.addContact(contact));
    dispatch(removeContactFromRecycleBin(contact.id));
    Notifications.showSuccessNotification('restore', contact);
  };

  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Modal window to confirm to restore contact"
      style={customStyles}
      closeTimeoutMS={300}
      shouldCloseOnOverlayClick={true}
      onRequestClose={onClose}
    >
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
      <div className="action-buttons">
        <IconButton
          aria-label="Confirm restore contact"
          onClick={() => confirmRestoreContact()}
        >
          {renderIcons('confirm', iconSize.md)}
        </IconButton>
        <IconButton
          aria-label="Cancel restore contact"
          onClick={() => onClose()}
        >
          {renderIcons('cancel', iconSize.md)}
        </IconButton>
      </div>
    </Modal>
  );
};

ConfirmRestoreModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
