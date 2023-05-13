import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoritesContacts } from 'redux/favorites/selectors';

import { CustomModal, LabelList } from 'shared';
import { selectGroups } from 'redux/groups';
import { ModalText, ModalContent } from 'shared/commonStyledComponents';
import { CONTACT_ACTIONS, ITEM_CATEGORIES } from 'constants';
import {
  handleSelectedContacts,
  checkFewContactsInFavorites,
  addToFavorites,
  addContactToGroups,
  createFinalMergedContact,
  updateContactInStore,
} from 'utils';
import { showErrorMessage } from 'utils/notifications';

export const MergeContactsModal = ({
  isOpen,
  onClose,
  selectedContacts,
  resetSelectedContacts,
}) => {
  const favoriteContacts = useSelector(selectFavoritesContacts);
  const groups = useSelector(selectGroups);
  const selectedContactsNames = selectedContacts.map(({ name }) => name);
  const selectedContactsNumbers = selectedContacts.map(({ number }) => number);
  const dispatch = useDispatch();
  const [finalName, setFinalName] = useState(null);
  const [finalNumber, setFinalNumber] = useState(null);

  const handleNameSelect = name => {
    const updatedFinalName = finalName === name ? null : name;
    setFinalName(updatedFinalName);
  };
  const handleNumberSelect = number => {
    const updatedFinalNumber = finalNumber === number ? null : number;
    setFinalNumber(updatedFinalNumber);
  };
  const updateFinalContact = async finalContact => {
    await updateContactInStore({
      updatedContact: finalContact,
      dispatch,
    });
  };
  const mergeContactsAndUpdateLists = async (
    finalContact,
    isAnySelectedContactExistedInFavorites
  ) => {
    await handleSelectedContacts({
      finalName,
      selectedContacts,
      groups,
      dispatch,
      onClose,
      isFavorite: isAnySelectedContactExistedInFavorites,
    });

    if (isAnySelectedContactExistedInFavorites) {
      addToFavorites({ contact: finalContact, dispatch });
    }
    if (!!addContactToGroups.length) {
      addContactToGroups({
        contact: finalContact,
        selectedContacts,
        groups,
        dispatch,
      });
    }
  };
  const mergeContacts = async () => {
    try {
      const finalContact = createFinalMergedContact({
        selectedContacts,
        finalName,
        finalNumber,
      });
      const isAnySelectedContactExistedInFavorites =
        checkFewContactsInFavorites(selectedContacts, favoriteContacts);
      await updateFinalContact(finalContact);
      await mergeContactsAndUpdateLists(
        finalContact,
        isAnySelectedContactExistedInFavorites
      );
      onClose();
      resetSelectedContacts();
    } catch (error) {
      showErrorMessage();
    }
  };

  return (
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      action={!groups.length ? '' : CONTACT_ACTIONS.ADD_TO_GROUP}
      onConfirm={mergeContacts}
    >
      <ModalContent>
        <ModalText>Choose final contact name:</ModalText>
        <LabelList
          items={selectedContactsNames}
          handleItem={handleNameSelect}
          selectedItems={[finalName]}
          category={ITEM_CATEGORIES.GROUP}
        />
        <ModalText>Choose final contact number:</ModalText>
        <LabelList
          items={selectedContactsNumbers}
          handleItem={handleNumberSelect}
          selectedItems={[finalNumber]}
          category={ITEM_CATEGORIES.GROUP}
        />
      </ModalContent>
    </CustomModal>
  );
};

MergeContactsModal.propTypes = {
  resetSelectedContacts: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  selectedContacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
