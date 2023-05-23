import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { renderIcons, makeSlug, renderDropdownElement } from 'utils';
import { showGroupInfo } from 'utils/notifications';
import { useModal, useSelectedContact } from 'hooks';
import {
  GROUP_ACTIONS,
  OPERATION,
  ICON_NAMES,
  ICON_SIZES,
  ROUTES,
} from 'constants';
import {
  ConfirmationModal,
  EditGroupModal,
  DropdownMenu,
  ContactsListInGroup,
} from 'components';
import {
  GroupDetails,
  GroupEl,
  GroupWrapper,
  DropButton,
} from './Group.styled';
import { deleteGroup } from 'redux/groups';
import { ContactAvatar } from 'shared';
import Highlighter from 'react-highlight-words';
import { clsx } from 'clsx';
import { selectFilter } from 'redux/filters';
import { Element } from 'shared/commonStyledComponents';

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
  const filter = useSelector(selectFilter(ROUTES.GROUPS));
  const onDeleteGroup = () => {
    dispatch(deleteGroup(group));
    showGroupInfo(group.name);
  };
  const toggleGroupContent = () => {
    if (!contactsQuantityInGroup) {
      return;
    }
    setIsGroupContentVisible(!isGroupContentVisible);
  };
  const contactsQuantityInGroup = group.contacts.length;

  return (
    <>
      <GroupWrapper>
        <GroupEl>
          <ContactAvatar
            isMultiSelectOpen={isMultiSelectOpen}
            isSelected={isSelected}
            toggleIsSelected={toggleIsSelected}
          />
          <GroupDetails onClick={toggleGroupContent}>
            <Element>
              <Highlighter
                highlightClassName={clsx('marked')}
                searchWords={[`${filter}`]}
                autoEscape={true}
                textToHighlight={`${group.name}`}
              />
              ({contactsQuantityInGroup})
            </Element>
            <DropButton type="button">
              {renderIcons(ICON_NAMES.DROP_DOWN, ICON_SIZES.MEDIUM_SMALL)}
            </DropButton>
          </GroupDetails>
        </GroupEl>
        <ContactsListInGroup
          group={group}
          isGroupContentVisible={isGroupContentVisible}
        />
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
