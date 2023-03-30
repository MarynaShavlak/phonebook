import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { Info, ContentWrapper, AddNewContactBtn } from './Contacts.styled';
import { Button } from 'components/OperationButton/OperationButton.styled';
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
  const location = useLocation();

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
                onClick={() => navigate('/create')}
              >
                {renderIcons('add', iconSize.md)}
              </AddNewContactBtn>
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
              <ContactList state={{ from: location }} />
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
              <Notification message="Add your first contact today and discover the amazing possibilities of Phone Genie!" />
              <Button type="button" onClick={() => navigate('/create')}>
                Add contact to phone book
              </Button>
            </>
          )}
        </ContentWrapper>
      </Section>
    </main>
  );
};

export default Contacts;