import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { renderIcons } from 'utils';
import { ICON_NAMES, ICON_SIZES, ROUTES } from 'constants';
import { List, IconButton } from './ContactsListInGroup.styled.jsx';
import {
  deleteContactFromGroup,
  updateContactsOrderInGroup,
} from 'redux/groups';
import { ElementData } from 'shared';

export const ContactsListInGroup = ({ group, isGroupContentVisible }) => {
  const dispatch = useDispatch();
  const contactsInGroup = group.contacts;
  console.log('contactsInGroup: ', contactsInGroup);
  const onDeleteContact = contact => {
    const groupName = group.name;
    dispatch(deleteContactFromGroup({ group: groupName, contact }));
  };

  const onDragEnd = result => {
    const { source, destination } = result;

    // Check if the destination is valid (not null and different from source)
    if (!destination || destination.index === source.index) {
      return;
    }

    // Create a new array to hold the reordered contacts
    const updatedContacts = Array.from(contactsInGroup);

    // Remove the contact from the source index
    const [removedContact] = updatedContacts.splice(source.index, 1);

    // Insert the removed contact at the destination index
    updatedContacts.splice(destination.index, 0, removedContact);
    console.log('updatedContacts: ', updatedContacts);
    const groupName = group.name;
    // Update the state or dispatch an action to update the contacts
    // For example, you can use the useDispatch hook:
    dispatch(
      updateContactsOrderInGroup({
        groupName: groupName,
        contacts: updatedContacts,
      })
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {isGroupContentVisible && (
        <Droppable droppableId="contactsList">
          {provided => (
            <List {...provided.droppableProps} ref={provided.innerRef}>
              {contactsInGroup.map((contact, index) => (
                <Draggable
                  key={index}
                  draggableId={index.toString()}
                  index={index}
                >
                  {provided => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <IconButton
                        type="button"
                        onClick={() => onDeleteContact(contact)}
                      >
                        {renderIcons(
                          ICON_NAMES.DELETE,
                          ICON_SIZES.MEDIUM_SMALL
                        )}
                      </IconButton>
                      <ElementData item={contact} page={ROUTES.GROUPS} />
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </List>
          )}
        </Droppable>
      )}
    </DragDropContext>
  );
};

ContactsListInGroup.propTypes = {
  group: PropTypes.object.isRequired,
  isGroupContentVisible: PropTypes.bool,
};
