import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { ConfirmationModal } from 'components';
import {
  selectGroupNames,
  selectGroups,
  addContactToGroup,
  deleteContactFromGroup,
} from 'redux/groups';
import { GroupsList, GroupButton } from './AddContactToGroupModal.styled';
import { findGroupsForContact, findContactGroupsChanges } from 'utils';
import { showAddToGroups } from 'utils/notifications';
import { ModalText, ModalContent } from 'shared/commonStyledComponents';

export const AddContactToGroupModal = ({
  contact,
  isOpen,
  onClose,
  action,
}) => {
  const groupNames = useSelector(selectGroupNames);
  const groups = useSelector(selectGroups);
  const groupNamesByContact = findGroupsForContact(contact, groups);
  const dispatch = useDispatch();
  const [initialSelectedGroups, setInitialSelectedGroups] = useState([]);
  const [selectedGroups, setSelectedGroups] = useState(groupNamesByContact);

  useEffect(() => {
    setInitialSelectedGroups(selectedGroups);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGroupClick = groupName => {
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
    <ConfirmationModal
      isOpen={isOpen}
      onClose={onClose}
      action={action}
      onConfirm={handleAdddContactToGroupList}
    >
      <ModalContent>
        <ModalText>
          Сhoose groups to add contact with name <b>{contact.name}</b> and
          number <b>{contact.number}</b>:
        </ModalText>
        <GroupsList>
          {groupNames.map((group, index) => (
            <li key={index}>
              <GroupButton
                type="button"
                className={selectedGroups.includes(group) ? 'selected' : ''}
                onClick={() => handleGroupClick(group)}
              >
                {group}
              </GroupButton>
            </li>
          ))}
        </GroupsList>
        {selectedGroups.length ? (
          <ModalText>
            Contact is added to groups: <b>{selectedGroups.join(', ')}</b>
          </ModalText>
        ) : (
          <ModalText>Contact has not been added to any groups yet</ModalText>
        )}
      </ModalContent>
    </ConfirmationModal>
  );
};

AddContactToGroupModal.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
