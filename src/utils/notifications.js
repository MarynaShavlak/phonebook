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

export function showContactWarn(isNameExist, isNumberExist, contactToAdd) {
  const message =
    isNameExist && isNumberExist
      ? `Ooops, contact with name ${contactToAdd.name} and number ${contactToAdd.number} is already exist in your phonebook`
      : isNameExist
      ? `Ooops, contact with name ${contactToAdd.name} is already in exist your phonebook. Please, white another name`
      : isNumberExist
      ? `Ooops, contact with number ${contactToAdd.number} is already exist in your phonebook. Please, white another number`
      : '';

  return showMessage('warning', message);
}

export function showContactSuccess(operation, contact) {
  const messages = {
    add: `You've just added contact with name ${contact.name} and number ${contact.number}  to your contacts list`,
    delete: `You've just removed contact with name ${contact.name} and number ${contact.number}  from your contacts list to recycle bin`,
    restore: `You've just restored contact with name ${contact.name} and number ${contact.number}  in your contacts list`,
    addToFavorites: `You've just added contact with name ${contact.name} and number ${contact.number}  to your favorites `,
    removeFromFavorites: `You've just removed contact with name ${contact.name} and number ${contact.number}  from your favorites `,
  };
  const message =
    messages[operation] ||
    `Type of field with operation ${operation} is not found`;

  return showMessage('success', message);
}

export function showContactInfo() {
  return showMessage(
    'info',
    `There are no changes. You didn't change either contact name or phone number`
  );
}

export function showContactFailure() {
  return showMessage(
    'error',
    `You cannot change both name and number. To make full change, delete this contact and create new with correct info.`
  );
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
