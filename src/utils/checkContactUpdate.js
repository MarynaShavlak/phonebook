import {
  showEditContactFailure,
  showNoUpdateMessage,
} from 'utils/notifications';

import { removeExtraWhitespace } from 'utils';

export const checkContactUpdateSpecialCases = ({ contact, name, number }) => {
  const isNameUpdated = contact.name !== removeExtraWhitespace(name);
  const isNumberUpdated = contact.number !== number;
  if (isNameUpdated && isNumberUpdated) {
    showEditContactFailure();
    return 'both';
  }

  if (!isNameUpdated && !isNumberUpdated) {
    showNoUpdateMessage();
    return 'none';
  }
  return false;
};
