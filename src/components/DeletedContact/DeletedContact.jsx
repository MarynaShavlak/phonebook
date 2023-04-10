import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
import { clsx } from 'clsx';
import { OperationModal, DropdownMenu } from 'components';
import { InfoBlock } from './DeletedContact.styled';
import {
  ContactEl,
  Name,
  Number,
  Time,
} from 'components/Contact/Contact.styled';
import { DropdownButton } from 'components/DropdownMenu/DropdownMenu.styled';

import { renderIcons, Notifications } from 'utils';
import { useHoverEffects, useModal } from 'hooks';
import { CONTACT_ACTIONS, OPERATION_TYPES } from 'constants';
import { removeContactFromRecycleBin } from 'redux/recycleBin/recycleBinSlice';
import { addContact } from 'redux/contacts/contactsOperations';

import { selectContacts } from 'redux/contacts/selectors';

export const DeletedContact = ({ contact }) => {
  const contacts = useSelector(selectContacts);
  const { isRestoreModalOpen, toggleRestoreModal } = useModal(
    OPERATION_TYPES.RESTORE
  );
  const { isDeleteModalOpen, toggleDeleteModal } = useModal(
    OPERATION_TYPES.DELETE
  );
  const { isHovered, toggleHoverEffect } = useHoverEffects([
    OPERATION_TYPES.RESTORE,
    OPERATION_TYPES.DELETE,
  ]);
  const dispatch = useDispatch();

  const deleteContact = () => {
    dispatch(removeContactFromRecycleBin(contact.id));
    Notifications.showRecyclebinInfo(contact);
  };

  const checkContactInBook = contact => {
    const isNumberExist = contacts.some(el => el.number === contact.number);
    const isNameExist = contacts.some(el => el.name === contact.name);

    if (isNameExist || isNumberExist) {
      Notifications.showContactExistWarn(isNameExist, isNumberExist, contact);
      return true;
    }

    return false;
  };

  const restoreContact = () => {
    if (checkContactInBook(contact)) return;
    dispatch(addContact(contact));
    dispatch(removeContactFromRecycleBin(contact.id));
    Notifications.showContactSuccess(OPERATION_TYPES.RESTORE, contact);
  };

  return (
    <>
      {isRestoreModalOpen && (
        <OperationModal
          isOpen={isRestoreModalOpen}
          onClose={toggleRestoreModal}
          data={contact}
          onConfirm={restoreContact}
          action={CONTACT_ACTIONS.RESTORE}
        />
      )}
      {isDeleteModalOpen && (
        <OperationModal
          isOpen={isDeleteModalOpen}
          onClose={toggleDeleteModal}
          data={contact}
          onConfirm={deleteContact}
          action={CONTACT_ACTIONS.DELETE}
        />
      )}
      <InfoBlock>
        <ContactEl
          className={clsx({
            toRestore: isHovered.restore,
            toDelete: isHovered.delete,
          })}
        >
          <Avatar
            size="30"
            textSizeRatio={2}
            name={contact.name}
            unstyled={false}
            round="50%"
          />
          <Name>{contact.name}:</Name>
          <Number>{contact.number}</Number>
        </ContactEl>
        <Time>
          removed at <b>{contact.removalContactTime}</b>
        </Time>
      </InfoBlock>

      <DropdownMenu
        elements={[
          {
            label: OPERATION_TYPES.RESTORE,
            icon: (
              <>
                <DropdownButton
                  ariaLabel={CONTACT_ACTIONS.REMOVE_TO_RECYCLE_BIN}
                  onClick={toggleRestoreModal}
                  onMouseEnter={() =>
                    toggleHoverEffect(OPERATION_TYPES.RESTORE)
                  }
                  onMouseLeave={() =>
                    toggleHoverEffect(OPERATION_TYPES.RESTORE)
                  }
                >
                  {renderIcons(OPERATION_TYPES.RESTORE, 25)}Restore{' '}
                </DropdownButton>
              </>
            ),
          },
          {
            label: OPERATION_TYPES.ADD,
            icon: (
              <>
                <DropdownButton
                  ariaLabel={CONTACT_ACTIONS.DELETE}
                  onClick={toggleDeleteModal}
                  onMouseEnter={() => toggleHoverEffect(OPERATION_TYPES.DELETE)}
                  onMouseLeave={() => toggleHoverEffect(OPERATION_TYPES.DELETE)}
                >
                  {renderIcons(OPERATION_TYPES.DELETE, 25)}Delete
                </DropdownButton>
              </>
            ),
          },
        ]}
      />
    </>
  );
};

DeletedContact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    removalContactTime: PropTypes.string.isRequired,
  }).isRequired,
};
