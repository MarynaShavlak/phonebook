import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  DeletedContact,
  AppBar,
  ConfirmationModal,
  ItemsList,
} from 'components';
import { Section, Notification, ActionsMenu } from 'shared';
import { ContentWrapper, Main } from 'shared/commonStyledComponents.jsx';
import {
  selectRecyclebinContacts,
  clearRecycleBin,
  selectFilteredRecyclebinContacts,
} from 'redux/recycleBin';
import { selectContacts, fetchContacts } from 'redux/contacts';
import { selectFilter } from 'redux/filters';
import { ITEM_CATEGORIES, CONTACT_ACTIONS, ROUTES } from 'constants';
import { showRecyclebinClearInfo } from 'utils/notifications';
import { useMultiSelect } from 'hooks';

const RecycleBin = () => {
  const allContacts = useSelector(selectContacts);
  const deletedContacts = useSelector(selectRecyclebinContacts);

  const filteredRecyclebinContacts = useSelector(
    selectFilteredRecyclebinContacts
  );
  const filter = useSelector(selectFilter(ROUTES.RECYCLEBIN));
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
  const isFiltered = !!filter && !!deletedContacts?.length;
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
      <AppBar />
      <Main>
        <Section>
          <ContentWrapper>
            {!!allContacts?.length && (
              <>
                <ActionsMenu
                  category={ITEM_CATEGORIES.RECYCLEBIN}
                  page={ROUTES.RECYCLEBIN}
                  items={deletedContacts}
                  handleMainBtnClick={toggleClearRecyclebinModal}
                  isMultiSelectOpen={isMultiSelectOpen}
                  toggleMultiSelect={toggleMultiSelect}
                  selectedItems={selectedItems}
                  resetSelectedItems={resetSelectedItems}
                  handleSelectAllClick={handleSelectAllClick}
                />

                {isClearRecyclebinModalOpen && (
                  <ConfirmationModal
                    isOpen={isClearRecyclebinModalOpen}
                    onClose={toggleClearRecyclebinModal}
                    onConfirm={handleClearRecycleBin}
                    action={CONTACT_ACTIONS.DELETE_ALL}
                  />
                )}

                {filteredRecyclebinContacts?.length ? (
                  <ItemsList
                    items={filteredRecyclebinContacts}
                    renderItem={renderContact}
                    page={ROUTES.RECYCLEBIN}
                  />
                ) : isFiltered ? (
                  <Notification
                    message={`No contacts found matching your search criteria for names or numbers containing '${filter}'`}
                  />
                ) : (
                  <Notification message="There are no contacts in recycle bin now" />
                )}
              </>
            )}
          </ContentWrapper>
        </Section>
      </Main>
    </>
  );
};

export default RecycleBin;
