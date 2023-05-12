import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectFavoritesContacts } from 'redux/favorites/selectors';
import { List, ContactItem } from 'components/ContactList/ContactList.styled';
import { FavoriteContact, AppBar } from 'components';
import { Section, Notification, ListHeader, MultiSelectBar } from 'shared';
import { ContentWrapper, Main } from 'shared/commonStyledComponents.jsx';
import { ITEM_CATEGORIES, ROUTES } from 'constants';
import { useMultiSelect } from 'hooks';

const Favorites = () => {
  const favoriteContacts = useSelector(selectFavoritesContacts);
  const navigate = useNavigate();
  const {
    isMultiSelectOpen,
    toggleMultiSelect,
    selectedItems,
    resetSelectedItems,
    handleSelectAllClick,
    updateSelectedItems,
  } = useMultiSelect(favoriteContacts);

  return (
    <>
      <AppBar />{' '}
      <Main>
        <Section>
          <ContentWrapper>
            {!!favoriteContacts?.length && (
              <>
                <ListHeader
                  category={ITEM_CATEGORIES.CONTACT}
                  items={favoriteContacts}
                  handleClick={() => navigate(`${ROUTES.CREATE}`)}
                  handleSelectClick={toggleMultiSelect}
                  active={isMultiSelectOpen}
                />
                {isMultiSelectOpen && (
                  <MultiSelectBar
                    onSelectAllClick={handleSelectAllClick}
                    selectedItems={selectedItems}
                    resetSelectedItems={resetSelectedItems}
                    page={ROUTES.FAVORITES}
                  />
                )}
              </>
            )}
            {!!favoriteContacts.length ? (
              <List>
                {favoriteContacts.map(contact => (
                  <ContactItem key={contact.id}>
                    <FavoriteContact
                      contact={contact}
                      isMultiSelectOpen={isMultiSelectOpen}
                      selectedItems={selectedItems}
                      updateSelectedItems={updateSelectedItems}
                    />
                  </ContactItem>
                ))}
              </List>
            ) : (
              <Notification message="There are no contacts in your favorites yet" />
            )}
          </ContentWrapper>
        </Section>
      </Main>
    </>
  );
};

export default Favorites;
