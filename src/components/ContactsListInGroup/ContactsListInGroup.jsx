import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { renderIcons } from 'utils';
import { ICON_NAMES, ICON_SIZES, ROUTES } from 'constants';
import { List, IconButton } from './ContactsListInGroup.styled.jsx';
import { deleteContactFromGroup } from 'redux/groups';
import { ElementData } from 'shared';

export const ContactsListInGroup = ({ group, isGroupContentVisible }) => {
  const dispatch = useDispatch();
  const contactsInGroup = group.contacts;
  const onDeleteContact = contact => {
    const groupName = group.name;
    dispatch(deleteContactFromGroup({ group: groupName, contact }));
  };

  return (
    <>
      {isGroupContentVisible && (
        <List>
          {contactsInGroup.map((contact, index) => (
            <li key={index}>
              <IconButton
                type="button"
                onClick={() => onDeleteContact(contact)}
              >
                {renderIcons(ICON_NAMES.DELETE, ICON_SIZES.MEDIUM_SMALL)}
              </IconButton>
              <ElementData item={contact} page={ROUTES.GROUPS} />
            </li>
          ))}
        </List>
      )}
    </>
  );
};

ContactsListInGroup.propTypes = {
  group: PropTypes.object.isRequired,
  isGroupContentVisible: PropTypes.bool,
};
