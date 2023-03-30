import { toast } from 'react-toastify';

export function showInfoNotification(isNameExist, isNumberExist, contactToAdd) {
  if (isNameExist && isNumberExist) {
    return toast.info(
      `Ooops, contact with name ${contactToAdd.name} and number ${contactToAdd.number} is already exist in your phonebook`
    );
  }
  if (isNameExist) {
    return toast.info(
      `Ooops, contact with name ${contactToAdd.name} is already in exist your phonebook. Please, white another name`
    );
  }
  if (isNumberExist) {
    return toast.info(
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
    case 'restore':
      return toast.success(
        `You've just restored contact with name ${contact.name} and number ${contact.number}  in your contacts list`
      );
    case 'addToFavourites':
      return toast.success(
        `You've just added contact with name ${contact.name} and number ${contact.number}  to your favourites `
      );
    case 'removeFromFavourites':
      return toast.success(
        `You've just removed contact with name ${contact.name} and number ${contact.number}  from your favourites `
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
export function showWarnRecycleBinNotification(contact) {
  return toast.warn(
    `Contact with same name ${contact.name} and number ${contact.number} in already exist in recycle bin. We left only ONE `
  );
}
export function showInfoRecycleBinNotification(contact) {
  return toast.info(
    `You've just delete contact with name ${contact.name} and number ${contact.number} from recycle bin`
  );
}

export function showFailureNotification() {
  return toast.error(
    `You cannot change both name and number. To make full change, delete this contact and create new with correct info.`
  );
}
export function showAuthErrorNotification() {
  return toast.error(
    `Your email is invaild. PLease, check your email and try again`
  );
}
