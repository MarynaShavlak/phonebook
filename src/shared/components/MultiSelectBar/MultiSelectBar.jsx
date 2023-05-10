import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ConfirmationModal, AddFewContactsToGroupModal } from 'components';
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
import { ICON_NAMES, OPERATION, CONTACT_ACTIONS } from 'constants';
import { showContactSuccess, showRecyclebinWarn } from 'utils/notifications';
import { selectContacts } from 'redux/contacts';
import { selectFavoritesContacts } from 'redux/favorites';
import { selectGroups } from 'redux/groups';
import { selectRecycleBinContacts } from 'redux/recycleBin';
import { ROUTES } from 'constants';
import { ActionBtn } from './ActionBtn/ActionBtn';

export const MultiSelectBar = ({
  onSelectAllClick,
  selectedContacts,
  resetSelectedContacts,
  page,
}) => {
  const isOnFavoritesPage = page === ROUTES.FAVORITES;
  const isOnRecyclebinPage = page === ROUTES.RECYCLEBIN;
  const dispatch = useDispatch();
  const allContacts = useSelector(selectContacts);
  const deletedContacts = useSelector(selectRecycleBinContacts);
  const favoriteContacts = useSelector(selectFavoritesContacts);
  const groups = useSelector(selectGroups);
  const isAnyContactSelected = selectedContacts.length;
  const { isRemoveModalOpen, toggleRemoveModal } = useModal(OPERATION.REMOVE);
  const { isAddModalOpen, toggleAddModal } = useModal(OPERATION.ADD);
  const { isRestoreModalOpen, toggleRestoreModal } = useModal(
    OPERATION.RESTORE
  );
  const [isFavorite, setIsFavorite] = useState(isOnFavoritesPage);
  const isTablet = useMediaQuery('(min-width:768px)');

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    for (const contact of selectedContacts) {
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

  const moveSelectedContactsToRecycleBin = async () => {
    const promises = selectedContacts.map(contact =>
      deleteContactAndCheckError({
        contactId: contact.id,
        dispatch,
        toggleRemoveModal,
      })
    );
    const results = await Promise.all(promises);
    if (results.every(result => result)) {
      selectedContacts.forEach(contact => {
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
      resetSelectedContacts();
    }
  };

  const restoreSelectedContacts = async () => {
    for (const contact of selectedContacts) {
      const isContactAlreadyExist = checkAndWarnForDuplicateContact({
        newContact: contact,
        contacts: allContacts,
      });
      if (isContactAlreadyExist) {
        continue;
      }
      await restoreDeletedContact({ contact, dispatch });
      toggleRestoreModal();
      resetSelectedContacts();
    }
  };

  const favoriteButton = (
    <ActionBtn
      ariaLabel="Add/remove selected contacts to favorites"
      onClick={toggleFavorite}
      disabled={!isAnyContactSelected}
      iconName={ICON_NAMES.FAVORITE}
    />
  );

  const addButton = (
    <ActionBtn
      ariaLabel="Add selected contacts to groups"
      onClick={toggleAddModal}
      disabled={!isAnyContactSelected}
      iconName={ICON_NAMES.GROUP}
    />
  );

  const restoreButton = isOnRecyclebinPage && (
    <ActionBtn
      ariaLabel="Restore selected contacts"
      onClick={toggleRestoreModal}
      disabled={!isAnyContactSelected}
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
      disabled={!isAnyContactSelected}
      iconName={ICON_NAMES.DELETE}
    />
  );

  return (
    <ControlBar>
      <SelectBtn type="button" onClick={onSelectAllClick}>
        {getSelectButtonText(isAnyContactSelected)}
      </SelectBtn>
      <ChoseActionBlock>
        {isTablet && <span>Choose Action</span>}
        <BtnList>
          {!isOnRecyclebinPage && (
            <>
              {favoriteButton}
              {addButton}
            </>
          )}
          {restoreButton}
          {removeButton}
        </BtnList>
      </ChoseActionBlock>
      <SelectedInfo type="button">
        <span>{isAnyContactSelected}</span> Selected
      </SelectedInfo>
      {isRemoveModalOpen && (
        <ConfirmationModal
          isOpen={isRemoveModalOpen}
          onClose={toggleRemoveModal}
          data={selectedContacts}
          onConfirm={moveSelectedContactsToRecycleBin}
          action={CONTACT_ACTIONS.REMOVE_TO_RECYCLE_BIN}
        />
      )}
      {isAddModalOpen && (
        <AddFewContactsToGroupModal
          isOpen={isAddModalOpen}
          onClose={toggleAddModal}
          selectedContacts={selectedContacts}
          resetSelectedContacts={resetSelectedContacts}
        />
      )}
      {isRestoreModalOpen && (
        <ConfirmationModal
          isOpen={isRestoreModalOpen}
          onClose={toggleRestoreModal}
          data={selectedContacts}
          onConfirm={restoreSelectedContacts}
          action={CONTACT_ACTIONS.RESTORE}
        />
      )}
    </ControlBar>
  );
};

MultiSelectBar.propTypes = {
  onSelectAllClick: PropTypes.func.isRequired,
  resetSelectedContacts: PropTypes.func.isRequired,
  selectedContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
  page: PropTypes.string.isRequired,
};
