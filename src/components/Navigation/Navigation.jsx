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
import { OPERATION, ICON_NAMES, iconSize } from 'constants';

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
                  {renderIcons(ICON_NAMES.CONTACT, iconSize.sm)}
                  {isDesktop && <span>Contacts</span>}
                </NavigationLink>
              </li>
              <li>
                <NavigationLink to="/favorites">
                  {renderIcons(ICON_NAMES.FAVORITE, iconSize.sm)}
                  {isDesktop && <span>Favorites</span>}
                </NavigationLink>
              </li>
              <li>
                <NavigationLink to="/groups">
                  {renderIcons(ICON_NAMES.GROUP, iconSize.sm)}
                  {isDesktop && <span>Groups</span>}
                </NavigationLink>
              </li>
              <li>
                <NavigationLink to="/recyclebin">
                  {renderIcons(OPERATION.DELETE, iconSize.sm)}
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
