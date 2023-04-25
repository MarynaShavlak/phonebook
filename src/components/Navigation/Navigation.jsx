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
  const isDesktop = useMediaQuery('(min-width:1200px)');
  const isTablet = useMediaQuery('(min-width:768px)');
  return (
    <>
      {isTablet && (
        <Link to="/">
          {' '}
          <PhoneLogo src={Logo} alt="logo" />
        </Link>
      )}
      <Menu>
        <NavigationList>
          {isLoggedIn && (
            <>
              {' '}
              <li>
                <NavigationLink to="/contacts">
                  {renderIcons('contact', 30)}
                  {isDesktop && <span>Contacts</span>}
                </NavigationLink>
              </li>
              <li>
                <NavigationLink to="/favorites">
                  {renderIcons('favorite', 30)}
                  {isDesktop && <span>Favorites</span>}
                </NavigationLink>
              </li>
              <li>
                <NavigationLink to="/groups">
                  {renderIcons('group', 30)}
                  {isDesktop && <span>Groups</span>}
                </NavigationLink>
              </li>
              <li>
                <NavigationLink to="/recyclebin">
                  {renderIcons(OPERATION_TYPES.DELETE, 30)}
                  {isDesktop && <span>Recycle Bin</span>}
                </NavigationLink>
              </li>
            </>
          )}
        </NavigationList>
      </Menu>
    </>
  );
};
