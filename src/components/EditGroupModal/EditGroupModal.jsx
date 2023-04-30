import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { selectGroups, renameGroup } from 'redux/groups';
import { CustomModal } from 'shared';
import { Name } from 'shared/components/ContactForm/ContactForm.styled';
import {
  ModalHeader,
  ModalInputWrapper,
  ModalError,
} from 'shared/commonStyledComponents';
import {
  validateName,
  removeExtraWhitespace,
  validateAndCheckGroupName,
} from 'utils';
import {
  showGroupRenameSuccess,
  showErrorMessage,
  showNoUpdateGroupMessage,
} from 'utils/notifications';
import { GROUP_ACTIONS } from 'constants';

export const EditGroupModal = ({ data, isOpen, onClose }) => {
  const { name } = data;
  const [groupName, setGroupName] = useState(name);
  const [groupNameError, setGroupNameError] = useState(null);
  const dispatch = useDispatch();
  const allGroups = useSelector(selectGroups);
  const anotherGroups = allGroups.filter(group => group.name !== name);

  const handleNameChange = async e => {
    const { value } = e.target;
    const errorMessage = await validateName(value);
    setGroupName(value);
    setGroupNameError(errorMessage);
  };

  const handleEditGroupName = async () => {
    const isValid = await validateAndCheckGroupName(groupName, anotherGroups);
    if (!isValid) return;
    const newGroupName = removeExtraWhitespace(groupName);
    const result = await dispatch(
      renameGroup({ oldGroupName: name, newGroupName: newGroupName })
    );
    if (result.error) {
      return showErrorMessage();
    }

    if (newGroupName === name) {
      showNoUpdateGroupMessage();
    } else {
      showGroupRenameSuccess({
        oldGroupName: name,
        newGroupName: groupName,
      });
    }

    onClose();
  };

  return (
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={handleEditGroupName}
      action={GROUP_ACTIONS.EDIT}
    >
      <>
        <ModalHeader>Edit group name</ModalHeader>
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

EditGroupModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
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
};
