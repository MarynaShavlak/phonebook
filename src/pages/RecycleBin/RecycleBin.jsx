import React from 'react';
import { useSelector } from 'react-redux';
import { selectRecycleBinContacts } from 'redux/recycleBin/selectors';
import {
  ContactsList,
  ContactItem,
} from 'components/ContactList/ContactList.styled';
import { Container } from 'pages/Contacts/Contacts.styled';
import { DeletedContact, Section, Notification } from 'components';

const RecycleBin = () => {
  const contacts = useSelector(selectRecycleBinContacts);
  return (
    <Container>
      <Section title={null}>
        {contacts.length !== 0 ? (
          <ContactsList>
            {contacts.map(contact => (
              <ContactItem key={contact.id}>
                <DeletedContact contact={contact} />
              </ContactItem>
            ))}
          </ContactsList>
        ) : (
          <Notification message="There are no contacts in recycle bin now" />
        )}
      </Section>
    </Container>
  );
};

export default RecycleBin;
