import { toast } from 'react-toastify';
import { CONTACT_ACTIONS } from 'constants';
const { success, warning, error, info } = toast;

const TOAST_TYPES = {
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
  INFO: 'info',
};

const toastFuncs = {
  success,
  warning,
  error,
  info,
};

function showMessage(type, message) {
  const toastFunc = toastFuncs[type] || toastFuncs.info;
  return toastFunc(message);
}

function getMessage(operation, contact) {
  const messages = {
    [CONTACT_ACTIONS.ADD]: `You've just added contact ${contact.name} (${contact.number}) to your contacts list`,
    [CONTACT_ACTIONS.REMOVE_TO_RECYCLE_BIN]: `You've just removed contact ${contact.name} (${contact.number}) from your contacts list to recycle bin`,
    [CONTACT_ACTIONS.RESTORE]: `You've just restored contact ${contact.name} (${contact.number}) in your contacts list`,
    [CONTACT_ACTIONS.ADD_TO_FAVORITES]: `You've just added contact ${contact.name} (${contact.number}) to your favorites`,
    [CONTACT_ACTIONS.REMOVE_FROM_FAVORITES]: `You've just removed contact ${contact.name} (${contact.number}) from your favorites`,
  };
  return (
    messages[operation] ||
    `Type of field with operation ${operation} is not found`
  );
}

export function showContactExistWarn({ isNameExist, isNumberExist, contact }) {
  const { name, number } = contact;
  if (isNameExist && isNumberExist) {
    const message = `Oops, a contact  ${name} (${number}) already exists in your phonebook.`;
    return showMessage(TOAST_TYPES.WARNING, message);
  } else if (isNameExist) {
    const message = `Oops, a contact with name ${name} already exists in your phonebook. Please enter a different name.`;
    return showMessage(TOAST_TYPES.WARNING, message);
  } else if (isNumberExist) {
    const message = `Oops, a contact with number ${number} already exists in your phonebook. Please enter a different number.`;
    return showMessage(TOAST_TYPES.WARNING, message);
  }
}

export function showContactSuccess(operation, contact) {
  const message = getMessage(operation, contact);
  return showMessage(TOAST_TYPES.SUCCESS, message);
}

export function showNoUpdateMessage() {
  return showMessage(
    TOAST_TYPES.INFO,
    `There are no changes. You didn't change either contact name or phone number`
  );
}
export function showNoUpdateGroupMessage() {
  return showMessage(
    TOAST_TYPES.INFO,
    `No changes. You didn't rename the group`
  );
}

export function showEditContactFailure() {
  return showMessage(
    TOAST_TYPES.ERROR,
    `You cannot change both name and number. To make full change, delete this contact and create new with correct info.`
  );
}

export function showEditContactSuccess(prevContact, updatedContact) {
  const { name, number } = prevContact;
  const { name: updatedName, number: updatedNumber } = updatedContact;
  const message =
    name !== updatedName
      ? `The name of the contact (name: ${name}, number: ${number}) was changed to "${updatedName}".`
      : `The number of the contact (name: ${name}, number: ${number}) was changed to "${updatedNumber}".`;
  return showMessage(TOAST_TYPES.SUCCESS, message);
}

export function showRecyclebinWarn(contact) {
  const message = `Contact with same name ${contact.name} and number ${contact.number} in already exist in recycle bin. `;
  return showMessage(TOAST_TYPES.WARNING, message);
}

export function showRecyclebinInfo(contact) {
  const message = `You've just deleted contact ${contact.name} (${contact.number}) from recycle bin`;
  return showMessage(TOAST_TYPES.INFO, message);
}

export function showGroupSuccess(groupName) {
  const message = `You've just added group with name "${groupName}" `;
  return showMessage(TOAST_TYPES.SUCCESS, message);
}
export function showGroupRenameSuccess({ oldGroupName, newGroupName }) {
  const message = `The group name has been changed from "${oldGroupName}" to "${newGroupName}"`;
  return showMessage(TOAST_TYPES.SUCCESS, message);
}

export function showGroupInfo(groupName) {
  const message = `You've just deleted group with name "${groupName}" `;
  return showMessage(TOAST_TYPES.INFO, message);
}

export function showGroupWarn(groupName) {
  const message = `Group with name "${groupName}"  in already exist`;
  return showMessage(TOAST_TYPES.WARNING, message);
}

export function showAuthError() {
  return showMessage(
    TOAST_TYPES.ERROR,
    `Your email is invalid. Please check your email and try again.`
  );
}

export function showAddToGroups(message) {
  return showMessage(TOAST_TYPES.INFO, message);
}
export function showDeleteFromGroup({ groupName, contact }) {
  const message = `The contact ${contact.name} (${contact.number}) has been deleted from group "${groupName}" `;
  return showMessage(TOAST_TYPES.INFO, message);
}

export function showErrorMessage() {
  return showMessage(
    TOAST_TYPES.ERROR,
    'Oohps, something has gone wrong. Try again, please.'
  );
}
export function showContactValidationError() {
  return showMessage(
    TOAST_TYPES.ERROR,
    'Please ensure that you provide the accurate name and contact number.'
  );
}
export function showNewContactNameError(message) {
  return showMessage(TOAST_TYPES.ERROR, message);
}
export function showNewContactNumberError() {
  return showMessage(
    TOAST_TYPES.ERROR,
    'Sorry, it looks like the phone number you entered is incorrect. Please, check length and format for your country.'
  );
}

export function showGroupValidationError() {
  return showMessage(
    TOAST_TYPES.ERROR,
    'Please ensure that you provide the accurate group name.'
  );
}

export function showNewGroupNameError(message) {
  return showMessage(TOAST_TYPES.ERROR, message);
}

export function showGroupManageContactsSuccess(groupName, contactsInGroup) {
  const names = contactsInGroup.map(contact => contact.name).join(', ');
  const message = !!contactsInGroup.length
    ? `Now the group "${groupName}" includes the following contacts: ${names}`
    : `There are no contacts in the group "${groupName}" now`;
  return showMessage(TOAST_TYPES.SUCCESS, message);
}
