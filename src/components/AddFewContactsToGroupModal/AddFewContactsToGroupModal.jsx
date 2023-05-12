import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CustomModal, LabelList } from 'shared';
import {
  selectGroupNames,
  selectGroups,
  addContactToGroup,
  deleteContactFromGroup,
} from 'redux/groups';
import { findGroupsForContact } from 'utils';
import { showAddFewContactsToGroups } from 'utils/notifications';
import {
  ModalText,
  ModalContent,
  ModalHeader,
  Button,
} from 'shared/commonStyledComponents';
import { CONTACT_ACTIONS, ITEM_CATEGORIES, ROUTES } from 'constants';
import { renderSelectedGroupsText } from './helpers';
import { getTotalQuantityString } from 'utils';

export const AddFewContactsToGroupModal = ({
  isOpen,
  onClose,
  selectedItems,
  resetSelectedItems,
}) => {
  const groupNames = useSelector(selectGroupNames);
  const groups = useSelector(selectGroups);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedGroups, setSelectedGroups] = useState([]);
  const contactsQuantity = getTotalQuantityString(
    selectedItems,
    ITEM_CATEGORIES.CONTACT
  );

  const handleGroupSelect = groupName => {
    const isSelected = selectedGroups.includes(groupName);
    setSelectedGroups(prevSelectedGroups => {
      if (isSelected) {
        return prevSelectedGroups.filter(el => el !== groupName);
      }
      return [...prevSelectedGroups, groupName];
    });

    for (const contact of selectedItems) {
      const isAlreadyExistInGroup = findGroupsForContact(
        contact,
        groups
      ).includes(groupName);

      if (isSelected && isAlreadyExistInGroup) {
        dispatch(deleteContactFromGroup({ group: groupName, contact }));
      } else if (!isSelected && !isAlreadyExistInGroup) {
        dispatch(addContactToGroup({ group: groupName, contact }));
      }
    }
  };

  const handleAdddContactToGroupList = () => {
    showAddFewContactsToGroups(contactsQuantity, selectedGroups);
    onClose();
    resetSelectedItems();
  };

  return (
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      action={!groups.length ? '' : CONTACT_ACTIONS.ADD_TO_GROUP}
      onConfirm={handleAdddContactToGroupList}
    >
      <ModalContent>
        {!groups.length ? (
          <>
            <ModalHeader>You have not created any groups yet</ModalHeader>
            <Button
              type="button"
              onClick={() => navigate(`${ROUTES.ROOT + ROUTES.GROUPS}`)}
            >
              Create group
            </Button>
          </>
        ) : (
          <>
            <ModalText>
              Choose groups for <b>{contactsQuantity}</b>
            </ModalText>

            <LabelList
              items={groupNames}
              handleItem={handleGroupSelect}
              selectedItems={selectedGroups}
              category={ITEM_CATEGORIES.GROUP}
            />
            {renderSelectedGroupsText(selectedGroups)}
          </>
        )}
      </ModalContent>
    </CustomModal>
  );
};

AddFewContactsToGroupModal.propTypes = {
  resetSelectedItems: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  selectedItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};
