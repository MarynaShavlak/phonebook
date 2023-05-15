import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  selectFavoritesContacts,
  selectFilteredFavoritesContacts,
} from 'redux/favorites';
import { List, ContactItem } from 'components/ContactList/ContactList.styled';
import { FavoriteContact, AppBar } from 'components';
import {
  Section,
  Notification,
  ListHeader,
  MultiSelectBar,
  Filter,
} from 'shared';
import { ContentWrapper, Main } from 'shared/commonStyledComponents.jsx';
import {
  selectFilterFavoritesByName,
  selectFilterFavoritesByNumber,
} from 'redux/filters/favorites';
import { ITEM_CATEGORIES, ROUTES } from 'constants';
import { useMultiSelect, useSearchMenu } from 'hooks';

const Favorites = () => {
  const location = useLocation();
  const favoriteContacts = useSelector(selectFavoritesContacts);
  const filteredFavoritesContacts = useSelector(
    selectFilteredFavoritesContacts
  );
  const filterByName = useSelector(selectFilterFavoritesByName);
  const filterByNumber = useSelector(selectFilterFavoritesByNumber);
  const isFiltered =
    (!!filterByName || !!filterByNumber) && !!favoriteContacts?.length;
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
  const favoritesRef = useRef();
  console.log('favoritesRef: ', favoritesRef);
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
                {/* {isSearchMenuOpen && (
                  <Filter
                    page={ROUTES.FAVORITES}
                    favoritesFilterRef={favoritesRef}
                  />
                )} */}
              </>
            )}

            {filteredFavoritesContacts?.length ? (
              <List state={{ from: location }}>
                {filteredFavoritesContacts.map(contact => (
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
            ) : isFiltered ? (
              <Notification
                message={`No contacts found matching your search criteria for names or numbers containing '${filterByName}'`}
              />
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
