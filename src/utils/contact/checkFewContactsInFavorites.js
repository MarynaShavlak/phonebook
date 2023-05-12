export const checkFewContactsInFavorites = (
  selectedContacts,
  favoriteContacts
) => {
  return selectedContacts.some(selectedContact =>
    favoriteContacts.some(
      favoriteContact => selectedContact.id === favoriteContact.id
    )
  );
};
