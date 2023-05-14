import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import {
  DropdownList,
  DropdownItem,
  DropdownToggleBtn,
} from './DropdownMenu.styled';
import { renderIcons } from 'utils';
import { ICON_NAMES, ICON_SIZES, CONTACT_ACTIONS } from 'constants';

export const DropdownMenu = ({ elements, type }) => {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  const handleDropdownMenu = () => {
    setIsDropdownMenuOpen(!isDropdownMenuOpen);
  };

  const icon =
    type === CONTACT_ACTIONS.CHOOSE_OPERATION
      ? ICON_NAMES.DROP_DOWN
      : ICON_NAMES.DOTS;
  return (
    <Downshift
      isOpen={isDropdownMenuOpen}
      onOuterClick={() => setIsDropdownMenuOpen(false)}
    >
      {({ getItemProps, getMenuProps, isOpen }) => (
        <div>
          <div onClick={handleDropdownMenu}>
            <DropdownToggleBtn type="button" ariaLabel="List of operations">
              {renderIcons(icon, ICON_SIZES.MEDIUM_LARGE)}
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

DropdownMenu.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
    })
  ).isRequired,
  type: PropTypes.string,
};
