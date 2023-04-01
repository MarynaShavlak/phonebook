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
  const [selectedGroups, setSelectedGroups] = useState([]);
  const dispatch = useDispatch();
  const groupNames = useSelector(selectGroupNames);
  const groups = useSelector(selectGroups);

  const handleGroupClick = groupName => {
    const isSelected = selectedGroups.includes(groupName);
    const isContactExistInGroup = checkContactExistanceInGroup({
      contact,
      groupName,
    });

    if (isSelected) {
      setSelectedGroups(selectedGroups.filter(el => el !== groupName));
      console.log('you delete contact');
      dispatch(deleteContactFromGroup({ group: groupName, contact }));
    } else {
      if (isContactExistInGroup) {
        console.log('contact already exist in group');
        return;
      }
      setSelectedGroups([...selectedGroups, groupName]);
      console.log('you add contact');
      dispatch(addContactToGroup({ group: groupName, contact }));
    }
  };

  const addContactToGroupList = () => {
    console.log('add to group');
    onConfirm(groupNames);
  };

  const checkContactExistanceInGroup = ({ contact, groupName }) => {
    return groups.some(
      group =>
        group.name === groupName &&
        group.contacts.find(c => c.id === contact.id && c.name === contact.name)
    );
  };

  return (
    <ConfirmationModal
      isOpen={isOpen}
      onClose={onClose}
      action={action}
      onConfirm={addContactToGroupList}
    >
      <>
        <ModalText>You can add contact to following groups:</ModalText>
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
