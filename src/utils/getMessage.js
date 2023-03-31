import { CONTACT_ACTIONS, GROUP_ACTIONS } from 'constants';

export const getMessage = ({ action, data }) => {
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

// import { CONTACT_ACTIONS, GROUP_ACTIONS } from 'constants';

// export const getMessage = ({ action, data }) => {
//   const isGroup = data.hasOwnProperty('contacts');
//   console.log('isGroup : ', isGroup);
//   if (!isGroup) {
//     switch (action) {
//       case `${CONTACT_ACTIONS.REMOVE_TO_RECYCLE_BIN}`:
//         return (
//           <>
//             <span>Are you sure you want to remove contact with name </span>
//             <b>{data.name}</b>
//             <span> and number </span>
//             <b>{data.number}</b>
//             <span> to recycle bin?</span>
//             <p className="confirmation__message">
//               It will be possible to restore this contact from recycle bin.
//             </p>
//           </>
//         );
//       case `${CONTACT_ACTIONS.RESTORE}`:
//         return (
//           <>
//             <span>Are you sure you want to restore contact with name </span>
//             <b>{data.name}</b>
//             <span> and number </span>
//             <b>{data.number}</b>
//             <span> in your contacts list?</span>
//           </>
//         );
//       case `${CONTACT_ACTIONS.DELETE}`:
//         return (
//           <>
//             <span>Are you sure you want to delete contact with name </span>
//             <b>{data.name}</b>
//             <span> and number </span>
//             <b>{data.number}</b>
//             <span> from recycle bin?</span>
//             <p className="confirmation__message">
//               It will be impossible to restore this data.name
//             </p>
//           </>
//         );
//       default:
//         return null;
//     }
//   } else {
//     switch (action) {
//       case `${GROUP_ACTIONS.DELETE}`:
//         return (
//           <>
//             <p>
//               Are you sure you want to delete group with name <b>{data.name}</b>
//             </p>
//             <p className="confirmation__message">
//               It will be impossible to restore this group
//             </p>
//           </>
//         );
//       default:
//         return null;
//     }
//   }
// };
