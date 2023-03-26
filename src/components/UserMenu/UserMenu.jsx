import { IconButton } from 'components/IconButton';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { renderIcons } from 'utils/renderIcons';
import { iconSize } from 'constants';
import { UserMenuWrapper } from './UserMenu.styled';
import Avatar from 'react-avatar';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <UserMenuWrapper>
      <p>
        Welcome, <span>{user.name}!</span>{' '}
      </p>
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

      <IconButton aria-label="logout" onClick={() => dispatch()}>
        {renderIcons('logOut', iconSize.xs)}
        {/* Logout */}
      </IconButton>
    </UserMenuWrapper>
  );
};
