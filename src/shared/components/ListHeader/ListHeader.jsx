import React from 'react';
import PropTypes from 'prop-types';
import { clsx } from 'clsx';
import {
  InfoWrap,
  Info,
  ActionBtn,
  ActionBtnList,
} from 'shared/commonStyledComponents.jsx';
import { getTotalQuantityString, renderIcons } from 'utils';
import { ICON_NAMES, ICON_SIZES, ITEM_CATEGORIES, ROUTES } from 'constants';
import useMediaQuery from '@mui/material/useMediaQuery';

export const ListHeader = ({
  items,
  handleClick,
  handleSelectClick,
  handleSearchClick,
  category,
  activeSearchMenu,
  activeMultiSelect,
  page,
}) => {
  const isTablet = useMediaQuery('(min-width:768px)');
  const isOnFavoritesPage = page === ROUTES.FAVORITES;
  const isOnGroupsPage = page === ROUTES.GROUPS;

  const iconName =
    category === ITEM_CATEGORIES.CONTACT
      ? ICON_NAMES.ADD
      : category === ITEM_CATEGORIES.RECYCLEBIN
      ? ICON_NAMES.DELETE
      : ICON_NAMES.GROUP_ADD;
  return (
    <>
      {!isTablet && (
        <Info>
          Total quantity: <span>{getTotalQuantityString(items, category)}</span>
        </Info>
      )}
      <InfoWrap>
        {isTablet && (
          <Info>
            Total quantity:{' '}
            <span>{getTotalQuantityString(items, category)}</span>
          </Info>
        )}

        <ActionBtnList>
          {!isOnGroupsPage && (
            <ActionBtn
              type="button"
              aria-label="Open search menu"
              onClick={handleSearchClick}
              className={clsx({ active: activeSearchMenu })}
            >
              {renderIcons(ICON_NAMES.SEARCH, ICON_SIZES.MEDIUM)}
            </ActionBtn>
          )}

          <ActionBtn
            type="button"
            aria-label="Open multi-select menu"
            onClick={handleSelectClick}
            className={clsx({ active: activeMultiSelect })}
          >
            {renderIcons(ICON_NAMES.MULTI_SELECT, ICON_SIZES.MEDIUM)}
          </ActionBtn>
          {!isOnFavoritesPage && (
            <ActionBtn
              type="button"
              aria-label={
                category === ITEM_CATEGORIES.RECYCLEBIN
                  ? 'Clear recycle bin'
                  : `Add new ${category}`
              }
              onClick={handleClick}
            >
              {renderIcons(iconName, ICON_SIZES.MEDIUM)}
            </ActionBtn>
          )}
        </ActionBtnList>
      </InfoWrap>
    </>
  );
};

ListHeader.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClick: PropTypes.func.isRequired,
  handleSelectClick: PropTypes.func,
  handleSearchClick: PropTypes.func,
  category: PropTypes.oneOf(Object.values(ITEM_CATEGORIES)).isRequired,
  activeSearchMenu: PropTypes.bool,
  activeMultiSelect: PropTypes.bool,
  page: PropTypes.string,
};
