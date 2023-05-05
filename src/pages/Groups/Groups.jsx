import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppBar, CreateGroupModal, Group } from 'components';
import { Section, Notification, ListHeader } from 'shared';
import { GroupsList, GroupItem } from './Groups.styled';
import {
  ContentWrapper,
  Main,
  Button,
} from 'shared/commonStyledComponents.jsx';
import { selectGroups } from 'redux/groups';
import { selectContacts, fetchContacts } from 'redux/contacts';
import { ITEM_CATEGORIES } from 'constants';

const Groups = () => {
  const [isCreateGroupModalOpen, setIsCreateGroupModalOpen] = useState(false);
  const dispatch = useDispatch();
  const groups = useSelector(selectGroups);
  const allContacts = useSelector(selectContacts);

  useEffect(() => {
    if (!allContacts) {
      dispatch(fetchContacts());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const toggleCreateGroupModal = () => {
    setIsCreateGroupModalOpen(!isCreateGroupModalOpen);
  };

  return (
    <>
      <AppBar />
      <Main>
        <Section>
          <ContentWrapper>
            {!!groups.length ? (
              <>
                {' '}
                {isCreateGroupModalOpen && (
                  <CreateGroupModal
                    isOpen={isCreateGroupModalOpen}
                    onClose={toggleCreateGroupModal}
                  />
                )}
                <ListHeader
                  category={ITEM_CATEGORIES.GROUP}
                  items={groups}
                  handleClick={toggleCreateGroupModal}
                />
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
                <Button type="button" onClick={toggleCreateGroupModal}>
                  Create group
                </Button>
                {isCreateGroupModalOpen && (
                  <CreateGroupModal
                    isOpen={isCreateGroupModalOpen}
                    onClose={toggleCreateGroupModal}
                  />
                )}
              </>
            )}
          </ContentWrapper>
        </Section>
      </Main>
    </>
  );
};

export default Groups;
