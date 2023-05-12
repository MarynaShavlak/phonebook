import { CONTACT_ACTIONS } from 'constants';
import { showContactSuccess } from 'utils/notifications';
import { addContactToFavorites } from 'redux/favorites';

export const addToFavorites = ({ contact, dispatch }) => {
  console.log('contact: ', contact);
  dispatch(addContactToFavorites(contact));
  // showContactSuccess(CONTACT_ACTIONS.ADD_TO_FAVORITES, contact);
};
