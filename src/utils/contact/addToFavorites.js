import { CONTACT_ACTIONS } from 'constants';
import { showContactSuccess } from 'utils/notifications';
import { addContactToFavorites } from 'redux/favorites';

export const addToFavorites = ({ contact, dispatch }) => {
  dispatch(addContactToFavorites(contact));
  showContactSuccess(CONTACT_ACTIONS.ADD_TO_FAVORITES, contact);
};
