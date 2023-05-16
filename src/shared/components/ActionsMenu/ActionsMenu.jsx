import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Filter, ListHeader, MultiSelectBar } from 'shared';
import { selectContacts, fetchContacts } from 'redux/contacts';
import { useSearchMenu } from 'hooks';

export const ActionsMenu = ({
  page,
  items,
  handleMainBtnClick,
  isMultiSelectOpen,
  toggleMultiSelect,
  selectedItems,
  resetSelectedItems,
  handleSelectAllClick,
  // isSearchMenuOpen,
  // toggleSearchMenu,
}) => {
  const { isSearchMenuOpen, toggleSearchMenu } = useSearchMenu(page);
  const dispatch = useDispatch();
  const allContacts = useSelector(selectContacts);
  useEffect(() => {
    if (!allContacts) {
      dispatch(fetchContacts());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <>
      {!!items?.length && (
        <>
          <ListHeader
            items={items}
            handleMainBtnClick={handleMainBtnClick}
            handleSelectClick={toggleMultiSelect}
            handleSearchClick={toggleSearchMenu}
            activeMultiSelect={isMultiSelectOpen}
            activeSearchMenu={isSearchMenuOpen}
            page={page}
          />
          {isMultiSelectOpen && (
            <MultiSelectBar
              onSelectAllClick={handleSelectAllClick}
              selectedItems={selectedItems}
              resetSelectedItems={resetSelectedItems}
              page={page}
            />
          )}
          {isSearchMenuOpen && <Filter page={page} />}
        </>
      )}
    </>
  );
};

ActionsMenu.propTypes = {
  page: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  handleMainBtnClick: PropTypes.func.isRequired,
  isMultiSelectOpen: PropTypes.bool.isRequired,
  toggleMultiSelect: PropTypes.func.isRequired,
  selectedItems: PropTypes.array.isRequired,
  resetSelectedItems: PropTypes.func.isRequired,
  handleSelectAllClick: PropTypes.func.isRequired,
};
