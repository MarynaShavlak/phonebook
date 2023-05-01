import React from 'react';
import { EditRules, ContactInfo } from './ContactEditInfoBlock.styled';
import { renderIcons } from 'utils';
import { ICON_NAMES, ICON_SIZES } from 'constants';

export const ContactEditInfoBlock = ({ contact }) => {
  return (
    <>
      <ContactInfo>
        <p>You try to edit contact with:</p>
        <p>
          <span>Name:</span>
          <span>
            <b>{contact.name}</b>
          </span>
        </p>
        <p>
          <span>Number:</span>
          <span>
            <b>{contact.number}</b>
          </span>
        </p>
      </ContactInfo>
      <EditRules>
        <p>{renderIcons(ICON_NAMES.INFO, ICON_SIZES.MEDIUM)}</p>
        <p>
          Modify only one field for a contact - either the <b>name </b>
          or <b>number</b>. If you need to change both, delete the existing
          contact and create a new one.
        </p>
      </EditRules>
    </>
  );
};
