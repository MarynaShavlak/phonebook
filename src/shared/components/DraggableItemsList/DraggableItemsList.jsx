import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import {
  deleteContactFromGroup,
  updateContactsOrderInGroup,
} from 'redux/groups';
import { findGroupsForContact, findGroupById } from 'utils';
import { showDragToGroup } from 'utils/notifications';
import { List, Item } from 'components/ItemsList/ItemsList.styled';

export const DraggableItemsList = ({ items, renderItem }) => {
  const dispatch = useDispatch();

  const handleItemDraggedInsideOneList = (group, source, destination) => {
    const updatedContacts = Array.from(group.contacts);
    const [removedContact] = updatedContacts.splice(source.index, 1);
    updatedContacts.splice(destination.index, 0, removedContact);

    dispatch(
      updateContactsOrderInGroup({
        groupName: group.name,
        contacts: updatedContacts,
      })
    );
  };
  const handleItemDraggedToDifferentList = (
    sourceGroup,
    source,
    destination,
    destinationGroup
  ) => {
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
  };

  const onDragEnd = result => {
    const { source, destination } = result;
    const sourceGroup = findGroupById(source?.droppableId, items);
    const destinationGroup = findGroupById(destination?.droppableId, items);
    const isItemDraggedInsideOneList = sourceGroup === destinationGroup;

    if (
      !destination ||
      (isItemDraggedInsideOneList && destination?.index === source?.index)
    ) {
      return;
    }

    if (isItemDraggedInsideOneList) {
      handleItemDraggedInsideOneList(sourceGroup, source, destination);
    } else {
      handleItemDraggedToDifferentList(
        sourceGroup,
        source,
        destination,
        destinationGroup
      );
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <List>
        {items.map((item, index) => (
          <Droppable key={item.id} droppableId={item.id}>
            {provided => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <Item key={item.id} index={index}>
                  {renderItem(item)}
                </Item>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </List>
    </DragDropContext>
  );
};

DraggableItemsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  renderItem: PropTypes.func.isRequired,
};
