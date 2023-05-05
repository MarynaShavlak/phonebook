import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, ContactItem } from 'components/ContactList/ContactList.styled';
import { DeletedContact, AppBar, ConfirmationModal } from 'components';
import { Section, Notification, ListHeader } from 'shared';
import { ContentWrapper, Main } from 'shared/commonStyledComponents.jsx';
import { selectRecycleBinContacts, clearRecycleBin } from 'redux/recycleBin';
import { selectContacts, fetchContacts } from 'redux/contacts';
import { ITEM_CATEGORIES, CONTACT_ACTIONS } from 'constants';
import { showRecyclebinClearInfo } from 'utils/notifications';

const RecycleBin = () => {
  const deletedContacts = useSelector(selectRecycleBinContacts);
  const allContacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const [isClearRecyclebinModalOpen, setIsClearRecyclebinModalOpen] =
    useState(false);

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
                  />
                )}

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
                          deletedContact={contact}
                          allContacts={allContacts}
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
