import React from 'react';
import { useSelector } from 'react-redux';
import { getRecycleBinContacts } from 'redux/selectors';
import { ToastContainer } from 'react-toastify';
import {
  ContactsList,
  ContactItem,
} from 'components/ContactList/ContactList.styled';
import { Container } from 'pages/Contacts/Contacts.styled';
import { DeletedContact, Section, Notification } from 'components';

const RecycleBin = () => {
  const contacts = useSelector(getRecycleBinContacts);
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
      <ToastContainer
        position="bottom-right"
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover={false}
        theme="colored"
        autoClose={4000}
        style={{ width: '500px', fontSize: '28px', lineHeight: '1.2' }}
      />
    </Container>
  );
};

export default RecycleBin;
