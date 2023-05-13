import { addContactToFavorites } from 'redux/favorites';

export const addToFavorites = ({ contact, dispatch }) => {
  console.log('contact: ', contact);
  dispatch(addContactToFavorites(contact));
};
