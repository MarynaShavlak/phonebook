import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ConfirmationModal } from 'components';
import { Notifications } from 'utils';
import { selectGroups } from 'redux/groups';

export const EditGroupModal = ({ data, onClose, onConfirm, ...otherProps }) => {
  const { name } = data;
  const [groupName, setGroupName] = useState(name);
  const groups = useSelector(selectGroups);

  const editGroup = e => {
    if (checkGroupExistence(groupName)) return;
    onConfirm({ oldGroupName: name, newGroupName: groupName });
    onClose();
  };

  const handleInputChange = e => {
    setGroupName(e.target.value);
  };

  const checkGroupExistence = groupName => {
    const isGroupExist = groups.some(
      el => el.name.toLowerCase() === groupName.toLowerCase()
    );
    if (isGroupExist) {
      Notifications.showGroupWarn(groupName);
    }
    return isGroupExist;
  };

  return (
    <ConfirmationModal onClose={onClose} onConfirm={editGroup} {...otherProps}>
      <p className="confirmation__message">Enter new group name</p>

      <div className="group-form__wrapper">
        <input
          className="group-form__input"
          type="text"
          value={groupName}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </div>
    </ConfirmationModal>
  );
};

EditGroupModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
      })
    ),
  }).isRequired,
  onConfirm: PropTypes.func,
};
