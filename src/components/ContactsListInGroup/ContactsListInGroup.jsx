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
  // console.log('group.id: ', group.id);
  const dispatch = useDispatch();
  const contactsInGroup = group.contacts;
  console.log('contactsInGroup: ', contactsInGroup);
  const onDeleteContact = contact => {
    const groupName = group.name;
    dispatch(deleteContactFromGroup({ group: groupName, contact }));
  };

  // const onDragEnd = result => {
  //   console.log('result: ', result);
  //   const { source, destination } = result;

  //   // Check if the destination is valid (not null and different from source)
  //   if (!destination || destination.index === source.index) {
  //     return;
  //   }

  //   // Create a new array to hold the reordered contacts
  //   const updatedContacts = Array.from(contactsInGroup);

  //   // Remove the contact from the source index
  //   const [removedContact] = updatedContacts.splice(source.index, 1);
  //   console.log('removedContact: ', removedContact);

  //   // Insert the removed contact at the destination index
  //   updatedContacts.splice(destination.index, 0, removedContact);
  //   console.log('updatedContacts: ', updatedContacts);
  //   const groupName = group.name;
  //   // Update the state or dispatch an action to update the contacts
  //   // For example, you can use the useDispatch hook:
  //   dispatch(
  //     updateContactsOrderInGroup({
  //       groupName: groupName,
  //       contacts: updatedContacts,
  //     })
  //   );
  // };

  const onDragEnd = result => {
    const { source, destination } = result;
    console.log('result: ', result);
    console.log('destination: ', destination);
    console.log('source: ', source);

    // Check if the destination is valid (not null)
    if (!destination) {
      return;
    }

    // Check if the contact is being moved within the same group
    if (source.droppableId === destination.droppableId) {
      const updatedContacts = Array.from(contactsInGroup);
      const [removedContact] = updatedContacts.splice(source.index, 1);
      updatedContacts.splice(destination.index, 0, removedContact);

      const groupName = group.name;
      dispatch(
        updateContactsOrderInGroup({
          groupName: groupName,
          contacts: updatedContacts,
        })
      );
    } else {
      // Contact is being moved between different groups
      const sourceGroup = source.droppableId;
      console.log('sourceGroup: ', sourceGroup);
      const destinationGroup = destination.droppableId;
      console.log('destinationGroup: ', destinationGroup);
      const contact = contactsInGroup[source.index];
      console.log('contact: ', contact);

      // dispatch(
      //   moveContactBetweenGroups({
      //     sourceGroup: sourceGroup,
      //     destinationGroup: destinationGroup,
      //     contact: contact,
      //   })
      // );
    }
  };

  // return (
  //   <DragDropContext onDragEnd={onDragEnd}>
  //     {isGroupContentVisible && (
  //       <Droppable droppableId={group.id}>
  //         {provided => (
  //           <List {...provided.droppableProps} ref={provided.innerRef}>
  //             {contactsInGroup.map((contact, index) => (
  //               <Draggable
  //                 key={index}
  //                 draggableId={`${group.id}-${index}`}
  //                 // draggableId={index.toString()}
  //                 index={index}
  //               >
  //                 {provided => (
  //                   <li
  //                     ref={provided.innerRef}
  //                     {...provided.draggableProps}
  //                     {...provided.dragHandleProps}
  //                   >
  //                     <IconButton
  //                       type="button"
  //                       onClick={() => onDeleteContact(contact)}
  //                     >
  //                       {renderIcons(
  //                         ICON_NAMES.DELETE,
  //                         ICON_SIZES.MEDIUM_SMALL
  //                       )}
  //                     </IconButton>
  //                     <ElementData item={contact} page={ROUTES.GROUPS} />
  //                   </li>
  //                 )}
  //               </Draggable>
  //             ))}
  //             {provided.placeholder}
  //           </List>
  //         )}
  //       </Droppable>
  //     )}
  //   </DragDropContext>
  // );

  return (
    <>
      {isGroupContentVisible && (
        <List>
          {contactsInGroup.map((contact, index) => (
            <Draggable
              key={index}
              draggableId={`${group.id}-${index}`}
              // draggableId={index.toString()}
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
                    {renderIcons(ICON_NAMES.DELETE, ICON_SIZES.MEDIUM_SMALL)}
                  </IconButton>
                  <ElementData item={contact} page={ROUTES.GROUPS} />
                </li>
              )}
            </Draggable>
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
