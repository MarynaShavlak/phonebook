import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from './Contacts.styled';
import {
  ErrorMessage,
  Section,
  ContactForm,
  ContactList,
  Filter,
  Loader,
  Notification,
} from 'components';

import * as contactsOperations from 'redux/contactsOperations';
import {
  getContacts,
  getIsLoading,
  getError,
  getFilteredContacts,
  getFilterByName,
  getFilterByNumber,
} from 'redux/selectors';
import { ToastContainer } from 'react-toastify';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const filteredContacts = useSelector(getFilteredContacts);
  const allContacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const filterByName = useSelector(getFilterByName);
  const filterByNumber = useSelector(getFilterByNumber);
  const isFiltered =
    (!!filterByName || !!filterByNumber) && !!allContacts.length;

  return (
    <>
      <Container>
        <Section title="Phonebook">
          <ContactForm />
        </Section>
        <Section title="Contacts">
          <>
            {allContacts.length !== 0 && (
              <>
                <Filter name="name" />
                <Filter name="number" />
              </>
            )}

            {isLoading ? (
              <Loader />
            ) : error && isLoading === false ? (
              <ErrorMessage />
            ) : filteredContacts.length ? (
              <ContactList />
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
    </>
  );
};

export default Contacts;
