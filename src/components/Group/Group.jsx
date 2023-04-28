import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';
import {
  renderIcons,
  Notifications,
  makeSlug,
  renderDropdownButton,
} from 'utils';
import { useModal } from 'hooks';
import { GROUP_ACTIONS, OPERATION, ICON_NAMES, iconSize } from 'constants';
import { OperationModal, EditGroupModal, DropdownMenu } from 'components';
import {
  Content,
  GroupAvatar,
  Element,
  GroupEl,
  GroupWrapper,
  List,
  DropButton,
  IconButton,
  ContactEl,
} from './Group.styled';
import { deleteGroup, renameGroup, deleteContactFromGroup } from 'redux/groups';

export const Group = ({ group }) => {
  const [isGroupContentVisible, setIsGroupContentVisible] = useState(false);
  const { isEditModalOpen, toggleEditModal } = useModal(OPERATION.EDIT);
  const { isDeleteModalOpen, toggleDeleteModal } = useModal(OPERATION.DELETE);
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
    if (!contactsQuantityInGroup) {
      return;
    }
    setIsGroupContentVisible(!isGroupContentVisible);
  };
  const onDeleteContact = contact => {
    const groupName = group.name;
    dispatch(deleteContactFromGroup({ group: groupName, contact }));
  };

  const contactsQuantityInGroup = group.contacts.length;
  const contactsInGroup = group.contacts;

  return (
    <>
      <GroupWrapper>
        <GroupEl>
          <GroupAvatar>
            {renderIcons(ICON_NAMES.GROUP, iconSize.xs)}
          </GroupAvatar>
          <Content onClick={toggleGroupContent}>
            <Element>
              {group.name}&nbsp; ({contactsQuantityInGroup})
            </Element>
            <DropButton type="button">
              {renderIcons(ICON_NAMES.DROP_DOWN, iconSize.xs)}
            </DropButton>
          </Content>
        </GroupEl>

        {isGroupContentVisible && (
          <List>
            {contactsInGroup.map((contact, index) => (
              <li key={index}>
                <IconButton
                  type="button"
                  onClick={() => onDeleteContact(contact)}
                >
                  {renderIcons(ICON_NAMES.DELETE, iconSize.xxs)}
                </IconButton>
                <ContactEl>
                  <Avatar
                    size="20"
                    textSizeRatio={2}
                    name={contact.name}
                    unstyled={false}
                    round="50%"
                  />
                  <p>{contact.name}:</p>
                  <p>{contact.number}</p>
                </ContactEl>
              </li>
            ))}
          </List>
        )}
      </GroupWrapper>
      <DropdownMenu
        elements={[
          {
            label: OPERATION.EDIT,
            icon: renderDropdownButton(
              GROUP_ACTIONS.EDIT,
              OPERATION.EDIT,
              toggleEditModal
            ),
          },
          {
            label: OPERATION.REMOVE,
            icon: renderDropdownButton(
              GROUP_ACTIONS.DELETE,
              OPERATION.REMOVE,
              toggleDeleteModal
            ),
          },
          {
            label: OPERATION.ADD,
            icon: (
              <>
                <Link to={`/manage-group-member/${makeSlug(`${group.name}`)}`}>
                  {renderDropdownButton(GROUP_ACTIONS.MANAGE, OPERATION.ADD)}
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
