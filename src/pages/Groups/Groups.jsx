import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CreateGroupModal, Group } from 'components';
import { ActionsMenu, ItemsListSection } from 'shared';
import { selectGroups } from 'redux/groups';
import { selectContacts, fetchContacts } from 'redux/contacts';
import { ROUTES } from 'constants';
import { useMultiSelect } from 'hooks';

const Groups = () => {
  const [isCreateGroupModalOpen, setIsCreateGroupModalOpen] = useState(false);
  const dispatch = useDispatch();
  const groups = useSelector(selectGroups);
  const allContacts = useSelector(selectContacts);
  const {
    isMultiSelectOpen,
    toggleMultiSelect,
    selectedItems,
    resetSelectedItems,
    handleSelectAllClick,
    updateSelectedItems,
  } = useMultiSelect(groups, ROUTES.GROUPS);

  useEffect(() => {
    if (!allContacts) {
      dispatch(fetchContacts());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const toggleCreateGroupModal = () => {
    setIsCreateGroupModalOpen(!isCreateGroupModalOpen);
  };

  const renderGroup = group => {
    return (
      <Group
        isMultiSelectOpen={isMultiSelectOpen}
        group={group}
        updateSelectedItems={updateSelectedItems}
        selectedItems={selectedItems}
      />
    );
  };

  return (
    <>
      <ActionsMenu
        page={ROUTES.GROUPS}
        items={groups}
        handleMainBtnClick={toggleCreateGroupModal}
        isMultiSelectOpen={isMultiSelectOpen}
        toggleMultiSelect={toggleMultiSelect}
        selectedItems={selectedItems}
        resetSelectedItems={resetSelectedItems}
        handleSelectAllClick={handleSelectAllClick}
      />
      <ItemsListSection
        page={ROUTES.GROUPS}
        renderItem={renderGroup}
        onActionBtnClick={toggleCreateGroupModal}
      />
      {isCreateGroupModalOpen && (
        <CreateGroupModal
          isOpen={isCreateGroupModalOpen}
          onClose={toggleCreateGroupModal}
        />
      )}
    </>
  );
};

export default Groups;
