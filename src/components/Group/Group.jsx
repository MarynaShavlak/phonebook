import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  renderIcons,
  Notifications,
  makeSlug,
  renderDropdownElement,
} from 'utils';
import { useModal, useSelectedContact } from 'hooks';
import {
  GROUP_ACTIONS,
  OPERATION,
  ICON_NAMES,
  ICON_SIZES,
  ROUTES,
} from 'constants';
import { ConfirmationModal, EditGroupModal, DropdownMenu } from 'components';
import {
  Content,
  Element,
  GroupEl,
  GroupWrapper,
  List,
  DropButton,
  IconButton,
} from './Group.styled';
import { deleteGroup, deleteContactFromGroup } from 'redux/groups';
import { ContactAvatar, ContactData } from 'shared';

export const Group = ({
  group,
  isMultiSelectOpen,
  selectedItems,
  updateSelectedItems,
}) => {
  const [isGroupContentVisible, setIsGroupContentVisible] = useState(false);
  const { isEditModalOpen, toggleEditModal } = useModal(OPERATION.EDIT);
  const { isDeleteModalOpen, toggleDeleteModal } = useModal(OPERATION.DELETE);
  const dispatch = useDispatch();
  const [isSelected, toggleIsSelected] = useSelectedContact(
    selectedItems,
    group,
    updateSelectedItems
  );

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
          <ContactAvatar
            isMultiSelectOpen={isMultiSelectOpen}
            isSelected={isSelected}
            toggleIsSelected={toggleIsSelected}
          />
          <Content onClick={toggleGroupContent}>
            <Element>
              {group.name}&nbsp; ({contactsQuantityInGroup})
            </Element>
            <DropButton type="button">
              {renderIcons(ICON_NAMES.DROP_DOWN, ICON_SIZES.MEDIUM_SMALL)}
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
                  {renderIcons(ICON_NAMES.DELETE, ICON_SIZES.MEDIUM_SMALL)}
                </IconButton>
                <ContactData
                  isMultiSelectOpen={isMultiSelectOpen}
                  isSelected={isSelected}
                  toggleIsSelected={toggleIsSelected}
                  contact={contact}
                />
              </li>
            ))}
          </List>
        )}
      </GroupWrapper>
      <DropdownMenu
        elements={[
          {
            label: OPERATION.EDIT,
            icon: renderDropdownElement(
              GROUP_ACTIONS.EDIT,
              OPERATION.EDIT,
              toggleEditModal
            ),
          },
          {
            label: OPERATION.REMOVE,
            icon: renderDropdownElement(
              GROUP_ACTIONS.DELETE,
              OPERATION.REMOVE,
              toggleDeleteModal
            ),
          },
          {
            label: OPERATION.ADD,
            icon: (
              <>
                <Link
                  to={`${
                    ROUTES.ROOT +
                    ROUTES.MANAGE_GROUP_MEMBERS +
                    ROUTES.ROOT +
                    makeSlug(`${group.name}`)
                  }`}
                >
                  {renderDropdownElement(GROUP_ACTIONS.MANAGE, OPERATION.ADD)}
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
        />
      )}
      {isDeleteModalOpen && (
        <ConfirmationModal
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
  isMultiSelectOpen: PropTypes.bool,
  selectedItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
  updateSelectedItems: PropTypes.func.isRequired,
};
