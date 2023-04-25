import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavoritesContacts } from 'redux/favorites/selectors';
import {
  ContactsList,
  ContactItem,
} from 'components/ContactList/ContactList.styled';
import { FavoriteContact, Section, Notification } from 'components';
import { ContentWrapper } from 'pages/Contacts/Contacts.styled';
import { AppBar } from 'components/AppBar/AppBar';
import { HomeMain } from 'pages/Home/Home.styled';

const Favorites = () => {
  const contacts = useSelector(selectFavoritesContacts);
  return (
    <>
      <AppBar />{' '}
      <HomeMain>
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
      </HomeMain>
    </>
  );
};

export default Favorites;
