import React from 'react';
import { ContactsList, ContactItem } from './ContactList.styled';
import { Contact } from 'components/Contact';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';

export function ContactList() {
  const contacts = useSelector(getFilteredContacts);
  return (
    <ContactsList>
      {contacts.map(contact => (
        <ContactItem key={contact.id}>
          <Contact contact={contact} />
        </ContactItem>
      ))}
    </ContactsList>
  );
}
