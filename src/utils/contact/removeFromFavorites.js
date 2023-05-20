import { removeContactFromFavorites } from 'redux/favorites';

export const removeFromFavorites = ({ contact, dispatch }) => {
  dispatch(removeContactFromFavorites(contact.id));
};
