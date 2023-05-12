import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { CustomModal, LabelList, ModalInput } from 'shared';
import { selectGroups } from 'redux/groups';
import { ModalText, ModalContent } from 'shared/commonStyledComponents';
import { CONTACT_ACTIONS, ITEM_CATEGORIES } from 'constants';
import {
  checkGroupNameExistence,
  validateGroupData,
  handleSelectedGroups,
  createNewGroup,
  handleContactsInSelectedGroups,
} from 'utils';
import { useGroupName } from 'hooks';

export const MergeGroupsModal = ({
  isOpen,
  onClose,
  selectedGroups,
  resetSelectedGroups,
}) => {
  const [groupName, groupNameError, handleNameChange] = useGroupName('');
  const chosenGroupNames = selectedGroups.map(item => item.name);
  const groups = useSelector(selectGroups);
  const dispatch = useDispatch();
  const [chosenGroup, setChosenGroup] = useState([]);

  useEffect(() => {
    if (!!groupName.length && !!setChosenGroup.length) {
      setChosenGroup([groupName]);
    }
  }, [groupName]);

  const handleGroupSelect = groupName => {
    const isAlreadySelected = chosenGroup.includes(groupName);
    const newChosenGroup = isAlreadySelected ? [] : [groupName];
    setChosenGroup(newChosenGroup);
  };

  const handleAdddContactToGroupList = async () => {
    const chosenGroupName = chosenGroup[0];
    if (!(await validateGroupData(chosenGroupName))) return;
    if (!checkGroupNameExistence(chosenGroupName, groups)) {
      const isSuccessfullyCreated = await createNewGroup({
        name: chosenGroupName,
        dispatch,
      });
      if (!isSuccessfullyCreated) return;
    }
    await handleSelectedGroups({ chosenGroupName, selectedGroups, dispatch });
    await handleContactsInSelectedGroups({
      selectedGroups,
      chosenGroupName,
      dispatch,
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
          items={chosenGroupNames}
          handleItem={handleGroupSelect}
          selectedItems={chosenGroup}
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
  selectedGroups: PropTypes.arrayOf(PropTypes.object).isRequired,
};
