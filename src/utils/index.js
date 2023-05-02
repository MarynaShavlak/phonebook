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
export { getExclusiveContact } from './contact/getExclusiveContact';
export { findGroupsForContact } from './contact/findGroupsForContact';
export { getContactById } from './contact/getContactById';
export { isContactInFavorites } from './contact/isContactInFavorites';
export { findContactGroupsChanges } from './contact/findContactGroupsChanges';
export { getContactNewData } from './contact/getContactNewData';
export { renderDropdownElement } from './renderDropdownElement';
export { checkGroupNameExistence } from './group/checkGroupNameExistence';
export { validateAndCheckGroupName } from './group/validateAndCheckGroupName';
export { getContactsByGroupName } from './group/getContactsByGroupName';
export { getOriginalGroupName } from './group/getOriginalGroupName';
export { getAvailableToSelectContacts } from './group/getAvailableToSelectContacts';
