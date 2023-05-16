import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  ContentWrapper,
  Main,
  Button,
} from 'shared/commonStyledComponents.jsx';
import {
  ItemsList,
  Loader,
  AppBar,
  ContactSortMenu,
  Contact,
} from 'components';
import { Section, ErrorMessage, Notification, ActionsMenu } from 'shared';
import {
  selectContacts,
  selectIsLoading,
  selectError,
  selectFilteredContacts,
  fetchContacts,
} from 'redux/contacts';
import { selectFilter } from 'redux/filters';
import { ITEM_CATEGORIES, ROUTES } from 'constants';
import { useMultiSelect } from 'hooks';

const Contacts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const filteredContacts = useSelector(selectFilteredContacts);
  const allContacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter(ROUTES.CONTACTS));
  const {
    isMultiSelectOpen,
    toggleMultiSelect,
    selectedItems,
    resetSelectedItems,
    handleSelectAllClick,
    updateSelectedItems,
  } = useMultiSelect(allContacts, ROUTES.CONTACTS);
  useEffect(() => {
    if (!allContacts) {
      dispatch(fetchContacts());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  const isFiltered = !!filter && !!allContacts?.length;

  const renderContact = contact => {
    return (
      <Contact
        contact={contact}
        isMultiSelectOpen={isMultiSelectOpen}
        selectedItems={selectedItems}
        updateSelectedItems={updateSelectedItems}
      />
    );
  };

  return (
    <>
      <AppBar />
      <Main>
        <Section>
          <ContentWrapper>
            <ActionsMenu
              category={ITEM_CATEGORIES.CONTACT}
              page={ROUTES.CONTACTS}
              items={allContacts}
              handleMainBtnClick={() => navigate(`${ROUTES.CREATE}`)}
              isMultiSelectOpen={isMultiSelectOpen}
              toggleMultiSelect={toggleMultiSelect}
              selectedItems={selectedItems}
              resetSelectedItems={resetSelectedItems}
              handleSelectAllClick={handleSelectAllClick}
            />

            {isLoading ? (
              <Loader />
            ) : error && isLoading === false ? (
              <ErrorMessage />
            ) : filteredContacts?.length ? (
              <>
                <ContactSortMenu />
                <ItemsList
                  // state={{ from: location }}
                  items={filteredContacts}
                  renderItem={renderContact}
                  page={ROUTES.CONTACTS}
                />
              </>
            ) : isFiltered ? (
              <Notification
                message={`No contacts found matching your search criteria for names or numbers containing '${filter}'`}
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
