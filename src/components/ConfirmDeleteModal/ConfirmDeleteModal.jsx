import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './ConfirmDeleteModal.css';
import Modal from 'react-modal';
import { IconButton } from 'components';
import { renderIcons } from 'utils/renderIcons';
import { iconSize } from 'constants';
import * as Notifications from 'utils/notifications';
import { removeContactFromRecycleBin } from 'redux/recycleBin/recycleBinSlice';
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

export const ConfirmDeleteModal = ({ isOpen, onClose, contact }) => {
  const dispatch = useDispatch();
  const confirmDeleteContact = () => {
    dispatch(removeContactFromRecycleBin(contact.id));
    Notifications.showInfoRecycleBinNotification(contact);
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

ConfirmDeleteModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
