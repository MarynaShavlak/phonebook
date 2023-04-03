import { CONTACT_ACTIONS, GROUP_ACTIONS } from 'constants';

export const getModalMessage = ({ action, data }) => {
  const { name, number, contacts } = data;

  if (contacts) {
    if (action === GROUP_ACTIONS.DELETE) {
      return (
        <>
          <p>
            Are you sure you want to delete group with name <b>{name}</b>?
          </p>
          <p className="confirmation__message">
            It will be impossible to restore this group
          </p>
        </>
      );
    }
  } else {
    switch (action) {
      case CONTACT_ACTIONS.REMOVE_TO_RECYCLE_BIN:
        return (
          <>
            <p>
              Are you sure you want to remove contact with name&nbsp;
              <b>{name}</b>&nbsp; and number&nbsp;
              <b>{number}</b>&nbsp; to recycle bin?
            </p>
            <p className="confirmation__message">
              It will be possible to restore this contact from recycle bin.
            </p>
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
