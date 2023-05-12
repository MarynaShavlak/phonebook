export { getTotalQuantityString } from './getTotalQuantityString';
export { renderIcons } from './renderIcons';
export { getCurrentTime } from './getCurrentTime';
export { getRandomColors } from './getRandomColors';
export { getModalMessage } from './getModalMessage';
export { makeSlug } from './makeSlug';
export { removeExtraWhitespace } from './removeExtraWhitespace';
export { convertHyphenatedString } from './convertHyphenatedString';
export {
  isExistByName,
  isExistByNumber,
  checkForDuplicateContact,
} from './contact/checkContactExistence';
export {
  NAME_VALIDATION_SCHEMA,
  validateContactData,
  validateName,
  validateGroupData,
} from './contact/validation';
export * as Notifications from './notifications';
export { checkContactUpdateSpecialCases } from './contact/checkContactUpdate';
export { checkContactInSelected } from './contact/checkContactInSelected';
export { getExclusiveContact } from './contact/getExclusiveContact';
export { findGroupsForContact } from './contact/findGroupsForContact';
export { getContactById } from './contact/getContactById';
export { isContactInFavorites } from './contact/isContactInFavorites';
export { isArrayOfContacts } from './contact/isArrayOfContacts';
export { findContactGroupsChanges } from './contact/findContactGroupsChanges';
export { getContactNewData } from './contact/getContactNewData';
export { checkIfInRecycleBin } from './contact/checkIfInRecycleBin';
export { deleteContactAndCheckError } from './contact/deleteContactAndCheckError';
export { removeContactFromFavoritesIfNeeded } from './contact/removeContactFromFavoritesIfNeeded';
export { addContactToRecycleBinWithRemovalTime } from './contact/addContactToRecycleBinWithRemovalTime';
export { removeContactFromGroups } from './contact/removeContactFromGroups';
export { addToFavorites } from './contact/addToFavorites';
export { checkAndWarnForDuplicateContact } from './contact/checkAndWarnForDuplicateContact';
export { restoreDeletedContact } from './contact/restoreDeletedContact';
export { removeFromFavorites } from './contact/removeFromFavorites';
export { getUniqueContacts } from './contact/getUniqueContacts';
export { renderDropdownElement } from './renderDropdownElement';
export { getSelectButtonText } from './getSelectButtonText';
export { checkGroupNameExistence } from './group/checkGroupNameExistence';
export { validateAndCheckGroupName } from './group/validateAndCheckGroupName';
export { getContactsByGroupName } from './group/getContactsByGroupName';
export { getOriginalGroupName } from './group/getOriginalGroupName';
export { getAvailableToSelectContacts } from './group/getAvailableToSelectContacts';
export { createNewGroup } from './group/createNewGroup';
export { handleSelectedGroups } from './group/handleSelectedGroups';
export { handleContactsInSelectedGroups } from './group/handleContactsInSelectedGroups';
export { handleSelectedContacts } from './contact/handleSelectedContacts';
