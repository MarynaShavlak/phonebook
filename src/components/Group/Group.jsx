import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';
import { renderIcons, Notifications, makeSlug } from 'utils';
import { useModal } from 'hooks';
import { GROUP_ACTIONS, OPERATION_TYPES, iconSize } from 'constants';

import { OperationModal, EditGroupModal, DropdownMenu } from 'components';
import {
  Content,
  GroupAvatar,
  Element,
  GroupEl,
  GroupWrapper,
  ContactsList,
  DropButton,
  IconButton,
  ContactEl,
} from './Group.styled';
import { DropdownButton } from 'components/DropdownMenu/DropdownMenu.styled';
import { deleteGroup, renameGroup, deleteContactFromGroup } from 'redux/groups';

export const Group = ({ group }) => {
  const [isGroupContentVisible, setIsGroupContentVisible] = useState(false);
  const { isEditModalOpen, toggleEditModal } = useModal(OPERATION_TYPES.EDIT);
  const { isDeleteModalOpen, toggleDeleteModal } = useModal(
    OPERATION_TYPES.DELETE
  );
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
  const onDeleteContact = contact => {
    const groupName = group.name;
    dispatch(deleteContactFromGroup({ group: groupName, contact }));
    Notifications.showDeleteFromGroup({ groupName, contact });
    console.log('you delete contact from group');
  };

  const contactsQuantityInGroup = group.contacts.length;

  const contactsInGroup = group.contacts;
  console.log('contactsInGroup: ', contactsInGroup);

  return (
    <>
      <GroupWrapper>
        <GroupEl>
          <GroupAvatar>{renderIcons('group', 24)}</GroupAvatar>
          <Content onClick={toggleGroupContent}>
            <Element>
              {group.name}&nbsp; ({contactsQuantityInGroup})
            </Element>
            <DropButton type="button">{renderIcons('dropDown', 40)}</DropButton>
          </Content>
        </GroupEl>

        {isGroupContentVisible && (
          <ContactsList>
            {contactsInGroup.map((contact, index) => (
              <li key={index}>
                <IconButton
                  type="button"
                  onClick={() => onDeleteContact(contact)}
                >
                  {renderIcons('delete', 18)}
                </IconButton>
                <ContactEl>
                  <Avatar
                    size="30"
                    name={contact.name}
                    unstyled={false}
                    round="50%"
                  />
                  <p>{contact.name}:</p>
                  <p>{contact.number}</p>
                </ContactEl>
              </li>
            ))}
          </ContactsList>
        )}
      </GroupWrapper>
      <DropdownMenu
        elements={[
          {
            label: OPERATION_TYPES.EDIT,
            icon: (
              <>
                <DropdownButton
                  ariaLabel={GROUP_ACTIONS.EDIT}
                  onClick={toggleEditModal}
                >
                  {renderIcons(OPERATION_TYPES.EDIT, iconSize.sm)}Edit
                </DropdownButton>
              </>
            ),
          },
          {
            label: OPERATION_TYPES.REMOVE,
            icon: (
              <>
                <DropdownButton
                  ariaLabel={GROUP_ACTIONS.DELETE}
                  onClick={toggleDeleteModal}
                >
                  {renderIcons(OPERATION_TYPES.REMOVE, iconSize.sm)}Delete
                </DropdownButton>
              </>
            ),
          },
          {
            label: OPERATION_TYPES.ADD,
            icon: (
              <>
                <Link to={`/manage-group-member/${makeSlug(`${group.name}`)}`}>
                  <DropdownButton ariaLabel={GROUP_ACTIONS.ADD}>
                    {renderIcons(OPERATION_TYPES.ADD, iconSize.sm)}Manage
                    contacts
                  </DropdownButton>
                </Link>
              </>
            ),
          },
        ]}
      />{' '}
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
      {/* {isAddModalOpen && (
        <GroupMemberManager
          isOpen={isAddModalOpen}
          onClose={toggleAddModal}
          group={group}
          contactsInGroup={contactsInGroup}
          onConfirm={onDeleteGroup}
          action={GROUP_ACTIONS.ADD}
        />
      )} */}
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
