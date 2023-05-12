import { deleteContactAndCheckError } from 'utils';

export const handleSelectedContacts = async ({
  selectedContacts,
  dispatch,
  onClose,
}) => {
  await Promise.all(
    selectedContacts.map(contact =>
      deleteContactAndCheckError({
        contactId: contact.id,
        dispatch,
        toggleModal: onClose,
      })
    )
  );
};
