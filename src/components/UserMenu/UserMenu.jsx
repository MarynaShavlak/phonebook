// import { renderIcons } from 'utils/renderIcons';
// import { iconSize } from 'constants';
import { IconButton } from 'components/IconButton';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <div>
      <p>Welcome, {user.name}</p>
      <IconButton onClick={() => dispatch()}>LOGOUT</IconButton>
    </div>
  );
};
