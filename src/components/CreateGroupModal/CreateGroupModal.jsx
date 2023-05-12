import React from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { validateGroupData, checkGroupNameExistence } from 'utils';
import { showGroupSuccess, showErrorMessage } from 'utils/notifications';
import { addNewGroup, selectGroups } from 'redux/groups';
import { CustomModal, ModalInput } from 'shared';
import { ModalHeader } from 'shared/commonStyledComponents';
import { useGroupName } from 'hooks';

export const CreateGroupModal = ({ isOpen, onClose }) => {
  const [groupName, groupNameError, handleNameChange] = useGroupName('');
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
        <ModalInput
          groupName={groupName}
          handleNameChange={handleNameChange}
          groupNameError={groupNameError}
        />
      </>
    </CustomModal>
  );
};

CreateGroupModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
