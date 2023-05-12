import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoritesContacts } from 'redux/favorites/selectors';

import { CustomModal, LabelList, ModalInput } from 'shared';
import { selectGroups } from 'redux/groups';
import { ModalText, ModalContent } from 'shared/commonStyledComponents';
import { CONTACT_ACTIONS, ITEM_CATEGORIES } from 'constants';
import {
  checkGroupNameExistence,
  validateGroupData,
  handleSelectedContacts,
  createNewGroup,
  handleContactsInSelectedGroups,
} from 'utils';

export const MergeContactsModal = ({
  isOpen,
  onClose,
  selectedContacts,
  resetSelectedContacts,
}) => {
  const favoriteContacts = useSelector(selectFavoritesContacts);
  const chosenGroupNames = selectedContacts.map(item => item.name);
  const chosenGroupNumbers = selectedContacts.map(item => item.number);
  const groups = useSelector(selectGroups);
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

    // if (!(await validateGroupData(chosenGroupName))) return;
    // if (!checkGroupNameExistence(chosenGroupName, groups)) {
    //   const isSuccessfullyCreated = await createNewGroup({
    //     name: chosenGroupName,
    //     dispatch,
    //   });
    //   if (!isSuccessfullyCreated) return;
    // }
    // await handleSelectedContacts({
    //   selectedContacts,
    //   dispatch,
    //   onClose,
    // });
    const finalContact = {
      id: nanoid(),
      name: chosenContactName,
      number: chosenContactNumber,
    };
    console.log('finalContact: ', finalContact);

    const isContactByNameinFavorites = favoriteContacts
      .map(favorite => favorite.name)
      .includes(chosenContactName);

    const isContactByNumberinFavorites = favoriteContacts
      .map(favorite => favorite.number)
      .includes(chosenContactNumber);

    console.log('isContactByNameinFavorites: ', isContactByNameinFavorites);
    console.log('isContactByNumberinFavorites: ', isContactByNumberinFavorites);
    // await handleContactsInSelectedGroups({
    //   selectedContacts,
    //   chosenGroupName,
    //   dispatch,
    // });

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
