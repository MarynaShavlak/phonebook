import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ConfirmationModal } from 'components';
import { selectGroupNames, selectGroups } from 'redux/groups/selectors';
import { useDispatch, useSelector } from 'react-redux';
import {
  GroupsList,
  GroupButton,
  ModalText,
} from './AddContactToGroupModal.styled';
import { addContactToGroup, deleteContactFromGroup } from 'redux/groups';

export const AddContactToGroupModal = ({
  contact,
  isOpen,
  onClose,
  onConfirm,
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
    onConfirm(selectedGroups);
    onClose();
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
