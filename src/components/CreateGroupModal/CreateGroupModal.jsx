import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './CreateGroupModal.css';
import Modal from 'react-modal';
import { IconButton, OperationButton } from 'components';
import { Button } from 'components/OperationButton/OperationButton.styled';
import { renderIcons } from 'utils/renderIcons';
import { iconSize } from 'constants';
import * as Notifications from 'utils/notifications';
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

export const CreateGroupModal = ({ isOpen, onClose }) => {
  const [groupName, setGroupName] = useState('');
  // const dispatch = useDispatch();

  const addContactGroup = e => {
    e.preventDefault();
    console.log(e);

    console.log(groupName);
    // dispatch(removeContactFromRecycleBin(contact.id));
    // Notifications.showInfoRecycleBinNotification(contact);
  };

  const handleInputChange = e => {
    setGroupName(e.target.value);
  };

  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Modal window to create contact group"
      style={customStyles}
      closeTimeoutMS={300}
      shouldCloseOnOverlayClick={true}
      onRequestClose={onClose}
    >
      <button
        aria-label="Close modal"
        onClick={() => onClose()}
        className="close-modal-btn"
      >
        {renderIcons('close', 30)}
      </button>
      <p className="confirmation__message">
        <span>Create new group of contacts</span>{' '}
      </p>
      <form onSubmit={addContactGroup}>
        <div className="group-form__wrapper">
          <input
            className="group-form__input"
            type="text"
            placeholder={`Enter group name...`}
            value={groupName}
            onChange={handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <button className="add-group-btn" type="submit">
            {renderIcons('confirm', 30)}
          </button>
        </div>
      </form>
    </Modal>
  );
};

CreateGroupModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
