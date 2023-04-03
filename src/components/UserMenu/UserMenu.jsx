import React, { useState } from 'react';
import Downshift from 'downshift';
import Avatar from 'react-avatar';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { renderIcons } from 'utils/renderIcons';
import { iconSize } from 'constants';
import {
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
      <p>
        Welcome, <span>{user.name}!</span>{' '}
      </p>
      <Downshift
        isOpen={isDropdownMenuOpen}
        onOuterClick={() => setIsDropdownMenuOpen(false)}
      >
        {({ getItemProps, getMenuProps, isOpen }) => (
          <div>
            <div onClick={handleDropdownMenu}>
              <Avatar
                size="40"
                name={user.name}
                unstyled={false}
                round="50%"
                cursor="pointer"
              />
              {renderIcons('dropDown', iconSize.xs)}
            </div>

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
                    {renderIcons('logOut', iconSize.xs)}Logout
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
