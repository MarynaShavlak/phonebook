import { toast } from 'react-toastify';
import { CONTACT_ACTIONS } from 'constants';

function showMessage(type, message) {
  switch (type) {
    case 'success':
      return toast.success(message);
    case 'warning':
      return toast.warning(message);
    case 'error':
      return toast.error(message);
    case 'info':
    default:
      return toast.info(message);
  }
}

export function showContactExistWarn({ isNameExist, isNumberExist, contact }) {
  if (isNameExist && isNumberExist) {
    const message = `Oops, a contact  ${contact.name} (${contact.number}) already exists in your phonebook.`;
    return showMessage('warning', message);
  } else if (isNameExist) {
    const message = `Oops, a contact with name ${contact.name} already exists in your phonebook. Please enter a different name.`;
    return showMessage('warning', message);
  } else if (isNumberExist) {
    const message = `Oops, a contact with number ${contact.number} already exists in your phonebook. Please enter a different number.`;
    return showMessage('warning', message);
  }
}

export function showContactSuccess(operation, contact) {
  const messages = {
    add: `You've just added contact ${contact.name} (${contact.number}) to your contacts list`,
    [CONTACT_ACTIONS.REMOVE_TO_RECYCLE_BIN]: `You've just removed contact ${contact.name} (${contact.number}) from your contacts list to recycle bin`,
    [CONTACT_ACTIONS.RESTORE]: `You've just restored contact ${contact.name} (${contact.number}) in your contacts list`,
    [CONTACT_ACTIONS.ADD_TO_FAVORITES]: `You've just added contact ${contact.name} (${contact.number}) to your favorites `,
    [CONTACT_ACTIONS.REMOVE_FROM_FAVORITES]: `You've just removed contact ${contact.name} (${contact.number}) from your favorites `,
  };
  const message =
    messages[operation] ||
    `Type of field with operation ${operation} is not found`;

  return showMessage('success', message);
}

export function showNoUpdateMessage() {
  return showMessage(
    'info',
    `There are no changes. You didn't change either contact name or phone number`
  );
}
export function showNoUpdateGroupMessage() {
  return showMessage('info', `No changes. You didn't rename the group`);
}

export function showEditContactFailure() {
  return showMessage(
    'error',
    `You cannot change both name and number. To make full change, delete this contact and create new with correct info.`
  );
}

export function showEditContactSuccess(prevContact, updatedContact) {
  let message;
  if (prevContact.name !== updatedContact.name) {
    message = `The name of the contact (name: ${prevContact.name}, number: ${prevContact.number}) was changed to "${updatedContact.name}".`;
  } else if (prevContact.number !== updatedContact.number) {
    message = `The number of the contact (name: ${prevContact.name}, number: ${prevContact.number}) was changed to "${updatedContact.number}".`;
  }
  return showMessage('success', message);
}

export function showRecyclebinWarn(contact) {
  const message = `Contact with same name ${contact.name} and number ${contact.number} in already exist in recycle bin. `;
  return showMessage('warning', message);
}

export function showRecyclebinInfo(contact) {
  const message = `You've just deleted contact ${contact.name} (${contact.number}) from recycle bin`;
  return showMessage('info', message);
}

export function showGroupSuccess(groupName) {
  const message = `You've just added group with name "${groupName}" `;
  return showMessage('success', message);
}
export function showGroupRenameSuccess({ oldGroupName, newGroupName }) {
  const message = `The group name has been changed from "${oldGroupName}" to "${newGroupName}"`;
  return showMessage('success', message);
}

export function showGroupInfo(groupName) {
  const message = `You've just deleted group with name "${groupName}" `;
  return showMessage('info', message);
}

export function showGroupWarn(groupName) {
  const message = `Group with name "${groupName}"  in already exist`;
  return showMessage('warning', message);
}

export function showAuthError() {
  return showMessage(
    'error',
    `Your email is invalid. Please check your email and try again.`
  );
}

export function showAddToGroups(message) {
  return showMessage('info', message);
}
export function showDeleteFromGroup({ groupName, contact }) {
  const message = `The contact ${contact.name} (${contact.number}) has been deleted from group "${groupName}" `;
  return showMessage('info', message);
}

export function showErrorMessage() {
  return showMessage(
    'error',
    'Oohps, something has gone wrong. Try again, please.'
  );
}
export function showContactValidationError() {
  return showMessage(
    'error',
    'Please ensure that you provide the accurate name and contact number.'
  );
}
export function showNewContactNameError(message) {
  return showMessage('error', message);
}
export function showNewContactNumberError() {
  return showMessage(
    'error',
    'Sorry, it looks like the phone number you entered is incorrect. Please, check length and format for your country.'
  );
}

export function showGroupValidationError() {
  return showMessage(
    'error',
    'Please ensure that you provide the accurate group name.'
  );
}

export function showNewGroupNameError(message) {
  return showMessage('error', message);
}

export function showGroupManageContactsSuccess(groupName, contactsInGroup) {
  const names = contactsInGroup.map(contact => contact.name).join(', ');
  const message = !!contactsInGroup.length
    ? `Now the group "${groupName}" includes the following contacts: ${names}`
    : `There are no contacts in the group "${groupName}" now`;
  return showMessage('success', message);
}
