import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { ConfirmationModal } from 'components';

import { selectContacts } from 'redux/contacts';

import { GroupsList, GroupButton, ModalText } from './GroupMemberAdder.styled';
export const GroupMemberAdder = ({
  group,
  contactsInGroup,
  isOpen,
  onClose,
  // onConfirm,
  action,
}) => {
  const [contactsToAdd, setContactsToAdd] = useState([]);
  const allContacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const addContactToGroupList = () => {
    onClose();
  };

  const choseContactToAdd = contact => {
    console.log(contact);
    setContactsToAdd(prevContacts => [...prevContacts, contact]);
  };

  const getContactsToSelect = ({ contactsInGroup, allContacts }) => {
    const contactIds = new Set(contactsInGroup.map(c => c.id));
    return allContacts.filter(c => !contactIds.has(c.id));
  };
  const contactsToSelect = getContactsToSelect({
    contactsInGroup,
    allContacts,
  });
  const names = contactsInGroup.map(contact => contact.name);

  const options = contactsToSelect.map(contact => ({
    label: `${contact.name}: ${contact.number} `,
    value: contact,
  }));
  return (
    <ConfirmationModal
      isOpen={isOpen}
      onClose={onClose}
      action={action}
      onConfirm={addContactToGroupList}
    >
      <>
        <ModalText>
          The following contacts have already been added to the group:{' '}
          <b>{names.join(', ')}</b>
        </ModalText>
        <ModalText>
          Chose contacts to add to the group <b>"{group.name}"</b>
        </ModalText>
        <Select
          options={options}
          onChange={option => choseContactToAdd(option.value)}
        />
      </>
    </ConfirmationModal>
  );
};

// GroupMemberAdder.propTypes = {
//   contact: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//   }).isRequired,
// };
