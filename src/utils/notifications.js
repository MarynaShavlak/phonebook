import { toast } from 'react-toastify';

export function showInfoNotification(isNameExist, isNumberExist, contactToAdd) {
  if (isNameExist && isNumberExist) {
    toast.info(
      `Ooops, contact with name ${contactToAdd.name} and number ${contactToAdd.number} is already exist in your phonebook`
    );
  }
  if (isNameExist) {
    toast.info(
      `Ooops, contact with name ${contactToAdd.name} is already in exist your phonebook. Please, white another name`
    );
  }
  if (isNumberExist) {
    toast.info(
      `Ooops, contact with number ${contactToAdd.number} is already exist in your phonebook. Please, white another number`
    );
  }
}

export function showSuccessNotification(operation, contact) {
  switch (operation) {
    case 'add':
      return toast.success(
        `You've just added contact with name ${contact.name} and number ${contact.number}  to your contacts list`
      );
    case 'delete':
      return toast.success(
        `You've just removed contact with name ${contact.name} and number ${contact.number}  from your contacts list to recycle bin`
      );
    default:
      return console.warn(
        `Type of field with operation  ${operation} is not found`
      );
  }
}

export function showWarnNotification() {
  return toast.warn(
    `There are no changes. You didn't change either contact name or phone number`
  );
}

export function showFailureNotification() {
  return toast.error(
    `You cannot change both name and number. To make full change, delete this contact and create new with correct info.`
  );
}
