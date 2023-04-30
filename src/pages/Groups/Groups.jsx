import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppBar, CreateGroupModal, Group } from 'components';
import { Section, Notification } from 'shared';
import { GroupsList, GroupItem, AddNewGroupBtn } from './Groups.styled';
import {
  ContentWrapper,
  Main,
  Button,
  InfoWrap,
  Info,
} from 'shared/commonStyledComponents.jsx';
import { selectGroups } from 'redux/groups';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { renderIcons, getGroupsQuantity } from 'utils';
import { ICON_NAMES, ICON_SIZES } from 'constants';

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
      <Main>
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
                    {renderIcons(ICON_NAMES.GROUP_ADD, ICON_SIZES.MEDIUM)}
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
      </Main>
    </>
  );
};

export default Groups;
