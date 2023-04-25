import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectGroups } from 'redux/groups';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { Button } from 'components/OperationButton/OperationButton.styled';
import { Section, Notification, CreateGroupModal, Group } from 'components';
import { ContentWrapper, Info, InfoWrap } from 'pages/Contacts/Contacts.styled';
import { GroupsList, GroupItem, AddNewGroupBtn } from './Groups.styled';
import { renderIcons, getGroupsQuantity } from 'utils';
import { AppBar } from 'components/AppBar/AppBar';
import { HomeMain } from 'pages/Home/Home.styled';

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
    <>
      <AppBar />
      <HomeMain>
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
                <InfoWrap>
                  <Info>
                    Total quantity: <span>{getGroupsQuantity(groups)}</span>
                  </Info>
                  <AddNewGroupBtn
                    type="button"
                    aria-label="Add new contact"
                    onClick={toggleCreateGroupModal}
                  >
                    {renderIcons('addGroup', 30)}
                  </AddNewGroupBtn>
                </InfoWrap>
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
      </HomeMain>
    </>
  );
};

export default Groups;
