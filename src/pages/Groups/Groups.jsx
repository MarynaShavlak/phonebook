import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectContactGroups } from 'redux/groups/selectors';
import { ContactButtons } from 'components/Contact/Contact.styled';
import { Button } from 'components/OperationButton/OperationButton.styled';
import {
  Section,
  Notification,
  CreateGroupModal,
  IconButton,
} from 'components';
import { ContentWrapper, Info } from 'pages/Contacts/Contacts.styled';
import {
  GroupsList,
  GroupItem,
  Group,
  AddNewGroupBtn,
  GroupAvatar,
} from './Groups.styled';
import { renderIcons } from 'utils/renderIcons';
import { getGroupsQuantity } from 'utils/getGroupsQuantity';

const Groups = () => {
  const [isCreateGroupModalOpen, setIsCreateGroupModalOpen] = useState(false);
  const groups = useSelector(selectContactGroups);
  console.log('groups: ', groups);
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
                    <GroupAvatar>{renderIcons('group', 30)}</GroupAvatar>
                    <Group>{group.name}</Group>
                    <ContactButtons>
                      <IconButton
                        // onClick={toggleEditModal}
                        aria-label="Edit Contact"
                        // onMouseEnter={toggleEditBtnHoverEffect}
                        // onMouseLeave={toggleEditBtnHoverEffect}
                      >
                        {renderIcons('edit', 30)}
                      </IconButton>
                      <IconButton
                        // onClick={toggleConfirmModal}
                        // onMouseEnter={toggleDeleteBtnHoverEffect}
                        // onMouseLeave={toggleDeleteBtnHoverEffect}
                        aria-label="Delete contact"
                      >
                        {renderIcons('delete', 30)}
                      </IconButton>
                    </ContactButtons>
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
