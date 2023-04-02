import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectGroups } from 'redux/groups';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { Button } from 'components/OperationButton/OperationButton.styled';
import { Section, Notification, CreateGroupModal, Group } from 'components';
import { ContentWrapper, Info } from 'pages/Contacts/Contacts.styled';
import { GroupsList, GroupItem, AddNewGroupBtn } from './Groups.styled';
import { renderIcons, getGroupsQuantity } from 'utils';

const Groups = () => {
  const [isCreateGroupModalOpen, setIsCreateGroupModalOpen] = useState(false);
  const dispatch = useDispatch();

  const groups = useSelector(selectGroups);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const toggleCreateGroupModal = () => {
    setIsCreateGroupModalOpen(!isCreateGroupModalOpen);
  };

  return (
    <main>
      <Section>
        <ContentWrapper>
          {groups.length !== 0 ? (
            <>
              {' '}
              {isCreateGroupModalOpen && (
                <CreateGroupModal
                  isOpen={isCreateGroupModalOpen}
                  onClose={toggleCreateGroupModal}
                />
              )}
              <AddNewGroupBtn
                aria-label="Add new contact"
                onClick={toggleCreateGroupModal}
              >
                {renderIcons('addGroup', 40)}
              </AddNewGroupBtn>
              <Info>
                You have <span>{getGroupsQuantity(groups)}</span> in your phone
                book
              </Info>
              <GroupsList>
                {groups.map(group => (
                  <GroupItem key={group.id}>
                    <Group group={group} />
                  </GroupItem>
                ))}
              </GroupsList>
            </>
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
