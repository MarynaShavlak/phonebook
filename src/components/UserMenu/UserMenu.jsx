import React, { useState } from 'react';
import Downshift from 'downshift';
import Avatar from 'react-avatar';
import useMediaQuery from '@mui/material/useMediaQuery';

import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { renderIcons } from 'utils';
import { ICON_NAMES, iconSize } from 'constants';
import {
  AvatarWrap,
  UserMenuWrapper,
  DropdownMenu,
  DropdownMenuItem,
  LogoutButton,
} from './UserMenu.styled';
import { clearRecycleBin } from 'redux/recycleBin/recycleBinSlice';
import { clearFavourites } from 'redux/favorites/favoritesSlice';
import { clearGroups } from 'redux/groups/groupsSlice';
import { userLogOut } from 'redux/auth/authOperations';

export const UserMenu = () => {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  const isTablet = useMediaQuery('(min-width:768px)');

  const dispatch = useDispatch();
  const { user } = useAuth();

  function handleDropdownMenu() {
    setIsDropdownMenuOpen(!isDropdownMenuOpen);
  }

  function onLogout() {
    dispatch(clearFavourites());
    dispatch(clearGroups());
    dispatch(clearRecycleBin());
    dispatch(userLogOut());
  }

  return (
    <UserMenuWrapper>
      {isTablet && (
        <p>
          Welcome, <span>{user.name}!</span>{' '}
        </p>
      )}

      <Downshift
        isOpen={isDropdownMenuOpen}
        onOuterClick={() => setIsDropdownMenuOpen(false)}
      >
        {({ getItemProps, getMenuProps, isOpen }) => (
          <div>
            <AvatarWrap onClick={handleDropdownMenu}>
              <Avatar
                size={30}
                name={user.name}
                unstyled={false}
                round="50%"
                cursor="pointer"
              />
              {renderIcons(ICON_NAMES.DROP_DOWN, iconSize.xs)}
            </AvatarWrap>

            {isOpen && (
              <DropdownMenu {...getMenuProps()}>
                <DropdownMenuItem {...getItemProps({ item: 'profile' })}>
                  Signed in with email
                  <span className="registation-info"> {user.email}</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="user-logout"
                  {...getItemProps({ item: 'logout' })}
                >
                  <LogoutButton type="button" onClick={() => onLogout()}>
                    {renderIcons(ICON_NAMES.LOG_OUT, iconSize.xs)}Logout
                  </LogoutButton>
                </DropdownMenuItem>
              </DropdownMenu>
            )}
          </div>
        )}
      </Downshift>
    </UserMenuWrapper>
  );
};
