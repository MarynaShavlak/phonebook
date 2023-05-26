import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import {
  deleteContactFromGroup,
  updateContactsOrderInGroup,
} from 'redux/groups';
import { findGroupsForContact } from 'utils';
import { showDragToGroup } from 'utils/notifications';

import { List, Item } from './ItemsList.styled';
import { useItemsSorting } from 'hooks';

export const ItemsList = ({ items, renderItem, page }) => {
  const sortedItems = useItemsSorting(items);
  const dispatch = useDispatch();
  const onDragEnd = result => {
    const { source, destination } = result;
    const sourceGroup = items.find(group => group.id === source?.droppableId);
    const destinationGroup = items.find(
      group => group.id === destination?.droppableId
    );
    const isItemDraggedInsideOneList = sourceGroup === destinationGroup;

    if (
      !destination ||
      (isItemDraggedInsideOneList && destination?.index === source?.index)
    ) {
      return;
    }

    if (isItemDraggedInsideOneList) {
      const updatedContacts = Array.from(sourceGroup.contacts);
      const [removedContact] = updatedContacts.splice(source.index, 1);
      updatedContacts.splice(destination.index, 0, removedContact);

      dispatch(
        updateContactsOrderInGroup({
          groupName: sourceGroup.name,
          contacts: updatedContacts,
        })
      );
    } else {
      const contact = sourceGroup.contacts[source.index];
      const groupsForContacts = findGroupsForContact(contact, items);
      const isAlreadyExistInGroup = groupsForContacts.includes(
        destinationGroup.name
      );

      if (isAlreadyExistInGroup) {
        return showDragToGroup(contact, destinationGroup.name);
      }
      const newIndexPos = destination.index;
      dispatch(deleteContactFromGroup({ group: sourceGroup.name, contact }));
      const contactsInDestinationGroup = [...destinationGroup.contacts];
      contactsInDestinationGroup.splice(newIndexPos, 0, contact);

      dispatch(
        updateContactsOrderInGroup({
          groupName: destinationGroup.name,
          contacts: contactsInDestinationGroup,
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

                {provided.placeholder}
              </div>
            )}
          </Droppable>
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
