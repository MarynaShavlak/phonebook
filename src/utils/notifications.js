import { toast } from 'react-toastify';

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

export function showContactExistWarn(prevContact, updatedContact) {
  const nameExists = prevContact['name'] !== updatedContact['name'];
  const numberExists = prevContact['number'] !== updatedContact['number'];

  if (nameExists && numberExists) {
    const message = `Oops, a contact with name ${updatedContact['name']} and number ${updatedContact['number']} already exists in your phonebook.`;
    return showMessage('warning', message);
  } else if (nameExists) {
    const message = `Oops, a contact with name ${updatedContact['name']} already exists in your phonebook. Please enter a different name.`;
    return showMessage('warning', message);
  } else if (numberExists) {
    const message = `Oops, a contact with number ${updatedContact['number']} already exists in your phonebook. Please enter a different number.`;
    return showMessage('warning', message);
  }
}

export function showContactSuccess(operation, contact) {
  const messages = {
    add: `You've just added contact with name ${contact.name} and number ${contact.number}  to your contacts list`,
    remove: `You've just removed contact with name ${contact.name} and number ${contact.number}  from your contacts list to recycle bin`,
    restore: `You've just restored contact with name ${contact.name} and number ${contact.number}  in your contacts list`,
    addToFavorites: `You've just added contact with name ${contact.name} and number ${contact.number}  to your favorites `,
    removeFromFavorites: `You've just removed contact with name ${contact.name} and number ${contact.number}  from your favorites `,
  };
  const message =
    messages[operation] ||
    `Type of field with operation ${operation} is not found`;

  return showMessage('success', message);
}

export function showNoChangesMessage() {
  return showMessage(
    'info',
    `There are no changes. You didn't change either contact name or phone number`
  );
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
  const message = `Contact with same name ${contact.name} and number ${contact.number} in already exist in recycle bin. We left only ONE `;
  return showMessage('warning', message);
}

export function showRecyclebinInfo(contact) {
  const message = `You've just delete contact with name ${contact.name} and number ${contact.number} from recycle bin`;
  return showMessage('info', message);
}

export function showGroupSuccess(groupName) {
  const message = `You've just add group with name "${groupName}" `;
  return showMessage('success', message);
}
export function showGroupRenameSuccess({ oldGroupName, newGroupName }) {
  const message = `The group name has been changed from "${oldGroupName}" to "${newGroupName}"`;
  return showMessage('success', message);
}

export function showGroupInfo(groupName) {
  const message = `You've just delete group with name "${groupName}" `;
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
  const message = `The contact with name "${contact.name}" and number "${contact.number}" has been deleted from group "${groupName}" `;
  return showMessage('info', message);
}
