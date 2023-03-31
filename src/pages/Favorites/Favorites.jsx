import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavoritesContacts } from 'redux/favorites/selectors';
import {
  ContactsList,
  ContactItem,
} from 'components/ContactList/ContactList.styled';
import { FavoriteContact, Section, Notification } from 'components';
import { ContentWrapper } from 'pages/Contacts/Contacts.styled';

const Favorites = () => {
  const contacts = useSelector(selectFavoritesContacts);
  return (
    <main>
      <Section>
        <ContentWrapper>
          {contacts.length !== 0 ? (
            <ContactsList>
              {contacts.map(contact => (
                <ContactItem key={contact.id}>
                  <FavoriteContact contact={contact} />
                </ContactItem>
              ))}
            </ContactsList>
          ) : (
            <Notification message="There are no contacts in your favorites yet" />
          )}
        </ContentWrapper>
      </Section>
    </main>
  );
};

export default Favorites;
