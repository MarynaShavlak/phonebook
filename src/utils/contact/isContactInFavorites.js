export const isContactInFavorites = (contact, favoriteContacts) => {
  return favoriteContacts.map(favorite => favorite.id).includes(contact?.id);
};
