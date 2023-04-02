import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { clsx } from 'clsx';
import { renderIcons, Notifications } from 'utils';
import { useHoverEffects, useModal } from 'hooks';
import { GROUP_ACTIONS, OPERATION_TYPES, iconSize } from 'constants';
import { IconButton, OperationModal, EditGroupModal } from 'components';
import { GroupAvatar, GroupEl } from './Group.styled';
import { ControlButtons } from 'components/Contact/Contact.styled';
import { deleteGroup, renameGroup } from 'redux/groups/groupsSlice';

export const Group = ({ group }) => {
  const [isGroupContentVisible, setIsGroupContentVisible] = useState(false);
  const contactsQuantityInGroup = group.contacts.length;

  const contactsInGroup = group.contacts;
  console.log('contactsInGroup: ', contactsInGroup);
  console.log('contactsQuantityInGroup', contactsQuantityInGroup);
  const { isEditModalOpen, toggleEditModal } = useModal(OPERATION_TYPES.EDIT);
  const { isDeleteModalOpen, toggleDeleteModal } = useModal(
    OPERATION_TYPES.DELETE
  );
  const { isHovered, toggleHoverEffect } = useHoverEffects([
    OPERATION_TYPES.DELETE,
    OPERATION_TYPES.EDIT,
  ]);
  const dispatch = useDispatch();

  const onEditGroup = ({ oldGroupName, newGroupName }) => {
    dispatch(renameGroup({ oldGroupName, newGroupName }));
    Notifications.showGroupRenameSuccess({
      oldGroupName,
      newGroupName,
    });
  };
  const onDeleteGroup = () => {
    dispatch(deleteGroup(group));
    Notifications.showGroupInfo(group.name);
  };

  const toggleGroupContent = () => {
    setIsGroupContentVisible(!isGroupContentVisible);
  };

  return (
    <>
      {' '}
      {isEditModalOpen && (
        <EditGroupModal
          isOpen={isEditModalOpen}
          onClose={toggleEditModal}
          data={group}
          onConfirm={onEditGroup}
          action={GROUP_ACTIONS.EDIT}
        />
      )}
      {isDeleteModalOpen && (
        <OperationModal
          isOpen={isDeleteModalOpen}
          onClose={toggleDeleteModal}
          data={group}
          onConfirm={onDeleteGroup}
          action={GROUP_ACTIONS.DELETE}
        />
      )}
      <GroupAvatar>{renderIcons('group', 30)}</GroupAvatar>
      <GroupEl
        className={clsx({
          toDelete: isHovered.delete,
          toEdit: isHovered.edit,
        })}
        onClick={toggleGroupContent}
      >
        {group.name}&nbsp; ({contactsQuantityInGroup})
      </GroupEl>
      <ControlButtons>
        <IconButton
          ariaLabel={GROUP_ACTIONS.EDIT}
          onClick={toggleEditModal}
          onMouseEnter={() => toggleHoverEffect(OPERATION_TYPES.EDIT)}
          onMouseLeave={() => toggleHoverEffect(OPERATION_TYPES.EDIT)}
        >
          {renderIcons(OPERATION_TYPES.EDIT, iconSize.sm)}
        </IconButton>
        <IconButton
          ariaLabel={GROUP_ACTIONS.DELETE}
          onClick={toggleDeleteModal}
          onMouseEnter={() => toggleHoverEffect(OPERATION_TYPES.DELETE)}
          onMouseLeave={() => toggleHoverEffect(OPERATION_TYPES.DELETE)}
        >
          {renderIcons(OPERATION_TYPES.DELETE, iconSize.sm)}
        </IconButton>
      </ControlButtons>
      {isGroupContentVisible && (
        <ul>
          {contactsInGroup.map((contact, index) => (
            <li key={index}>
              <p type="button">
                {contact.name}: {contact.number}
              </p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

Group.propTypes = {
  group: PropTypes.shape({
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
