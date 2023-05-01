import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavoritesContacts } from 'redux/favorites/selectors';
import { List, ContactItem } from 'components/ContactList/ContactList.styled';
import { FavoriteContact, AppBar } from 'components';
import { Section, Notification } from 'shared';
import { ContentWrapper, Main } from 'shared/commonStyledComponents.jsx';

const Favorites = () => {
  const contacts = useSelector(selectFavoritesContacts);
  return (
    <>
      <AppBar />{' '}
      <Main>
        <Section>
          <ContentWrapper>
            {!!contacts.length ? (
              <List>
                {contacts.map(contact => (
                  <ContactItem key={contact.id}>
                    <FavoriteContact contact={contact} />
                  </ContactItem>
                ))}
              </List>
            ) : (
              <Notification message="There are no contacts in your favorites yet" />
            )}
          </ContentWrapper>
        </Section>
      </Main>
    </>
  );
};

export default Favorites;
