import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
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
  IconButton,
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
import { renderIcons } from 'utils/renderIcons';
import { iconSize } from 'constants';
import AddNewContact from 'components/AddNewContact/AddNewContact';

const Contacts = () => {
  // const [addBtnHeight, setAddBtnHeight] = useState(0);

  const dispatch = useDispatch();
  // const addBtnRef = React.createRef(null);
  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  // useLayoutEffect(() => {
  //   setAddBtnHeight(addBtnRef.current.offsetHeight);
  // }, []);

  const filteredContacts = useSelector(getFilteredContacts);
  const allContacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const filterByName = useSelector(getFilterByName);
  const filterByNumber = useSelector(getFilterByNumber);
  const isFiltered =
    (!!filterByName || !!filterByNumber) && !!allContacts.length;
  // const windowHeight = useRef(window.innerHeight);
  // const addBtnPosition = windowHeight.current - addBtnHeight - 40;

  return (
    <>
      <Container>
        {/* <Sticky top={addBtnPosition}>
          <IconButton aria-label="Add new contact" ref={addBtnRef}>
            {renderIcons('add', iconSize.lg)}
          </IconButton>
        </Sticky> */}
        {/* <Section title="Phonebook">
          <ContactForm />
        </Section> */}
        <Section title="Contacts">
          <>
            <AddNewContact></AddNewContact>
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
