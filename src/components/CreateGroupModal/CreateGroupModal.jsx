import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  validateName,
  validateGroupData,
  checkGroupNameExistence,
} from 'utils';
import { showGroupSuccess, showErrorMessage } from 'utils/notifications';
import { addNewGroup, selectGroups } from 'redux/groups';
import { CustomModal } from 'shared';
import { Name } from 'shared/components/ContactForm/ContactForm.styled';
import {
  ModalHeader,
  ModalInputWrapper,
  ModalError,
} from 'shared/commonStyledComponents';

export const CreateGroupModal = ({ isOpen, onClose }) => {
  const [groupName, setGroupName] = useState('');
  const [groupNameError, setGroupNameError] = useState(null);

  const handleNameChange = async e => {
    const { value } = e.target;
    const errorMessage = await validateName(value);
    setGroupName(value);
    setGroupNameError(errorMessage);
  };

  const dispatch = useDispatch();
  const groups = useSelector(selectGroups);

  const handleAddNewGroup = async () => {
    const isGroupDataValid = await validateGroupData(groupName);
    if (!isGroupDataValid) return;
    if (checkGroupNameExistence(groupName, groups)) return;
    const newGroup = { name: groupName, id: nanoid() };
    const result = await dispatch(addNewGroup(newGroup));
    if (result.error) {
      return showErrorMessage();
    }
    showGroupSuccess(groupName);
    onClose();
  };

  return (
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={handleAddNewGroup}
      action="create new group"
    >
      <>
        <ModalHeader>Create new group of contacts</ModalHeader>
        <ModalInputWrapper>
          <Name
            type="text"
            name="name"
            value={groupName}
            onChange={handleNameChange}
          />
          {groupNameError && <ModalError>{groupNameError}</ModalError>}
        </ModalInputWrapper>
      </>
    </CustomModal>
  );
};

CreateGroupModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
