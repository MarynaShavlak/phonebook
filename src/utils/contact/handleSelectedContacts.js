import {
  deleteContactAndCheckError,
  removeContactFromFavoritesIfNeeded,
  removeContactFromGroups,
} from 'utils';

export const handleSelectedContacts = async ({
  finalName,
  selectedContacts,
  groups,
  dispatch,
  onClose,
  isFavorite,
}) => {
  const contactsToDelete = selectedContacts.filter(
    contact => contact.name !== finalName
  );
  const contactDeleteOperations = contactsToDelete.map(contact =>
    deleteContactAndCheckError({
      contactId: contact.id,
      dispatch,
      toggleModal: onClose,
    })
  );
  const contactOperations = selectedContacts.map(contact => {
    return Promise.all([
      removeContactFromFavoritesIfNeeded({ contact, isFavorite, dispatch }),
      removeContactFromGroups({ contact, groups, dispatch }),
    ]);
  });

  await Promise.all(contactDeleteOperations);
  await Promise.all(contactOperations);
};
