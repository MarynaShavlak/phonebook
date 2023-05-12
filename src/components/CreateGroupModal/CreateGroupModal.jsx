import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  validateGroupData,
  checkGroupNameExistence,
  createNewGroup,
} from 'utils';
import { showGroupSuccess, showGroupWarn } from 'utils/notifications';
import { selectGroups } from 'redux/groups';
import { CustomModal, ModalInput } from 'shared';
import { ModalHeader } from 'shared/commonStyledComponents';
import { useGroupName } from 'hooks';

export const CreateGroupModal = ({ isOpen, onClose }) => {
  const [groupName, groupNameError, handleNameChange] = useGroupName('');
  const dispatch = useDispatch();
  const groups = useSelector(selectGroups);

  const handleAddNewGroup = async () => {
    if (!(await validateGroupData(groupName))) return;
    if (checkGroupNameExistence(groupName, groups)) {
      return showGroupWarn(groupName);
    }
    const isSuccessfullyCreated = await createNewGroup({
      name: groupName,
      dispatch,
    });
    if (!isSuccessfullyCreated) return;
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
