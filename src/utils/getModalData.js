import { isArrayOfContacts, isContact } from 'utils';

export const getModalData = data => {
  const { name, number, contacts } = data ?? {};
  const isContactsArray = isArrayOfContacts(data);
  const isSingleContact =
    isContact(data) || (isContactsArray && data.length === 1);
  const isOneGroupSelected = !!(
    (!isContactsArray && data.length === 1) ||
    contacts
  );
  const areFewGroupsSelected = !isContactsArray && data.length > 1;

  const selectedGroupName =
    !isContactsArray && data.length === 1 ? data[0].name : name;
  const selectedContactName =
    isContactsArray && data.length === 1 ? data[0].name : name;
  const selectedContactNumber =
    isContactsArray && data.length === 1 ? data[0].number : number;

  return {
    isOneGroupSelected,
    areFewGroupsSelected,
    isContactsArray,
    isSingleContact,
    selectedGroupName,
    selectedContactName,
    selectedContactNumber,
  };
};
