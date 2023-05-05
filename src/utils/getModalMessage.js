import { CONTACT_ACTIONS, GROUP_ACTIONS } from 'constants';
import { ModalText, ModalWarning } from 'shared/commonStyledComponents';

export const getModalMessage = ({ action, data }) => {
  const { name, number, contacts } = data;

  if (contacts) {
    if (action === GROUP_ACTIONS.DELETE) {
      return (
        <>
          <ModalText>
            Are you absolutely certain that you wish to delete the <b>{name}</b>{' '}
            group?
          </ModalText>
          <ModalWarning>
            Please be aware that once this action is taken, the group cannot be
            restored.
          </ModalWarning>
        </>
      );
    }
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
      default:
        return null;
    }
  }
};
