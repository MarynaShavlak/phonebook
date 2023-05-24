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
import { ICON_NAMES, ICON_SIZES, ROUTES } from 'constants';
import useMediaQuery from '@mui/material/useMediaQuery';

export const ListHeader = ({
  items,
  handleMainBtnClick,
  handleSelectClick,
  handleSearchClick,
  activeSearchMenu,
  activeMultiSelect,
  page,
}) => {
  const isTablet = useMediaQuery('(min-width:768px)');
  const isOnFavoritesPage = page === ROUTES.FAVORITES;

  const iconName =
    page === ROUTES.CONTACTS
      ? ICON_NAMES.ADD
      : page === ROUTES.RECYCLEBIN
      ? ICON_NAMES.DELETE
      : ICON_NAMES.GROUP_ADD;
  return (
    <>
      {!isTablet && (
        <Info>
          Total quantity: <span>{getTotalQuantityString(items, page)}</span>
        </Info>
      )}
      <InfoWrap>
        {isTablet && (
          <Info>
            Total quantity: <span>{getTotalQuantityString(items, page)}</span>
          </Info>
        )}

        <ActionBtnList>
          <ActionBtn
            type="button"
            aria-label="Open search menu"
            onClick={handleSearchClick}
            className={clsx({ active: activeSearchMenu })}
          >
            {renderIcons(ICON_NAMES.SEARCH, ICON_SIZES.MEDIUM)}
          </ActionBtn>

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
                page === ROUTES.RECYCLEBIN
                  ? 'Clear recycle bin'
                  : `Add new ${page}`
              }
              onClick={handleMainBtnClick}
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
  handleMainBtnClick: PropTypes.func.isRequired,
  handleSelectClick: PropTypes.func,
  handleSearchClick: PropTypes.func,
  activeSearchMenu: PropTypes.bool,
  activeMultiSelect: PropTypes.bool,
  page: PropTypes.string,
};
