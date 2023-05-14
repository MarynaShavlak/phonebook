import { addContactToFavorites } from 'redux/favorites';

export const addToFavorites = ({ contact, dispatch }) => {
  dispatch(addContactToFavorites(contact));
};
