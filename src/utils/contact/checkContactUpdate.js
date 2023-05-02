import {
  showEditContactFailure,
  showNoUpdateMessage,
} from 'utils/notifications';

import { removeExtraWhitespace } from 'utils';

export const checkContactUpdateSpecialCases = ({ contact, updatedContact }) => {
  const isNameUpdated =
    contact.name !== removeExtraWhitespace(updatedContact.name);
  const isNumberUpdated = contact.number !== updatedContact.number;
  if (isNameUpdated && isNumberUpdated) {
    showEditContactFailure();
    return 'bothNameAndNumberChange';
  }

  if (!isNameUpdated && !isNumberUpdated) {
    showNoUpdateMessage();
    return 'bothNameAndNumberChange';
  }
  return false;
};
