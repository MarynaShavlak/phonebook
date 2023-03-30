import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavouritesContacts } from 'redux/favourites/selectors';
import {
  ContactsList,
  ContactItem,
} from 'components/ContactList/ContactList.styled';
import { FavouriteContact, Section, Notification } from 'components';
import { ContentWrapper } from 'pages/Contacts/Contacts.styled';

const RecycleBin = () => {
  const contacts = useSelector(selectFavouritesContacts);
  return (
    <main>
      <Section>
        <ContentWrapper>
          {contacts.length !== 0 ? (
            <ContactsList>
              {contacts.map(contact => (
                <ContactItem key={contact.id}>
                  <FavouriteContact contact={contact} />
                </ContactItem>
              ))}
            </ContactsList>
          ) : (
            <Notification message="There are no contacts in your favourites yet" />
          )}
        </ContentWrapper>
      </Section>
    </main>
  );
};

export default RecycleBin;
