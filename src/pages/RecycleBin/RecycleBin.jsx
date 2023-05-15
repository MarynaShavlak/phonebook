import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, ContactItem } from 'components/ContactList/ContactList.styled';
import { DeletedContact, AppBar, ConfirmationModal } from 'components';
import {
  Section,
  Notification,
  ListHeader,
  MultiSelectBar,
  FilterList,
} from 'shared';
import { ContentWrapper, Main } from 'shared/commonStyledComponents.jsx';
import { selectRecycleBinContacts, clearRecycleBin } from 'redux/recycleBin';
import { selectContacts, fetchContacts } from 'redux/contacts';
import { ITEM_CATEGORIES, CONTACT_ACTIONS, ROUTES } from 'constants';
import { showRecyclebinClearInfo } from 'utils/notifications';
import { useMultiSelect, useSearchMenu } from 'hooks';

const RecycleBin = () => {
  const deletedContacts = useSelector(selectRecycleBinContacts);
  const allContacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const [isClearRecyclebinModalOpen, setIsClearRecyclebinModalOpen] =
    useState(false);
  const {
    isMultiSelectOpen,
    toggleMultiSelect,
    selectedItems,
    resetSelectedItems,
    handleSelectAllClick,
    updateSelectedItems,
  } = useMultiSelect(deletedContacts, ROUTES.RECYCLEBIN);
  const { isSearchMenuOpen, toggleSearchMenu } = useSearchMenu();
  useEffect(() => {
    if (!allContacts) {
      dispatch(fetchContacts());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const toggleClearRecyclebinModal = () => {
    setIsClearRecyclebinModalOpen(!isClearRecyclebinModalOpen);
  };

  const handleClearRecycleBin = () => {
    dispatch(clearRecycleBin());
    showRecyclebinClearInfo();
    toggleClearRecyclebinModal();
  };
  return (
    <>
      <AppBar />
      <Main>
        <Section>
          <ContentWrapper>
            {!!allContacts?.length && (
              <>
                {!!deletedContacts?.length && (
                  <ListHeader
                    category={ITEM_CATEGORIES.RECYCLEBIN}
                    items={deletedContacts}
                    handleClick={toggleClearRecyclebinModal}
                    handleSelectClick={toggleMultiSelect}
                    handleSearchClick={toggleSearchMenu}
                    activeMultiSelect={isMultiSelectOpen}
                    activeSearchMenu={isSearchMenuOpen}
                    page={ROUTES.RECYCLEBIN}
                  />
                )}
                {isMultiSelectOpen && (
                  <MultiSelectBar
                    onSelectAllClick={handleSelectAllClick}
                    selectedItems={selectedItems}
                    resetSelectedItems={resetSelectedItems}
                    page={ROUTES.RECYCLEBIN}
                  />
                )}
                {isSearchMenuOpen && <FilterList page={ROUTES.RECYCLEBIN} />}
                {isClearRecyclebinModalOpen && (
                  <ConfirmationModal
                    isOpen={isClearRecyclebinModalOpen}
                    onClose={toggleClearRecyclebinModal}
                    onConfirm={handleClearRecycleBin}
                    action={CONTACT_ACTIONS.DELETE_ALL}
                  />
                )}

                {!!deletedContacts.length ? (
                  <List>
                    {deletedContacts.map(contact => (
                      <ContactItem key={contact.id}>
                        <DeletedContact
                          contact={contact}
                          allContacts={allContacts}
                          isMultiSelectOpen={isMultiSelectOpen}
                          selectedItems={selectedItems}
                          updateSelectedItems={updateSelectedItems}
                        />
                      </ContactItem>
                    ))}
                  </List>
                ) : (
                  <Notification message="There are no contacts in recycle bin now" />
                )}
              </>
            )}
          </ContentWrapper>
        </Section>
      </Main>
    </>
  );
};

export default RecycleBin;
