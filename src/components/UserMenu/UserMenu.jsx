import { IconButton } from 'components/IconButton';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <div>
      <p>Welcome, {user.name}</p>
      <IconButton aria-label="logout" onClick={() => dispatch()}>
        LOGOUT
      </IconButton>
    </div>
  );
};
