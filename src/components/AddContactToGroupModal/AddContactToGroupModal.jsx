import React, { useState, useEffect } from 'react';
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
import { findGroupsForContact, findContactGroupsChanges } from 'utils';
import { showAddToGroups } from 'utils/notifications';
import {
  ModalText,
  ModalContent,
  ModalHeader,
  Button,
} from 'shared/commonStyledComponents';
import { CONTACT_ACTIONS, ITEM_CATEGORIES } from 'constants';
import { renderSelectedGroupsText } from './helpers';

export const AddContactToGroupModal = ({ contact, isOpen, onClose }) => {
  const groupNames = useSelector(selectGroupNames);
  const groups = useSelector(selectGroups);
  const groupNamesByContact = findGroupsForContact(contact, groups);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [initialSelectedGroups, setInitialSelectedGroups] = useState([]);
  const [selectedGroups, setSelectedGroups] = useState(groupNamesByContact);

  useEffect(() => {
    setInitialSelectedGroups(selectedGroups);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGroupSelect = groupName => {
    const isSelected = selectedGroups.includes(groupName);

    if (isSelected) {
      setSelectedGroups(selectedGroups.filter(el => el !== groupName));
      dispatch(deleteContactFromGroup({ group: groupName, contact }));
    } else {
      setSelectedGroups([...selectedGroups, groupName]);
      dispatch(addContactToGroup({ group: groupName, contact }));
    }
  };

  const handleAdddContactToGroupList = () => {
    const message = findContactGroupsChanges(
      initialSelectedGroups,
      selectedGroups
    );
    showAddToGroups(message);
    onClose();
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
            <Button type="button" onClick={() => navigate('/groups')}>
              Create group
            </Button>
          </>
        ) : (
          <>
            <ModalText>
              Choose groups for <b>{contact.name}</b>&nbsp;(
              <b>{contact.number}</b>):
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

AddContactToGroupModal.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
