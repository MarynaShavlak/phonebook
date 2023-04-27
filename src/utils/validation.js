import * as Yup from 'yup';
import { isValidPhoneNumber } from 'react-phone-number-input';

import { Notifications, removeExtraWhitespace } from 'utils';

export const CONTACT_NAME_VALIDATION_SCHEMA = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(20, 'Name cannot exceed 20 characters')
    .trim()
    .matches(
      /^[a-zA-Zа-яА-ЯґҐєЄіІїЇ]+(([' -][a-zA-Zа-яА-ЯґҐєЄіІїЇ ])?[a-zA-Zа-яА-ЯґҐєЄіІїЇ]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    ),
});

export const validateContactData = async ({ name, number }) => {
  const normalizedContactName = removeExtraWhitespace(name);
  if (!normalizedContactName.length && !isValidPhoneNumber(number)) {
    Notifications.showContactValidationError();
    return;
  }

  try {
    await CONTACT_NAME_VALIDATION_SCHEMA.validate({ name });
  } catch (error) {
    Notifications.showNewContactNameError(error.message);
    return;
  }
  if (!isValidPhoneNumber(number)) {
    Notifications.showNewContactNumberError();
    return;
  }
  return true;
};
