import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, ContactItem } from 'components/ContactList/ContactList.styled';
import { DeletedContact, AppBar } from 'components';
import { Section, Notification } from 'shared';
import { ContentWrapper, Main } from 'shared/commonStyledComponents.jsx';
import { selectRecycleBinContacts } from 'redux/recycleBin/selectors';
import { selectContacts, fetchContacts } from 'redux/contacts';

const RecycleBin = () => {
  const deletedContacts = useSelector(selectRecycleBinContacts);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!contacts.length) {
      dispatch(fetchContacts());
    }
  }, [contacts, dispatch]);

  return (
    <>
      <AppBar />
      <Main>
        <Section>
          <ContentWrapper>
            {!!deletedContacts.length ? (
              <List>
                {deletedContacts.map(contact => (
                  <ContactItem key={contact.id}>
                    <DeletedContact
                      deletedContact={contact}
                      allContacts={contacts}
                    />
                  </ContactItem>
                ))}
              </List>
            ) : (
              <Notification message="There are no contacts in recycle bin now" />
            )}
          </ContentWrapper>
        </Section>
      </Main>
    </>
  );
};

export default RecycleBin;
