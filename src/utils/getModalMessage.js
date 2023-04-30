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
            <p>
              Are you sure you want to restore contact with name&nbsp;
              <b>{name}</b>&nbsp; and number&nbsp;
              <b>{number}</b>&nbsp; in your contacts list?
            </p>
          </>
        );
      case CONTACT_ACTIONS.DELETE:
        return (
          <>
            <p>
              Are you sure you want to delete contact with name&nbsp;
              <b>{name}</b>&nbsp; and number&nbsp;
              <b>{number}</b>&nbsp; from recycle bin?
            </p>
            <p className="confirmation__message">
              It will be impossible to restore this {name}
            </p>
          </>
        );
      default:
        return null;
    }
  }
};
