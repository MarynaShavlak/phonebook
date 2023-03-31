import React, { useState } from 'react';
import Downshift from 'downshift';
import {
  DropdownList,
  DropdownItem,
  DropdownToggleBtn,
} from './DropdownMenu.styled';
import { renderIcons } from 'utils';

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
            <DropdownToggleBtn ariaLabel="List of operations">
              {renderIcons('dots', 30)}
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
