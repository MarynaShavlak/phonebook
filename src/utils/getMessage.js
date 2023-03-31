import { CONTACT_ACTIONS } from 'constants';

export const getMessage = ({ action, contact }) => {
  switch (action) {
    case `${CONTACT_ACTIONS.REMOVE_TO_RECYCLE_BIN}`:
      return (
        <>
          <span>Are you sure you want to remove contact with name </span>
          <b>{contact.name}</b>
          <span> and number </span>
          <b>{contact.number}</b>
          <span> to recycle bin?</span>
          <p className="confirmation__message">
            It will be possible to restore this contact from recycle bin.
          </p>
        </>
      );
    case `${CONTACT_ACTIONS.RESTORE}`:
      return (
        <>
          <span>Are you sure you want to restore contact with name </span>
          <b>{contact.name}</b>
          <span> and number </span>
          <b>{contact.number}</b>
          <span> in your contacts list?</span>
        </>
      );
    case `${CONTACT_ACTIONS.DELETE}`:
      return (
        <>
          <span>Are you sure you want to delete contact with name </span>
          <b>{contact.name}</b>
          <span> and number </span>
          <b>{contact.number}</b>
          <span> from recycle bin?</span>
          <p className="confirmation__message">
            It will be impossible to restore this contact.
          </p>
        </>
      );
    default:
      return null;
  }
};
