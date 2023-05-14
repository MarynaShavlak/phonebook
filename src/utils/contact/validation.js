import * as Yup from 'yup';
import { isValidPhoneNumber } from 'react-phone-number-input';

import { removeExtraWhitespace } from 'utils';
import {
  showContactValidationError,
  showNewContactNameError,
  showNewContactNumberError,
  showGroupValidationError,
  showNewGroupNameError,
} from 'utils/notifications';

export const NAME_VALIDATION_SCHEMA = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(40, 'Name cannot exceed 40 characters')
    .trim(),
});

export const validateContactData = async ({ name, number }) => {
  const normalizedContactName = removeExtraWhitespace(name);
  if (!normalizedContactName.length && !isValidPhoneNumber(number)) {
    showContactValidationError();
    return;
  }

  try {
    await NAME_VALIDATION_SCHEMA.validate({ name });
  } catch (error) {
    showNewContactNameError(error.message);
    return;
  }
  if (!isValidPhoneNumber(number)) {
    showNewContactNumberError();
    return;
  }
  return true;
};

export const validateGroupData = async name => {
  const normalizedContactName = removeExtraWhitespace(name);
  if (!normalizedContactName.length) {
    showGroupValidationError();
    return;
  }

  try {
    await NAME_VALIDATION_SCHEMA.validate({ name });
  } catch (error) {
    showNewGroupNameError(error.message);
    return;
  }
  return true;
};

export const validateName = async name => {
  try {
    await NAME_VALIDATION_SCHEMA.validate({ name });
    return null;
  } catch (error) {
    return error.message;
  }
};
