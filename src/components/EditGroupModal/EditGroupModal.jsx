import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import { ConfirmationModal } from 'components';
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
  validateGroupData,
  checkGroupNameExistence,
} from 'utils';
import { showGroupRenameSuccess, showErrorMessage } from 'utils/notifications';

export const EditGroupModal = ({
  data,
  isOpen,
  onClose,

  ...otherProps
}) => {
  const { name } = data;
  const [groupName, setGroupName] = useState(name);
  const [groupNameError, setGroupNameError] = useState(null);
  const dispatch = useDispatch();
  const groups = useSelector(selectGroups);

  const handleNameChange = async e => {
    const { value } = e.target;
    const errorMessage = await validateName(value);
    setGroupName(value);
    setGroupNameError(errorMessage);
  };
  const handleEditGroupName = async () => {
    const isGroupDataValid = await validateGroupData(groupName);
    if (!isGroupDataValid) return;
    if (checkGroupNameExistence(groupName, groups)) return;
    const result = await dispatch(
      renameGroup({ oldGroupName: name, newGroupName: groupName })
    );
    if (result.error) {
      return showErrorMessage();
    }

    showGroupRenameSuccess({
      oldGroupName: name,
      newGroupName: groupName,
    });
    onClose();
  };

  // const checkGroupExistence = groupName => {
  //   const isGroupExist = groups.some(
  //     el => el.name.toLowerCase() === groupName.toLowerCase()
  //   );
  //   if (isGroupExist) {
  //     Notifications.showGroupWarn(groupName);
  //   }
  //   return isGroupExist;
  // };

  return (
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={handleEditGroupName}
      action="edit group name"
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

    // <ConfirmationModal onClose={onClose} onConfirm={editGroup} {...otherProps}>
    //   <p className="confirmation__message">Enter new group name</p>

    //   <div className="group-form__wrapper">
    //     <input
    //       className="group-form__input"
    //       type="text"
    //       value={groupName}
    //       onChange={handleInputChange}
    //       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    //     />
    //   </div>
    // </ConfirmationModal>
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
};
