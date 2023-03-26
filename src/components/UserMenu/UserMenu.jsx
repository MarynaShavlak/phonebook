import React, { useState } from 'react';
import Dropdown from 'rc-dropdown';
import Menu, { MenuItem } from 'rc-menu';
// import  Menu from 'rc-dropdown';
// import Item  from 'rc-dropdown';
// import 'rc-dropdown/assets/index.css';
import { IconButton } from 'components/IconButton';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { renderIcons } from 'utils/renderIcons';
import { iconSize } from 'constants';
import { UserMenuWrapper, StyledDropdown } from './UserMenu.styled';
import Avatar from 'react-avatar';
console.log('Dropdown: ', Dropdown);
console.log('Menu: ', Menu);

export const UserMenu = () => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleMenuClick = ({ key }) => {
    if (key === 'logout') {
      console.log('logout');
      // onLogout();
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <MenuItem key="username" disabled>
        Signed in with email {user.email}
      </MenuItem>
      <MenuItem key="profile" disabled>
        {renderIcons('profile', iconSize.xs)}Profile
      </MenuItem>
      <MenuItem key="settings" disabled>
        {renderIcons('settings', iconSize.xs)}Settings
      </MenuItem>
      <MenuItem key="logout">
        {renderIcons('logOut', iconSize.xs)}Logout
      </MenuItem>
    </Menu>
  );

  return (
    <UserMenuWrapper>
      <p>
        Welcome, <span>{user.name}!</span>{' '}
      </p>
      <StyledDropdown
        visible={visible}
        onVisibleChange={v => setVisible(v)}
        overlay={menu}
        trigger={['click']}
      >
        <div>
          <Avatar
            size="40"
            name={user.name}
            unstyled={false}
            round="50%"
            cursor="pointer"
          />
          {renderIcons('dropDown', iconSize.xs)}
        </div>
      </StyledDropdown>
    </UserMenuWrapper>
  );
};
