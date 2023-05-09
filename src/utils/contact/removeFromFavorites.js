import { CONTACT_ACTIONS } from 'constants';
import { showContactSuccess } from 'utils/notifications';
import { removeContactFromFavorites } from 'redux/favorites';

export const removeFromFavorites = ({ contact, dispatch }) => {
  showContactSuccess(CONTACT_ACTIONS.REMOVE_FROM_FAVORITES, contact);
  dispatch(removeContactFromFavorites(contact.id));
};
