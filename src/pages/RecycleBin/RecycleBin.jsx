import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeletedContact, AppBar, ConfirmationModal } from 'components';
import { Section, ActionsMenu, ItemsListSection } from 'shared';
import { ContentWrapper, Main } from 'shared/commonStyledComponents.jsx';
import { selectRecyclebinContacts, clearRecycleBin } from 'redux/recycleBin';
import { selectContacts, fetchContacts } from 'redux/contacts';
import { CONTACT_ACTIONS, ROUTES } from 'constants';
import { showRecyclebinClearInfo } from 'utils/notifications';
import { useMultiSelect } from 'hooks';

const RecycleBin = () => {
  const allContacts = useSelector(selectContacts);
  const deletedContacts = useSelector(selectRecyclebinContacts);
  const dispatch = useDispatch();
  const [isClearRecyclebinModalOpen, setIsClearRecyclebinModalOpen] =
    useState(false);
  const {
    isMultiSelectOpen,
    toggleMultiSelect,
    selectedItems,
    resetSelectedItems,
    handleSelectAllClick,
    updateSelectedItems,
  } = useMultiSelect(deletedContacts, ROUTES.RECYCLEBIN);
  useEffect(() => {
    if (!allContacts) {
      dispatch(fetchContacts());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const toggleClearRecyclebinModal = () => {
    setIsClearRecyclebinModalOpen(!isClearRecyclebinModalOpen);
  };

  const handleClearRecycleBin = () => {
    dispatch(clearRecycleBin());
    showRecyclebinClearInfo();
    toggleClearRecyclebinModal();
  };
  const renderContact = contact => {
    return (
      <DeletedContact
        contact={contact}
        isMultiSelectOpen={isMultiSelectOpen}
        selectedItems={selectedItems}
        updateSelectedItems={updateSelectedItems}
      />
    );
  };
  return (
    <>
      {/* <AppBar /> */}
      {/* <Main>
        <Section>
          <ContentWrapper> */}
      {!!allContacts?.length && (
        <>
          <ActionsMenu
            page={ROUTES.RECYCLEBIN}
            items={deletedContacts}
            handleMainBtnClick={toggleClearRecyclebinModal}
            isMultiSelectOpen={isMultiSelectOpen}
            toggleMultiSelect={toggleMultiSelect}
            selectedItems={selectedItems}
            resetSelectedItems={resetSelectedItems}
            handleSelectAllClick={handleSelectAllClick}
          />
          <ItemsListSection
            page={ROUTES.RECYCLEBIN}
            renderContact={renderContact}
          />
          {isClearRecyclebinModalOpen && (
            <ConfirmationModal
              isOpen={isClearRecyclebinModalOpen}
              onClose={toggleClearRecyclebinModal}
              onConfirm={handleClearRecycleBin}
              action={CONTACT_ACTIONS.DELETE_ALL}
            />
          )}
        </>
      )}
      {/* </ContentWrapper>
        </Section>
      </Main> */}
    </>
  );
};

export default RecycleBin;
