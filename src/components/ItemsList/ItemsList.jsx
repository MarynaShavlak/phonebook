import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {
  deleteContactFromGroup,
  updateContactsOrderInGroup,
} from 'redux/groups';

import { List, Item } from './ItemsList.styled';
import { useItemsSorting } from 'hooks';

export const ItemsList = ({ items, renderItem, page }) => {
  const sortedItems = useItemsSorting(items);
  const dispatch = useDispatch();
  const onDragEnd = result => {
    console.log('result: ', result);
    const { source, destination } = result;
    console.log('destination: ', destination);
    console.log('source: ', source);

    if (!destination || destination.index === source.index) {
      return;
    }

    const sourceGroup = items.find(group => group.id === source.droppableId);
    const destinationGroup = items.find(
      group => group.id === destination.droppableId
    );

    if (sourceGroup === destinationGroup) {
      const updatedContacts = Array.from(sourceGroup.contacts);
      const [removedContact] = updatedContacts.splice(source.index, 1);
      updatedContacts.splice(destination.index, 0, removedContact);
      console.log('updatedContacts: ', updatedContacts);

      dispatch(
        updateContactsOrderInGroup({
          groupName: sourceGroup.name,
          contacts: updatedContacts,
        })
      );
    } else {
      const contact = sourceGroup.contacts[source.index];
      console.log('contact: ', contact);

      // Perform the necessary actions to move the contact between items
      // For example, you can dispatch Redux actions to update the state
      // or call API endpoints to persist the changes
      // ...

      // Delete the contact from the source group
      dispatch(deleteContactFromGroup({ group: sourceGroup.name, contact }));

      // Add the contact to the destination group
      dispatch(
        updateContactsOrderInGroup({
          groupName: destinationGroup.name,
          contacts: [...destinationGroup.contacts, contact],
        })
      );
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <List>
        {sortedItems.map((item, index) => (
          <Droppable key={item.id} droppableId={item.id}>
            {provided => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <Item key={item.id}>{renderItem(item, index)}</Item>
                {/* <ContactsListInGroup
                contacts={group.contacts}
                onDeleteContact={contact => onDeleteContact(group, contact)}
              /> */}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          // <Item key={item.id}>{renderItem(item, index)}</Item>
        ))}
      </List>
    </DragDropContext>
  );
};

ItemsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  renderItem: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired,
};
