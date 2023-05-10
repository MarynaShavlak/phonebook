import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ConfirmationModal, DropdownMenu } from 'components';
import { ContactAvatar } from 'shared';
import { ContactEl, Time } from 'components/Contact/Contact.styled';
import { removeContactFromRecycleBin } from 'redux/recycleBin';
import {
  renderDropdownElement,
  restoreDeletedContact,
  checkAndWarnForDuplicateContact,
} from 'utils';
import { showRecyclebinInfo } from 'utils/notifications';
import { useModal, useSelectedContact } from 'hooks';
import { CONTACT_ACTIONS, OPERATION } from 'constants';

export const DeletedContact = ({
  contact,
  allContacts,
  isMultiSelectOpen,
  selectedContacts,
  updateSelectedContacts,
}) => {
  const { id, name, number, removalTime } = contact;
  const dispatch = useDispatch();
  const { isRestoreModalOpen, toggleRestoreModal } = useModal(
    OPERATION.RESTORE
  );
  const { isDeleteModalOpen, toggleDeleteModal } = useModal(OPERATION.DELETE);
  const [isSelected, toggleIsSelected] = useSelectedContact(
    selectedContacts,
    contact,
    updateSelectedContacts
  );

  const handleDelete = () => {
    dispatch(removeContactFromRecycleBin(id));
    showRecyclebinInfo(contact);
    toggleRestoreModal();
  };

  const handleRestore = async () => {
    checkAndWarnForDuplicateContact({
      newContact: contact,
      contacts: allContacts,
    })
      ? toggleRestoreModal()
      : await restoreDeletedContact({ contact, dispatch });
  };

  return (
    <>
      <div>
        <ContactEl>
          <ContactAvatar
            isMultiSelectOpen={isMultiSelectOpen}
            isSelected={isSelected}
            toggleIsSelected={toggleIsSelected}
            name={name}
          />
          <p>{name}:</p>
          <p>{number}</p>
        </ContactEl>
        <Time>
          removed at <b>{removalTime}</b>
        </Time>
      </div>

      <DropdownMenu
        elements={[
          {
            label: OPERATION.RESTORE,
            icon: renderDropdownElement(
              CONTACT_ACTIONS.RESTORE,
              OPERATION.RESTORE,
              toggleRestoreModal
            ),
          },
          {
            label: OPERATION.DELETE,
            icon: renderDropdownElement(
              CONTACT_ACTIONS.DELETE,
              OPERATION.DELETE,
              toggleDeleteModal
            ),
          },
        ]}
      />
      {isRestoreModalOpen && (
        <ConfirmationModal
          isOpen={isRestoreModalOpen}
          onClose={toggleRestoreModal}
          data={contact}
          onConfirm={handleRestore}
          action={CONTACT_ACTIONS.RESTORE}
        />
      )}
      {isDeleteModalOpen && (
        <ConfirmationModal
          isOpen={isDeleteModalOpen}
          onClose={toggleDeleteModal}
          data={contact}
          onConfirm={handleDelete}
          action={CONTACT_ACTIONS.DELETE}
        />
      )}
    </>
  );
};

DeletedContact.propTypes = {
  contact: PropTypes.shape({
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
  isMultiSelectOpen: PropTypes.bool,
  selectedContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
  updateSelectedContacts: PropTypes.func.isRequired,
};
