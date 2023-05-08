import { removeContactFromFavorites } from 'redux/favorites';
export const removeContactFromFavoritesIfNeeded = ({
  contact,
  isFavorite,
  dispatch,
}) => {
  if (isFavorite) {
    dispatch(removeContactFromFavorites(contact.id));
  }
};
