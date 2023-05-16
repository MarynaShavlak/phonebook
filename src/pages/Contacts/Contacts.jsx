import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ContentWrapper, Main } from 'shared/commonStyledComponents.jsx';
import { Loader, AppBar, Contact } from 'components';
import { Section, ErrorMessage, ActionsMenu, ItemsListSection } from 'shared';
import {
  selectContacts,
  selectIsLoading,
  selectError,
  fetchContacts,
} from 'redux/contacts';
import { ROUTES } from 'constants';
import { useMultiSelect } from 'hooks';

const Contacts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allContacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
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

  const openCreateNewContactPage = () => {
    navigate(`${ROUTES.CREATE}`);
  };
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
              page={ROUTES.CONTACTS}
              items={allContacts}
              handleMainBtnClick={openCreateNewContactPage}
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
            ) : (
              <ItemsListSection
                page={ROUTES.CONTACTS}
                renderContact={renderContact}
              />
            )}
          </ContentWrapper>
        </Section>
      </Main>
    </>
  );
};

export default Contacts;
