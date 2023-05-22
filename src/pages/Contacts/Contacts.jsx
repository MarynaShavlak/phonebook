import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Loader, Contact } from 'components';
import { ErrorMessage, ActionsMenu, ItemsListSection } from 'shared';
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
      {isLoading ? (
        <Loader />
      ) : error && isLoading === false ? (
        <ErrorMessage />
      ) : (
        <>
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
          <ItemsListSection
            page={ROUTES.CONTACTS}
            renderContact={renderContact}
          />
        </>
      )}
    </>
  );
};

export default Contacts;
