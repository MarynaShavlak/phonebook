import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './ConfirmRemoveToRecycleBinModal.css';
import Modal from 'react-modal';
import { IconButton } from 'components';
import { renderIcons } from 'utils/renderIcons';
import { iconSize } from 'constants';
import * as contactsOperations from 'redux/contacts/contactsOperations';
import * as Notifications from 'utils/notifications';
import { addContactToRecycleBin } from 'redux/recycleBin/recycleBinSlice';
import { selectRecycleBinContacts } from 'redux/recycleBin/selectors';
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

export const ConfirmRemoveToRecycleBinModal = ({
  isOpen,
  onClose,
  contact,
}) => {
  const contacts = useSelector(selectRecycleBinContacts);
  const dispatch = useDispatch();

  const confirmDeleteContact = () => {
    dispatch(contactsOperations.deleteContact(contact.id));

    const checkContactInRecycleBin = contact => {
      const isContactExist = contacts.some(el => el.id === contact.id);
      if (isContactExist) {
        Notifications.showWarnRecycleBinNotification(contact);
      }
      return isContactExist;
    };

    if (checkContactInRecycleBin(contact)) return;
    Notifications.showSuccessNotification('delete', contact);
    dispatch(addContactToRecycleBin(contact));
  };

  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Modal window to confirm to delete contact"
      style={customStyles}
      closeTimeoutMS={300}
      shouldCloseOnOverlayClick={true}
      onRequestClose={onClose}
    >
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
      <div className="action-buttons">
        <IconButton
          aria-label="Confirm delete contact"
          onClick={() => confirmDeleteContact()}
        >
          {renderIcons('confirm', iconSize.md)}
        </IconButton>
        <IconButton
          aria-label="Cancel delete contact"
          onClick={() => onClose()}
        >
          {renderIcons('cancel', iconSize.md)}
        </IconButton>
      </div>
    </Modal>
  );
};

ConfirmRemoveToRecycleBinModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
