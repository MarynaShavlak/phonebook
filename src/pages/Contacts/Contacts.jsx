import React, { useEffect, useRef } from 'react';
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
  Filter,
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
// import {
//   selectFilterByName,
//   selectFilterByNumber,
// } from 'redux/filters/contacts';
import { selectFilterByName, selectFilterByNumber } from 'redux/filters';
import { ITEM_CATEGORIES, ROUTES } from 'constants';
import { useMultiSelect, useSearchMenu } from 'hooks';

const Contacts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const filteredContacts = useSelector(selectFilteredContacts);
  const allContacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filterByName = useSelector(selectFilterByName('contacts'));
  const filterByNumber = useSelector(selectFilterByNumber('contacts'));
  const {
    isMultiSelectOpen,
    toggleMultiSelect,
    selectedItems,
    resetSelectedItems,
    handleSelectAllClick,
    updateSelectedItems,
  } = useMultiSelect(allContacts, ROUTES.CONTACTS);
  const { isSearchMenuOpen, toggleSearchMenu } = useSearchMenu();
  useEffect(() => {
    if (!allContacts) {
      dispatch(fetchContacts());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  const isFiltered =
    (!!filterByName || !!filterByNumber) && !!allContacts?.length;

  useEffect(() => {
    console.log('Mount');
    return () => {
      console.log('Unmount');
    };
  }, []);

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
                  handleSearchClick={toggleSearchMenu}
                  activeMultiSelect={isMultiSelectOpen}
                  activeSearchMenu={isSearchMenuOpen}
                  page={ROUTES.CONTACTS}
                />
                {isMultiSelectOpen && (
                  <MultiSelectBar
                    onSelectAllClick={handleSelectAllClick}
                    selectedItems={selectedItems}
                    resetSelectedItems={resetSelectedItems}
                    page={ROUTES.CONTACTS}
                  />
                )}
                {isSearchMenuOpen && <Filter page={ROUTES.CONTACTS} />}
              </>
            )}
            {isLoading ? (
              <Loader />
            ) : error && isLoading === false ? (
              <ErrorMessage />
            ) : filteredContacts?.length ? (
              <ContactList
                state={{ from: location }}
                isMultiSelectOpen={isMultiSelectOpen}
                selectedItems={selectedItems}
                updateSelectedItems={updateSelectedItems}
              />
            ) : isFiltered ? (
              <Notification
                message={`No contacts found matching your search criteria for names or numbers containing '${filterByName}'`}
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
