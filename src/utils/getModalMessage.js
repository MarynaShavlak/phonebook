import {
  CONTACT_ACTIONS,
  GROUP_ACTIONS,
  ITEM_CATEGORIES,
  ROUTES,
} from 'constants';
import { ModalText, ModalWarning } from 'shared/commonStyledComponents';
import { isArrayOfContacts, getTotalQuantityString } from 'utils';

export const getModalMessage = ({ action, data }) => {
  console.log('action: ', action);
  const { name, number, contacts } = data ?? {};

  const isContactsSelected = isArrayOfContacts(data);
  const isOneGroupSelected = !!(
    (!isContactsSelected && data.length === 1) ||
    contacts
  );
  const areFewGroupsSelected = !isContactsSelected && data.length > 1;
  console.log('areFewGroupsSelected: ', areFewGroupsSelected);
  console.log('isOneGroupSelected: ', isOneGroupSelected);

  const selectedName =
    !isContactsSelected && data.length === 1 ? data[0].name : name;

  if (isOneGroupSelected) {
    return (
      <>
        <ModalText>
          Are you absolutely certain that you wish to delete the{' '}
          <b>{selectedName}</b> group?
        </ModalText>
        <ModalWarning>
          Please be aware that once this action is taken, the group cannot be
          restored.
        </ModalWarning>
      </>
    );
  } else if (!isContactsSelected && data.length > 1) {
    return (
      <>
        <ModalText>
          Are you certain that you wish to delete &nbsp;
          <b>{getTotalQuantityString(data, ROUTES.GROUPS)}</b>
          &nbsp;?
        </ModalText>
        <ModalWarning>
          Please be aware that once this action is taken, the groups cannot be
          restored.
        </ModalWarning>
      </>
    );
  } else if (isContactsSelected) {
    return (
      <>
        <ModalText>
          Are you certain that you wish to move &nbsp;
          <b>{getTotalQuantityString(data, ITEM_CATEGORIES.CONTACT)}</b>
          &nbsp;to the recycle bin?
        </ModalText>
        <ModalWarning>
          Please note that it will be possible to restore contacts from the
          recycle bin.
        </ModalWarning>
      </>
    );
  } else {
    switch (action) {
      case CONTACT_ACTIONS.REMOVE_TO_RECYCLE_BIN:
        return (
          <>
            <ModalText>
              Are you certain that you wish to move the contact &nbsp;
              <b>{name}</b>&nbsp;(<b>{number}</b>&nbsp;) to the recycle bin?
            </ModalText>
            <ModalWarning>
              Please note that it will be possible to restore this contact from
              the recycle bin.
            </ModalWarning>
          </>
        );
      case CONTACT_ACTIONS.RESTORE:
        return (
          <>
            <ModalText>
              Do you confirm that you wish to add contact &nbsp;<b>{name}</b>
              &nbsp;(
              <b>{number}</b>)&nbsp; back to your list ?
            </ModalText>
          </>
        );
      case CONTACT_ACTIONS.DELETE:
        return (
          <>
            <ModalText>
              Are you sure you want to delete contact contact &nbsp;
              <b>{name}</b>&nbsp;(<b>{number}</b>)&nbsp; from recycle bin?
            </ModalText>
            <ModalWarning>
              Please be aware that once this action is taken, the contact cannot
              be restored.
            </ModalWarning>
          </>
        );
      case CONTACT_ACTIONS.DELETE_ALL:
        return (
          <>
            <ModalText>Are you sure you want to clear recycle bin?</ModalText>
            <ModalWarning>
              Please be aware that once this action is taken, the contacts in
              recycle bin cannot be restored.
            </ModalWarning>
          </>
        );
      default:
        return null;
    }
  }
};
