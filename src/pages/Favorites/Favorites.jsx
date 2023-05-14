import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectFavoritesContacts } from 'redux/favorites/selectors';
import { List, ContactItem } from 'components/ContactList/ContactList.styled';
import { FavoriteContact, AppBar } from 'components';
import {
  Section,
  Notification,
  ListHeader,
  MultiSelectBar,
  FilterList,
} from 'shared';
import { ContentWrapper, Main } from 'shared/commonStyledComponents.jsx';
import { ITEM_CATEGORIES, ROUTES } from 'constants';
import { useMultiSelect, useSearchMenu } from 'hooks';

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
  } = useMultiSelect(favoriteContacts, ROUTES.FAVORITES);
  const { isSearchMenuOpen, toggleSearchMenu } = useSearchMenu();
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
                  handleSearchClick={toggleSearchMenu}
                  activeMultiSelect={isMultiSelectOpen}
                  activeSearchMenu={isSearchMenuOpen}
                  page={ROUTES.FAVORITES}
                />
                {isMultiSelectOpen && (
                  <MultiSelectBar
                    onSelectAllClick={handleSelectAllClick}
                    selectedItems={selectedItems}
                    resetSelectedItems={resetSelectedItems}
                    page={ROUTES.FAVORITES}
                  />
                )}
                {isSearchMenuOpen && <FilterList />}
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
