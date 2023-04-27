import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
import { OperationModal, DropdownMenu } from 'components';
import {
  ContactEl,
  Name,
  Number,
  Time,
} from 'components/Contact/Contact.styled';
import { removeContactFromRecycleBin } from 'redux/recycleBin';
import { addContact } from 'redux/contacts';
import { checkForDuplicateContact, renderDropdownButton } from 'utils';
import {
  showContactSuccess,
  showContactExistWarn,
  showRecyclebinInfo,
  showErrorMessage,
} from 'utils/notifications';
import { useModal } from 'hooks';
import { CONTACT_ACTIONS, OPERATION } from 'constants';

export const DeletedContact = ({ deletedContact, allContacts }) => {
  const dispatch = useDispatch();
  const { isRestoreModalOpen, toggleRestoreModal } = useModal(
    OPERATION.RESTORE
  );
  const { isDeleteModalOpen, toggleDeleteModal } = useModal(OPERATION.DELETE);

  const handleDelete = () => {
    dispatch(removeContactFromRecycleBin(deletedContact.id));
    showRecyclebinInfo(deletedContact);
    toggleRestoreModal();
  };

  const checkAndWarnForDuplicateContact = ({ newContact, contacts }) => {
    const { isDuplicate, isNameExist, isNumberExist } =
      checkForDuplicateContact({
        newContact,
        contacts,
      });
    if (isDuplicate) {
      showContactExistWarn({
        isNameExist,
        isNumberExist,
        contact: newContact,
      });
      return true;
    }
    return false;
  };

  const restoreDeletedContact = async deletedContact => {
    try {
      const restoreResult = await dispatch(addContact(deletedContact));
      const deleteResult = await dispatch(
        removeContactFromRecycleBin(deletedContact.id)
      );
      if (restoreResult.error || deleteResult.error) {
        showErrorMessage();
      } else {
        showContactSuccess(CONTACT_ACTIONS.RESTORE, deletedContact);
      }
    } catch (error) {
      showErrorMessage();
    }
  };

  const handleRestore = async () => {
    if (
      checkAndWarnForDuplicateContact({
        newContact: deletedContact,
        contacts: allContacts,
      })
    ) {
      toggleRestoreModal();
      return;
    }

    await restoreDeletedContact(deletedContact);
  };

  return (
    <>
      {isRestoreModalOpen && (
        <OperationModal
          isOpen={isRestoreModalOpen}
          onClose={toggleRestoreModal}
          data={deletedContact}
          onConfirm={handleRestore}
          action={CONTACT_ACTIONS.RESTORE}
        />
      )}
      {isDeleteModalOpen && (
        <OperationModal
          isOpen={isDeleteModalOpen}
          onClose={toggleDeleteModal}
          data={deletedContact}
          onConfirm={handleDelete}
          action={CONTACT_ACTIONS.DELETE}
        />
      )}
      <div>
        <ContactEl>
          <Avatar
            size="30"
            textSizeRatio={2}
            name={deletedContact.name}
            unstyled={false}
            round="50%"
          />
          <Name>{deletedContact.name}:</Name>
          <Number>{deletedContact.number}</Number>
        </ContactEl>
        <Time>
          removed at <b>{deletedContact.removalTime}</b>
        </Time>
      </div>

      <DropdownMenu
        elements={[
          {
            label: OPERATION.RESTORE,
            icon: renderDropdownButton(
              CONTACT_ACTIONS.RESTORE,
              OPERATION.RESTORE,
              toggleRestoreModal
            ),
          },
          {
            label: OPERATION.DELETE,
            icon: renderDropdownButton(
              CONTACT_ACTIONS.DELETE,
              OPERATION.DELETE,
              toggleDeleteModal
            ),
          },
        ]}
      />
    </>
  );
};

DeletedContact.propTypes = {
  deletedContact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    removalTime: PropTypes.string.isRequired,
  }).isRequired,
  allContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
