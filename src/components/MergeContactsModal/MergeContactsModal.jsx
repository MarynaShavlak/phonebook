import React, { useState, useEffect } from 'react';
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
  findSelectedContactsGroups,
  addToFavorites,
  addContactToGroups,
} from 'utils';
import { addContact, selectContacts } from 'redux/contacts';

export const MergeContactsModal = ({
  isOpen,
  onClose,
  selectedContacts,
  resetSelectedContacts,
}) => {
  const favoriteContacts = useSelector(selectFavoritesContacts);
  const groups = useSelector(selectGroups);
  const allContacts = useSelector(selectContacts);

  const isAnySelectedContactExistedInFavorites = checkFewContactsInFavorites(
    selectedContacts,
    favoriteContacts
  );

  const selectedContactsGroups = findSelectedContactsGroups(
    selectedContacts,
    groups
  );

  const chosenGroupNames = selectedContacts.map(item => item.name);
  const chosenGroupNumbers = selectedContacts.map(item => item.number);
  const dispatch = useDispatch();
  const [chosenName, setChosenName] = useState([]);
  const [chosenNumber, setChosenNumber] = useState([]);

  const handleNameSelect = name => {
    const isAlreadySelected = chosenName.includes(name);
    const newChosenName = isAlreadySelected ? [] : [name];
    setChosenName(newChosenName);
  };
  const handleNumberSelect = number => {
    const isAlreadySelected = chosenNumber.includes(number);
    const newChosenNumber = isAlreadySelected ? [] : [number];
    setChosenNumber(newChosenNumber);
  };

  const handleAdddContactToGroupList = async () => {
    const chosenContactName = chosenName[0];
    const chosenContactNumber = chosenNumber[0];

    const finalContact = {
      name: chosenContactName,
      number: chosenContactNumber,
    };

    await handleSelectedContacts({
      chosenContactName,
      selectedContacts,
      groups,
      dispatch,
      onClose,
      isFavorite: isAnySelectedContactExistedInFavorites,
    });
    await dispatch(addContact(finalContact));
    // const mergedContact = allContacts.filter(
    //   contact => contact.name === chosenContactName
    // )[0];

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

    onClose();
    resetSelectedContacts();
  };

  return (
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      action={!groups.length ? '' : CONTACT_ACTIONS.ADD_TO_GROUP}
      onConfirm={handleAdddContactToGroupList}
    >
      <ModalContent>
        <ModalText>Choose final contact name:</ModalText>
        <LabelList
          items={chosenGroupNames}
          handleItem={handleNameSelect}
          selectedItems={chosenName}
          category={ITEM_CATEGORIES.GROUP}
        />
        <ModalText>Choose final contact number:</ModalText>
        <LabelList
          items={chosenGroupNumbers}
          handleItem={handleNumberSelect}
          selectedItems={chosenNumber}
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
