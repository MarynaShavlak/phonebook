import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Info, ContentWrapper, AddNewContactBtn } from './Contacts.styled';
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
import { getContactsQuantity } from 'utils/getContactsQuantity';
import { renderIcons } from 'utils/renderIcons';
import { iconSize } from 'constants';

const Contacts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    <main>
      <Section>
        <ContentWrapper>
          {allContacts.length !== 0 && (
            <>
              <AddNewContactBtn
                aria-label="Add new contact"
                onClick={() => navigate('./create')}
              >
                {renderIcons('add', iconSize.md)}
              </AddNewContactBtn>
              {/* <AddNewContact /> */}
              <Info>
                You have <span>{getContactsQuantity(allContacts)}</span> in your
                phone book
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
              {/* <AddNewContact /> */}
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
            <>
              <Notification message="There are no contacts in your phonebook yet" />
            </>
          )}
        </ContentWrapper>
      </Section>
    </main>
  );
};

export default Contacts;
