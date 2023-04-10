import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './CreateGroupModal.css';
import Modal from 'react-modal';
import { renderIcons, Notifications, removeExtraWhitespace } from 'utils';
import { addNewGroup, selectGroups } from 'redux/groups';
import { ModalActionButtons } from 'components';

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
    padding: '30px 20px',
    border: 'none',
    transform: 'translate(-50%, -50%)',
  },
};

export const CreateGroupModal = ({ isOpen, onClose }) => {
  const [groupName, setGroupName] = useState('');
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const dispatch = useDispatch();
  const groups = useSelector(selectGroups);

  const addContactGroup = () => {
    if (checkGroupExistence(groupName)) return;
    const groupId = nanoid();
    dispatch(addNewGroup({ name: groupName, id: groupId }));
    onClose();
    Notifications.showGroupSuccess(groupName);
  };
  const onSubmit = e => {
    e.preventDefault();

    addContactGroup();
  };

  const handleInputChange = e => {
    setGroupName(e.target.value);
  };

  const checkGroupExistence = groupName => {
    const normalizedGroupName = removeExtraWhitespace(groupName).toLowerCase();
    const isGroupExist = groups.some(
      el => el.name.toLowerCase() === normalizedGroupName
    );
    if (isGroupExist) {
      Notifications.showGroupWarn(groupName);
    }
    return isGroupExist;
  };

  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Modal window to create contact group"
      closeTimeoutMS={300}
      shouldCloseOnOverlayClick={true}
      onRequestClose={onClose}
      style={{
        overlay: customStyles.overlay,
        content: {
          ...customStyles.content,
          width: width >= 768 ? '500px' : '80%',
          maxWidth: '100%',
        },
      }}
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
      <form onSubmit={onSubmit}>
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
        </div>
      </form>
      <ModalActionButtons
        confirmAriaLabel={`Confirm to create new group`}
        cancelAriaLabel={`Cancel to create new group`}
        onCancel={onClose}
        onConfirm={addContactGroup}
      />
    </Modal>
  );
};

CreateGroupModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
