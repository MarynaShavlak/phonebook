import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { CustomModal, LabelList, ModalInput } from 'shared';
import { selectGroups, addContactToGroup } from 'redux/groups';
import { deleteGroup } from 'redux/groups';
import { findGroupsForContact } from 'utils';
import { ModalText, ModalContent } from 'shared/commonStyledComponents';
import { CONTACT_ACTIONS, ITEM_CATEGORIES } from 'constants';
import { getUniqueContacts } from 'utils';
import { useGroupName } from 'hooks';

export const MergeGroupsModal = ({
  isOpen,
  onClose,
  selectedGroups,
  resetSelectedGroups,
}) => {
  const [groupName, groupNameError, handleNameChange] = useGroupName('');
  console.log('groupName: ', groupName);
  const selectedGroupNames = selectedGroups.map(item => item.name);
  const groups = useSelector(selectGroups);
  const dispatch = useDispatch();
  const [selectedGroup, setSelectedGroup] = useState([]);

  const handleGroupSelect = groupName => {
    const isAlreadySelected = selectedGroup.includes(groupName);
    const newChosenGroup = isAlreadySelected ? [] : [groupName];
    setSelectedGroup(newChosenGroup);
  };

  const handleAdddContactToGroupList = () => {
    const selectedGroupName = selectedGroup[0];
    const uniqueContacts = getUniqueContacts(
      selectedGroups.flatMap(group => group.contacts)
    );
    selectedGroups.forEach(group => {
      if (group.name !== selectedGroupName) {
        dispatch(deleteGroup(group));
      }
    });
    uniqueContacts.forEach(contact => {
      const isAlreadyExistInGroup = findGroupsForContact(
        contact,
        groups
      ).includes(selectedGroupName);
      if (!isAlreadyExistInGroup) {
        dispatch(addContactToGroup({ group: selectedGroupName, contact }));
      }
    });
    onClose();
    resetSelectedGroups();
  };

  return (
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      action={!groups.length ? '' : CONTACT_ACTIONS.ADD_TO_GROUP}
      onConfirm={handleAdddContactToGroupList}
    >
      <ModalContent>
        <ModalText>Choose group name you want to merge in:</ModalText>
        <LabelList
          items={selectedGroupNames}
          handleItem={handleGroupSelect}
          selectedItems={selectedGroup}
          category={ITEM_CATEGORIES.GROUP}
        />
        <ModalText>
          Or type <b>new</b> group name to merge in:
        </ModalText>
        <ModalInput
          groupName={groupName}
          handleNameChange={handleNameChange}
          groupNameError={groupNameError}
        />
      </ModalContent>
    </CustomModal>
  );
};

MergeGroupsModal.propTypes = {
  resetSelectedGroups: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  selectedGroups: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};
