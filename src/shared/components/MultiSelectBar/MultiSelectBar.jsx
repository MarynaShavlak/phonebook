import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  ConfirmationModal,
  AddFewContactsToGroupModal,
  MergeGroupsModal,
  MergeContactsModal,
} from 'components';
import {
  SelectBtn,
  SelectedInfo,
  ControlBar,
  ChoseActionBlock,
  BtnList,
} from './MultiSelectBar.styled';
import {
  getSelectButtonText,
  checkIfInRecycleBin,
  addContactToRecycleBinWithRemovalTime,
  deleteContactAndCheckError,
  removeContactFromFavoritesIfNeeded,
  isContactInFavorites,
  removeContactFromGroups,
  addToFavorites,
  removeFromFavorites,
  checkAndWarnForDuplicateContact,
  restoreDeletedContact,
} from 'utils';
import { useModal } from 'hooks';
import {
  ICON_NAMES,
  OPERATION,
  CONTACT_ACTIONS,
  ROUTES,
  GROUP_ACTIONS,
} from 'constants';
import { showContactSuccess, showRecyclebinWarn } from 'utils/notifications';
import { selectContacts } from 'redux/contacts';
import { selectFavoritesContacts } from 'redux/favorites';
import { selectGroups } from 'redux/groups';
import { selectRecyclebinContacts } from 'redux/recycleBin';
import { ActionBtn } from './ActionBtn/ActionBtn';

export const MultiSelectBar = ({
  onSelectAllClick,
  selectedItems,
  resetSelectedItems,
  page,
}) => {
  const isOnFavoritesPage = page === ROUTES.FAVORITES;
  const isOnRecyclebinPage = page === ROUTES.RECYCLEBIN;
  const isOnGroupsPage = page === ROUTES.GROUPS;
  const dispatch = useDispatch();
  const allContacts = useSelector(selectContacts);
  const deletedContacts = useSelector(selectRecyclebinContacts);
  const favoriteContacts = useSelector(selectFavoritesContacts);
  const groups = useSelector(selectGroups);
  const isAnyItemSelected = selectedItems.length;
  const isAvailbaleToMerge = selectedItems.length >= 2;
  const { isDeleteModalOpen, toggleDeleteModal } = useModal(OPERATION.DELETE);
  const { isRemoveModalOpen, toggleRemoveModal } = useModal(OPERATION.REMOVE);
  const { isAddModalOpen, toggleAddModal } = useModal(OPERATION.ADD);
  const { isMergeModalOpen, toggleMergeModal } = useModal(OPERATION.MERGE);
  const { isRestoreModalOpen, toggleRestoreModal } = useModal(
    OPERATION.RESTORE
  );
  const [isFavorite, setIsFavorite] = useState(isOnFavoritesPage);
  const isTablet = useMediaQuery('(min-width:768px)');

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    for (const contact of selectedItems) {
      const isContactInFavorite = isContactInFavorites(
        contact,
        favoriteContacts
      );
      if (isFavorite && isContactInFavorite) {
        removeFromFavorites({ contact, dispatch });
      } else if (!isFavorite && !isContactInFavorite) {
        addToFavorites({ contact, dispatch });
      }
    }
  };

  const moveSelectedItemsToRecycleBin = async () => {
    const promises = selectedItems.map(contact =>
      deleteContactAndCheckError({
        contactId: contact.id,
        dispatch,
        toggleModal: toggleRemoveModal,
      })
    );
    const results = await Promise.all(promises);
    if (results.every(result => result)) {
      selectedItems.forEach(contact => {
        if (checkIfInRecycleBin(contact, deletedContacts)) {
          showRecyclebinWarn(contact);
          return;
        }
        addContactToRecycleBinWithRemovalTime(contact, dispatch);
        const isFavorite = isContactInFavorites(contact, favoriteContacts);
        removeContactFromFavoritesIfNeeded({ contact, isFavorite, dispatch });
        removeContactFromGroups({ contact, groups, dispatch });
        showContactSuccess(CONTACT_ACTIONS.REMOVE_TO_RECYCLE_BIN, contact);
      });
      toggleRemoveModal();
      resetSelectedItems();
    }
  };

  const restoreselectedItems = async () => {
    for (const contact of selectedItems) {
      const isContactAlreadyExist = checkAndWarnForDuplicateContact({
        newContact: contact,
        contacts: allContacts,
      });
      if (isContactAlreadyExist) {
        continue;
      }
      await restoreDeletedContact({ contact, dispatch });
      toggleRestoreModal();
      resetSelectedItems();
    }
  };

  const favoriteButton = (
    <ActionBtn
      ariaLabel="Add/remove selected contacts to favorites"
      onClick={toggleFavorite}
      disabled={!isAnyItemSelected}
      iconName={ICON_NAMES.FAVORITE}
    />
  );
  const addButton = (
    <ActionBtn
      ariaLabel="Add selected contacts to groups"
      onClick={toggleAddModal}
      disabled={!isAnyItemSelected}
      iconName={ICON_NAMES.GROUP}
    />
  );
  const mergeButton = (
    <ActionBtn
      ariaLabel="Merge selected groups"
      onClick={toggleMergeModal}
      disabled={!isAvailbaleToMerge}
      iconName={ICON_NAMES.MERGE}
    />
  );
  const restoreButton = (
    <ActionBtn
      ariaLabel="Restore selected contacts"
      onClick={toggleRestoreModal}
      disabled={!isAnyItemSelected}
      iconName={ICON_NAMES.RESTORE}
    />
  );
  const removeButton = (
    <ActionBtn
      ariaLabel={
        isOnRecyclebinPage
          ? 'Delete selected contacts from recycle bin'
          : 'Remove selected contacts to recycle bin'
      }
      onClick={toggleRemoveModal}
      disabled={!isAnyItemSelected}
      iconName={ICON_NAMES.DELETE}
    />
  );
  const deleteButton = (
    <ActionBtn
      ariaLabel="Delete selected groups"
      onClick={toggleDeleteModal}
      disabled={!isAnyItemSelected}
      iconName={ICON_NAMES.DELETE}
    />
  );

  return (
    <ControlBar>
      <SelectBtn type="button" onClick={onSelectAllClick}>
        {getSelectButtonText(isAnyItemSelected)}
      </SelectBtn>
      <ChoseActionBlock>
        {isTablet && <span>Choose Action</span>}
        <BtnList>
          {!isOnRecyclebinPage && !isOnGroupsPage && (
            <>
              {favoriteButton}
              {addButton}
              {mergeButton}
            </>
          )}
          {isOnRecyclebinPage && <>{restoreButton}</>}
          {isOnGroupsPage && <>{mergeButton}</>}
          {!isOnGroupsPage && removeButton}
          {isOnGroupsPage && deleteButton}
        </BtnList>
      </ChoseActionBlock>
      <SelectedInfo type="button">
        <span>{isAnyItemSelected}</span> Selected
      </SelectedInfo>
      {isRemoveModalOpen && (
        <ConfirmationModal
          isOpen={isRemoveModalOpen}
          onClose={toggleRemoveModal}
          data={selectedItems}
          onConfirm={moveSelectedItemsToRecycleBin}
          action={CONTACT_ACTIONS.REMOVE_TO_RECYCLE_BIN}
        />
      )}
      {isDeleteModalOpen && (
        <ConfirmationModal
          isOpen={isDeleteModalOpen}
          onClose={toggleDeleteModal}
          data={selectedItems}
          onConfirm={moveSelectedItemsToRecycleBin}
          action={GROUP_ACTIONS.DELETE}
        />
      )}
      {isMergeModalOpen && isOnGroupsPage && (
        <MergeGroupsModal
          isOpen={isMergeModalOpen}
          onClose={toggleMergeModal}
          selectedGroups={selectedItems}
          resetSelectedGroups={resetSelectedItems}
        />
      )}
      {isMergeModalOpen && !isOnGroupsPage && (
        <MergeContactsModal
          isOpen={isMergeModalOpen}
          onClose={toggleMergeModal}
          selectedContacts={selectedItems}
          resetSelectedContacts={resetSelectedItems}
        />
      )}
      {isAddModalOpen && (
        <AddFewContactsToGroupModal
          isOpen={isAddModalOpen}
          onClose={toggleAddModal}
          selectedItems={selectedItems}
          resetSelectedItems={resetSelectedItems}
        />
      )}
      {isRestoreModalOpen && (
        <ConfirmationModal
          isOpen={isRestoreModalOpen}
          onClose={toggleRestoreModal}
          data={selectedItems}
          onConfirm={restoreselectedItems}
          action={CONTACT_ACTIONS.RESTORE}
        />
      )}
    </ControlBar>
  );
};

MultiSelectBar.propTypes = {
  onSelectAllClick: PropTypes.func.isRequired,
  resetSelectedItems: PropTypes.func.isRequired,
  selectedItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  page: PropTypes.string.isRequired,
};
