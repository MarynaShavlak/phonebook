import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Filter, ListHeader, MultiSelectBar } from 'shared';
import { selectContacts, fetchContacts } from 'redux/contacts';
import { useSearchMenu } from 'hooks';

export const ActionsMenu = ({
  category,
  page,
  items,
  handleMainBtnClick,
  isMultiSelectOpen,
  toggleMultiSelect,
  selectedItems,
  resetSelectedItems,
  handleSelectAllClick,
}) => {
  const dispatch = useDispatch();
  const allContacts = useSelector(selectContacts);
  const { isSearchMenuOpen, toggleSearchMenu } = useSearchMenu();
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
            category={category}
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
