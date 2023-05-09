import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { ConfirmationModal, AddFewContactsToGroupModal } from 'components';
import {
  SelectBtn,
  SelectedInfo,
  ControlBar,
  ChoseActionBlock,
  BtnList,
} from './MultiSelectBar.styled';
import {
  renderIcons,
  getSelectButtonText,
  checkIfInRecycleBin,
  addContactToRecycleBinWithRemovalTime,
  deleteContactAndCheckError,
  removeContactFromFavoritesIfNeeded,
  isContactInFavorites,
  removeContactFromGroups,
} from 'utils';
import { useModal } from 'hooks';
import { ICON_NAMES, ICON_SIZES, OPERATION, CONTACT_ACTIONS } from 'constants';
import { showContactSuccess, showRecyclebinWarn } from 'utils/notifications';
import {
  selectFavoritesContacts,
  addContactToFavorites,
  removeContactFromFavorites,
} from 'redux/favorites';
import { selectGroups } from 'redux/groups';
import { selectRecycleBinContacts } from 'redux/recycleBin';

export const MultiSelectBar = ({
  onSelectAllClick,
  selectedContacts,
  resetSelectedContacts,
}) => {
  const dispatch = useDispatch();
  const deletedContacts = useSelector(selectRecycleBinContacts);
  const favoriteContacts = useSelector(selectFavoritesContacts);
  const groups = useSelector(selectGroups);
  const isAnyContactSelected = selectedContacts.length;
  const { isRemoveModalOpen, toggleRemoveModal } = useModal(OPERATION.REMOVE);
  const { isAddModalOpen, toggleAddModal } = useModal(OPERATION.ADD);
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    for (const contact of selectedContacts) {
      const isContactInFavorite = isContactInFavorites(
        contact,
        favoriteContacts
      );
      if (isFavorite && isContactInFavorite) {
        showContactSuccess(CONTACT_ACTIONS.REMOVE_FROM_FAVORITES, contact);
        dispatch(removeContactFromFavorites(contact.id));
      } else if (!isFavorite && !isContactInFavorite) {
        dispatch(addContactToFavorites(contact));
        showContactSuccess(CONTACT_ACTIONS.ADD_TO_FAVORITES, contact);
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
  return (
    <ControlBar>
      <SelectBtn type="button" onClick={onSelectAllClick}>
        {getSelectButtonText(isAnyContactSelected)}
      </SelectBtn>
      <ChoseActionBlock>
        <span>Choose Action</span>{' '}
        <BtnList>
          <button
            type="button"
            aria-label="Add/remove selected contacts to favorites"
            onClick={toggleFavorite}
            disabled={!isAnyContactSelected}
          >
            {' '}
            {renderIcons(ICON_NAMES.FAVORITE, ICON_SIZES.MEDIUM_SMALL)}
          </button>
          <button
            type="button"
            aria-label="Remove selected contacts to recycle bin"
            onClick={toggleRemoveModal}
            disabled={!isAnyContactSelected}
          >
            {' '}
            {renderIcons(ICON_NAMES.DELETE, ICON_SIZES.MEDIUM_SMALL)}
          </button>
          <button
            type="button"
            aria-label="Add selected contacts to recycle to group"
            onClick={toggleAddModal}
            disabled={!isAnyContactSelected}
          >
            {renderIcons(ICON_NAMES.GROUP, ICON_SIZES.MEDIUM_SMALL)}
          </button>
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
};
