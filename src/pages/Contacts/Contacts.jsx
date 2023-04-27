import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { FilterList, AddNewContactBtn } from './Contacts.styled';
import {
  ContentWrapper,
  Main,
  Button,
  InfoWrap,
  Info,
} from 'shared/commonStyledComponents.jsx';
import { ContactList, Filter, Loader, AppBar } from 'components';
import { Section, ErrorMessage, Notification } from 'shared';
import {
  selectContacts,
  selectIsLoading,
  selectError,
  selectFilteredContacts,
  // fetchContacts,
} from 'redux/contacts';

import { selectFilterByName, selectFilterByNumber } from 'redux/filters';
import { getContactsQuantity, renderIcons } from 'utils';

const Contacts = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  // const contacts = useSelector(selectContacts);

  // useEffect(() => {
  //   if (!contacts.length) {
  //     dispatch(fetchContacts());
  //   }
  // }, [contacts, dispatch]);

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
      <AppBar />
      <Main>
        <Section>
          <ContentWrapper>
            {allContacts.length !== 0 && (
              <>
                <InfoWrap>
                  <Info>
                    Total quantity:{' '}
                    <span>{getContactsQuantity(allContacts)}</span>
                  </Info>
                  <AddNewContactBtn
                    type="button"
                    aria-label="Add new contact"
                    onClick={() => navigate('/create')}
                  >
                    {renderIcons('add', 30)}
                  </AddNewContactBtn>
                </InfoWrap>

                <FilterList>
                  <li>
                    <Filter name="name" />
                  </li>
                  <li>
                    <Filter name="number" />
                  </li>
                </FilterList>
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
                  Add contact
                </Button>
              </>
            )}
          </ContentWrapper>
        </Section>
      </Main>
    </>
  );
};

export default Contacts;
