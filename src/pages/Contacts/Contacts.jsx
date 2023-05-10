import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  ContentWrapper,
  Main,
  Button,
} from 'shared/commonStyledComponents.jsx';
import { ContactList, Loader, AppBar } from 'components';
import {
  Section,
  ErrorMessage,
  Notification,
  FilterList,
  ListHeader,
  MultiSelectBar,
} from 'shared';
import {
  selectContacts,
  selectIsLoading,
  selectError,
  selectFilteredContacts,
  fetchContacts,
} from 'redux/contacts';
import { selectFilterByName, selectFilterByNumber } from 'redux/filters';
import { ITEM_CATEGORIES, ROUTES } from 'constants';
import { useMultiSelect } from 'hooks';

const Contacts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const filteredContacts = useSelector(selectFilteredContacts);
  const allContacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filterByName = useSelector(selectFilterByName);
  const filterByNumber = useSelector(selectFilterByNumber);
  const {
    isMultiSelectOpen,
    toggleMultiSelect,
    selectedContacts,
    resetSelectedContacts,
    handleSelectAllClick,
    updateSelectedContacts,
  } = useMultiSelect(allContacts);

  useEffect(() => {
    if (!allContacts) {
      dispatch(fetchContacts());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const isFiltered =
    (!!filterByName || !!filterByNumber) && !!allContacts?.length;

  return (
    <>
      <AppBar />
      <Main>
        <Section>
          <ContentWrapper>
            {!!allContacts?.length && (
              <>
                <ListHeader
                  category={ITEM_CATEGORIES.CONTACT}
                  items={allContacts}
                  handleClick={() => navigate(`${ROUTES.CREATE}`)}
                  handleSelectClick={toggleMultiSelect}
                  active={isMultiSelectOpen}
                />
                {isMultiSelectOpen && (
                  <MultiSelectBar
                    onSelectAllClick={handleSelectAllClick}
                    selectedContacts={selectedContacts}
                    resetSelectedContacts={resetSelectedContacts}
                    page={ROUTES.CONTACTS}
                  />
                )}
                <FilterList />
              </>
            )}
            {isLoading ? (
              <Loader />
            ) : error && isLoading === false ? (
              <ErrorMessage />
            ) : filteredContacts?.length ? (
              <>
                <ContactList
                  state={{ from: location }}
                  isMultiSelectOpen={isMultiSelectOpen}
                  selectedContacts={selectedContacts}
                  updateSelectedContacts={updateSelectedContacts}
                />
              </>
            ) : isFiltered ? (
              <Notification
                message={
                  filterByName && filterByNumber
                    ? `No contacts found matching your search criteria for names containing '${filterByName}' and numbers containing '${filterByNumber}'.`
                    : filterByName
                    ? `No contacts found matching your search criteria for names containing "${filterByName}" `
                    : `No contacts found matching your search criteria for numbers containing  "${filterByNumber}" `
                }
              />
            ) : (
              <>
                <Notification message="Add your first contact today and discover the amazing possibilities of Phone Genie!" />
                <Button
                  type="button"
                  onClick={() => navigate(`${ROUTES.CREATE}`)}
                >
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
