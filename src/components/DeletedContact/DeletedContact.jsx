import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { ConfirmationModal, DropdownMenu } from 'components';
import { ElementData } from 'shared';
import { Time } from 'components/Contact/Contact.styled';
import { removeContactFromRecycleBin } from 'redux/recycleBin';
import {
  renderDropdownElement,
  restoreDeletedContact,
  checkAndWarnForDuplicateContact,
} from 'utils';
import { showRecyclebinInfo } from 'utils/notifications';
import { useModal, useSelectedContact } from 'hooks';
import { CONTACT_ACTIONS, OPERATION, ROUTES } from 'constants';
import { selectFilter } from 'redux/filters';
import { selectContacts } from 'redux/contacts';

export const DeletedContact = ({
  contact,
  isMultiSelectOpen,
  selectedItems,
  updateSelectedItems,
}) => {
  const { id, removalTime } = contact;
  const dispatch = useDispatch();
  const allContacts = useSelector(selectContacts);
  const { isRestoreModalOpen, toggleRestoreModal } = useModal(
    OPERATION.RESTORE
  );
  const { isDeleteModalOpen, toggleDeleteModal } = useModal(OPERATION.DELETE);
  const [isSelected, toggleIsSelected] = useSelectedContact(
    selectedItems,
    contact,
    updateSelectedItems
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
  const filter = useSelector(selectFilter(ROUTES.RECYCLEBIN));
  return (
    <>
      <div>
        <ElementData
          isMultiSelectOpen={isMultiSelectOpen}
          isSelected={isSelected}
          toggleIsSelected={toggleIsSelected}
          contact={contact}
          filter={filter}
        />
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

  isMultiSelectOpen: PropTypes.bool,
  selectedItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
  updateSelectedItems: PropTypes.func.isRequired,
};
