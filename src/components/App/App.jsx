import React from 'react';
import { Container } from './App.styled';
import { Section } from 'components/Section';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Notification } from 'components/Notification';
import { ToastContainer } from 'react-toastify';
import { Layout } from 'components/Layout';
import { useSelector, useDispatch } from 'react-redux';
import * as contactsOperations from 'redux/contactsOperations';
import { useEffect } from 'react';
import {
  getContacts,
  getFilteredContacts,
  getFilterByName,
  getFilterByNumber,
} from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const filteredContacts = useSelector(getFilteredContacts);
  const allContacts = useSelector(getContacts);
  const filterByName = useSelector(getFilterByName);
  const filterByNumber = useSelector(getFilterByNumber);
  const isFiltered =
    (!!filterByName || !!filterByNumber) && !!allContacts.length;

  return (
    <Layout>
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

            {filteredContacts.length ? (
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
          position="top-right"
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          pauseOnHover={false}
          theme="colored"
          autoClose={4000}
        />
      </Container>
    </Layout>
  );
};
