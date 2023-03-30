import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectContactGroups } from 'redux/groups/selectors';
import {
  ContactsList,
  ContactItem,
} from 'components/ContactList/ContactList.styled';
import { Button } from 'components/OperationButton/OperationButton.styled';
import {
  FavouriteContact,
  Section,
  Notification,
  CreateGroupModal,
} from 'components';
import { ContentWrapper } from 'pages/Contacts/Contacts.styled';

const Groups = () => {
  const [isCreateGroupModalOpen, setIsCreateGroupModalOpen] = useState(false);
  const toggleCreateGroupModal = () =>
    setIsCreateGroupModalOpen(!isCreateGroupModalOpen);

  const groups = useSelector(selectContactGroups);
  return (
    <main>
      <Section>
        <ContentWrapper>
          {groups.length !== 0 ? (
            <ContactsList>
              {groups.map(contact => (
                <ContactItem key={contact.id}>
                  <FavouriteContact contact={contact} />
                </ContactItem>
              ))}
            </ContactsList>
          ) : (
            <>
              {' '}
              <Notification message="You have not created any groups yet" />
              {isCreateGroupModalOpen && (
                <CreateGroupModal
                  isOpen={isCreateGroupModalOpen}
                  onClose={toggleCreateGroupModal}
                />
              )}
              <Button type="button" onClick={toggleCreateGroupModal}>
                Create group
              </Button>
            </>
          )}
        </ContentWrapper>
      </Section>
    </main>
  );
};

export default Groups;
