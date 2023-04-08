import useMediaQuery from '@mui/material/useMediaQuery';
import {
  Menu,
  NavigationList,
  NavigationLink,
  PhoneLogo,
} from './Navigation.styled';
import { renderIcons } from 'utils';
import { useAuth } from 'hooks';
import Logo from './images/phone-genie-logo.png';
import { Link } from 'react-router-dom';
import { OPERATION_TYPES } from 'constants';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const isLargeScreen = useMediaQuery('(min-width:1200px)');
  const isTablet = useMediaQuery('(min-width:768px)');
  return (
    <Menu>
      {isTablet && (
        <Link to="/">
          {' '}
          <PhoneLogo src={Logo} alt="logo" />
        </Link>
      )}

      <NavigationList>
        <li>
          <NavigationLink to="/">
            {renderIcons('home', 20)}
            {isLargeScreen && <span>Home</span>}
          </NavigationLink>
        </li>
        {isLoggedIn && (
          <>
            {' '}
            <li>
              <NavigationLink to="/contacts">
                {renderIcons('contact', 20)}
                {isLargeScreen && <span>Contacts</span>}
              </NavigationLink>
            </li>
            <li>
              <NavigationLink to="/favorites">
                {renderIcons('favorite', 20)}
                {isLargeScreen && <span>Favorites</span>}
              </NavigationLink>
            </li>
            <li>
              <NavigationLink to="/groups">
                {renderIcons('group', 20)}
                {isLargeScreen && <span>Groups</span>}
              </NavigationLink>
            </li>
            <li>
              <NavigationLink to="/recyclebin">
                {renderIcons(OPERATION_TYPES.DELETE, 20)}
                {isLargeScreen && <span>Recycle Bin</span>}
              </NavigationLink>
            </li>
          </>
        )}
      </NavigationList>
    </Menu>
  );
};
