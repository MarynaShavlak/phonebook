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
import {
  GroupsList,
  GroupButton,
  ModalText,
} from './AddContactToGroupModal.styled';
import { Notifications } from 'utils';

export const AddContactToGroupModal = ({
  contact,
  isOpen,
  onClose,
  // onConfirm,
  action,
}) => {
  const groupNames = useSelector(selectGroupNames);
  const groups = useSelector(selectGroups);
  const dispatch = useDispatch();

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

  const addContactToGroupList = () => {
    const message = compareGroups(initialSelectedGroups, selectedGroups);
    Notifications.showAddToGroups(message);
    console.log('message', message);
    onClose();
  };

  const compareGroups = (initialState, finalState) => {
    const removedGroups = initialState.filter(
      group => !finalState.includes(group)
    );
    const addedGroups = finalState.filter(
      group => !initialState.includes(group)
    );

    const message =
      (removedGroups.length > 0
        ? `Contact was deleted from group${
            removedGroups.length > 1 ? 's' : ''
          } "${removedGroups.join('", "')}". `
        : '') +
      (addedGroups.length > 0
        ? `Contact was added to group${
            addedGroups.length > 1 ? 's' : ''
          } "${addedGroups.join('", "')}".`
        : '');

    return message;
  };

  const getGroupNamesByContact = (groups, contact) => {
    return groups
      .filter(group => {
        return group.contacts.some(
          c => c.id === contact.id && c.name === contact.name
        );
      })
      .map(group => group.name);
  };
  const groupNamesByContact = getGroupNamesByContact(groups, contact);
  const [selectedGroups, setSelectedGroups] = useState(groupNamesByContact);
  const [initialSelectedGroups, setInitialSelectedGroups] = useState([]);

  useEffect(() => {
    setInitialSelectedGroups(selectedGroups);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ConfirmationModal
      isOpen={isOpen}
      onClose={onClose}
      action={action}
      onConfirm={addContactToGroupList}
    >
      <>
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
      </>
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
