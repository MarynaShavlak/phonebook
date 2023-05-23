import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeletedContact, ConfirmationModal } from 'components';
import { ActionsMenu, ItemsListSection } from 'shared';
import { selectRecyclebinContacts, clearRecycleBin } from 'redux/recycleBin';
import { selectContacts, fetchContacts } from 'redux/contacts';
import { CONTACT_ACTIONS, ROUTES } from 'constants';
import { showRecyclebinClearInfo } from 'utils/notifications';
import { useMultiSelect } from 'hooks';

const RecycleBin = () => {
  const allContacts = useSelector(selectContacts);
  console.log('allContact: ', allContacts);
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
        <ItemsListSection page={ROUTES.RECYCLEBIN} renderItem={renderContact} />
        {isClearRecyclebinModalOpen && (
          <ConfirmationModal
            isOpen={isClearRecyclebinModalOpen}
            onClose={toggleClearRecyclebinModal}
            onConfirm={handleClearRecycleBin}
            action={CONTACT_ACTIONS.DELETE_ALL}
          />
        )}
      </>
    </>
  );
};

export default RecycleBin;
