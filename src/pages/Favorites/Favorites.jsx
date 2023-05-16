import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  selectFavoritesContacts,
  selectFilteredFavoritesContacts,
} from 'redux/favorites';
import { FavoriteContact, AppBar, ItemsList } from 'components';
import { Section, Notification, ActionsMenu } from 'shared';
import { ContentWrapper, Main } from 'shared/commonStyledComponents.jsx';
import { selectFilter } from 'redux/filters';
import { ITEM_CATEGORIES, ROUTES } from 'constants';
import { useMultiSelect } from 'hooks';

const Favorites = () => {
  const favoriteContacts = useSelector(selectFavoritesContacts);
  const filteredFavoritesContacts = useSelector(
    selectFilteredFavoritesContacts
  );
  const filter = useSelector(selectFilter(ROUTES.FAVORITES));
  const isFiltered = !!filter && !!favoriteContacts?.length;
  const navigate = useNavigate();
  const {
    isMultiSelectOpen,
    toggleMultiSelect,
    selectedItems,
    resetSelectedItems,
    handleSelectAllClick,
    updateSelectedItems,
  } = useMultiSelect(favoriteContacts, ROUTES.FAVORITES);
  const renderContact = contact => {
    return (
      <FavoriteContact
        contact={contact}
        isMultiSelectOpen={isMultiSelectOpen}
        selectedItems={selectedItems}
        updateSelectedItems={updateSelectedItems}
      />
    );
  };
  return (
    <>
      <AppBar />{' '}
      <Main>
        <Section>
          <ContentWrapper>
            <ActionsMenu
              category={ITEM_CATEGORIES.CONTACT}
              page={ROUTES.FAVORITES}
              items={favoriteContacts}
              handleMainBtnClick={() => navigate(`${ROUTES.CREATE}`)}
              isMultiSelectOpen={isMultiSelectOpen}
              toggleMultiSelect={toggleMultiSelect}
              selectedItems={selectedItems}
              resetSelectedItems={resetSelectedItems}
              handleSelectAllClick={handleSelectAllClick}
            />

            {filteredFavoritesContacts?.length ? (
              <ItemsList
                items={filteredFavoritesContacts}
                renderItem={renderContact}
                page={ROUTES.FAVORITES}
              />
            ) : isFiltered ? (
              <Notification
                message={`No contacts found matching your search criteria for names or numbers containing '${filter}'`}
              />
            ) : (
              <Notification message="There are no contacts in your favorites now" />
            )}
          </ContentWrapper>
        </Section>
      </Main>
    </>
  );
};

export default Favorites;
