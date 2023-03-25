import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Info } from './Contacts.styled';
import {
  ErrorMessage,
  Section,
  ContactList,
  Filter,
  Loader,
  Notification,
} from 'components';
import * as contactsOperations from 'redux/contacts/contactsOperations';
import {
  selectContacts,
  selectIsLoading,
  selectError,
  selectFilteredContacts,
} from 'redux/contacts/selectors';
import {
  selectFilterByName,
  selectFilterByNumber,
} from 'redux/filters/selectors';
import AddNewContact from 'components/AddNewContact/AddNewContact';

const Contacts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const filteredContacts = useSelector(selectFilteredContacts);
  const allContacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filterByName = useSelector(selectFilterByName);
  const filterByNumber = useSelector(selectFilterByNumber);
  const isFiltered =
    (!!filterByName || !!filterByNumber) && !!allContacts.length;

  return (
    <>
      <Container>
        <Section title="Contacts">
          <>
            {allContacts.length !== 0 && (
              <>
                <Info>
                  You have <span>{allContacts.length}</span> contacts in your
                  phoneBook
                </Info>
                <Filter name="name" />
                <Filter name="number" />
              </>
            )}

            {isLoading ? (
              <Loader />
            ) : error && isLoading === false ? (
              <ErrorMessage />
            ) : filteredContacts.length ? (
              <>
                <AddNewContact />
                <ContactList />
              </>
            ) : isFiltered ? (
              <Notification
                message={
                  filterByName && filterByNumber
                    ? `Nothing found by selected name "${filterByName}"  and number "${filterByNumber}"`
                    : filterByName
                    ? `Nothing found by selected name "${filterByName}" `
                    : `Nothing found by selected number "${filterByNumber}" `
                }
              />
            ) : (
              <Notification message="There are no contacts in your phonebook yet" />
            )}
          </>
        </Section>
      </Container>
    </>
  );
};

export default Contacts;
