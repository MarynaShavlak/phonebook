import React from 'react';
import { useSelector } from 'react-redux';
import { Contact } from 'components';
import { ContactsList, ContactItem } from './ContactList.styled';
import { getFilteredContacts } from 'redux/selectors';

export function ContactList() {
  const contacts = useSelector(getFilteredContacts);
  const sortedContacts = contacts.sort((firstContact, secondContact) =>
    firstContact.name.localeCompare(secondContact.name)
  );

  return (
    <ContactsList>
      {sortedContacts.map(contact => (
        <ContactItem key={contact.id}>
          <Contact contact={contact} />
        </ContactItem>
      ))}
    </ContactsList>
  );
}
