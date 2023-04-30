import React, { useState } from 'react';
import Downshift from 'downshift';
import {
  DropdownList,
  DropdownItem,
  DropdownToggleBtn,
} from './DropdownMenu.styled';
import { renderIcons } from 'utils';
import { ICON_NAMES, ICON_SIZES } from 'constants';

export const DropdownMenu = ({ elements }) => {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  const handleDropdownMenu = () => {
    setIsDropdownMenuOpen(!isDropdownMenuOpen);
  };
  return (
    <Downshift
      isOpen={isDropdownMenuOpen}
      onOuterClick={() => setIsDropdownMenuOpen(false)}
    >
      {({ getItemProps, getMenuProps, isOpen }) => (
        <div>
          <div onClick={handleDropdownMenu}>
            <DropdownToggleBtn type="button" ariaLabel="List of operations">
              {renderIcons(ICON_NAMES.DOTS, ICON_SIZES.MEDIUM)}
            </DropdownToggleBtn>
          </div>

          {isOpen && (
            <DropdownList {...getMenuProps()}>
              {elements.map((element, index) => (
                <DropdownItem
                  key={index}
                  className="operation"
                  {...getItemProps({ item: element.label })}
                >
                  {element.icon}
                </DropdownItem>
              ))}
            </DropdownList>
          )}
        </div>
      )}
    </Downshift>
  );
};
