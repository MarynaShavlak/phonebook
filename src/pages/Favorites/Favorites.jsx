import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectFavoritesContacts } from 'redux/favorites';
import { FavoriteContact, AppBar } from 'components';
import { Section, ActionsMenu, ItemsListSection } from 'shared';
import { ContentWrapper, Main } from 'shared/commonStyledComponents.jsx';
import { ROUTES } from 'constants';
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
      <AppBar />
      <Main>
        <Section>
          <ContentWrapper>
            <ActionsMenu
              page={ROUTES.FAVORITES}
              items={favoriteContacts}
              handleMainBtnClick={() => navigate(`${ROUTES.CREATE}`)}
              isMultiSelectOpen={isMultiSelectOpen}
              toggleMultiSelect={toggleMultiSelect}
              selectedItems={selectedItems}
              resetSelectedItems={resetSelectedItems}
              handleSelectAllClick={handleSelectAllClick}
            />
            <ItemsListSection
              page={ROUTES.FAVORITES}
              renderContact={renderContact}
            />
          </ContentWrapper>
        </Section>
      </Main>
    </>
  );
};

export default Favorites;
