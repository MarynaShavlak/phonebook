import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './CreateGroupModal.css';
import Modal from 'react-modal';
import { renderIcons, Notifications } from 'utils';
import { addNewGroup } from 'redux/groups/groupsSlice';
import { selectContactGroups } from 'redux/groups/selectors';

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
  const dispatch = useDispatch();
  const groups = useSelector(selectContactGroups);

  const addContactGroup = e => {
    e.preventDefault();
    console.log('groups: ', groups);
    if (checkGroupExistence(groupName)) return;
    console.log(groupName);
    const groupId = nanoid();
    dispatch(addNewGroup({ name: groupName, id: groupId }));
    onClose();
    Notifications.showGroupSuccess(groupName);
  };

  const handleInputChange = e => {
    setGroupName(e.target.value);
  };

  const checkGroupExistence = groupName => {
    const isGroupExist = groups.some(
      el => el.name.toLowerCase() === groupName.toLowerCase()
    );
    if (isGroupExist) {
      console.log('such group is already exist');
      Notifications.showGroupWarn(groupName);
    }
    return isGroupExist;
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
          {/* <button className="add-group-btn" type="submit">
            {renderIcons('confirm', 30)}
          </button> */}
        </div>
      </form>
    </Modal>
  );
};

CreateGroupModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
