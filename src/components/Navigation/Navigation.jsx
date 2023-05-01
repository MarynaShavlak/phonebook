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
import { ICON_NAMES, ICON_SIZES, ROUTES } from 'constants';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const isDesktop = useMediaQuery('(min-width:1200px)');
  const isTablet = useMediaQuery('(min-width:768px)');
  return (
    <>
      {isTablet && (
        <Link to={ROUTES.ROOT}>
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
                <NavigationLink to={ROUTES.ROOT + ROUTES.CONTACTS}>
                  {renderIcons(ICON_NAMES.CONTACT, ICON_SIZES.MEDIUM)}
                  {isDesktop && <span>Contacts</span>}
                </NavigationLink>
              </li>
              <li>
                <NavigationLink to={ROUTES.ROOT + ROUTES.FAVORITES}>
                  {renderIcons(ICON_NAMES.FAVORITE, ICON_SIZES.MEDIUM)}
                  {isDesktop && <span>Favorites</span>}
                </NavigationLink>
              </li>
              <li>
                <NavigationLink to={ROUTES.ROOT + ROUTES.GROUPS}>
                  {renderIcons(ICON_NAMES.GROUP, ICON_SIZES.MEDIUM)}
                  {isDesktop && <span>Groups</span>}
                </NavigationLink>
              </li>
              <li>
                <NavigationLink to={ROUTES.ROOT + ROUTES.RECYCLEBIN}>
                  {renderIcons(ICON_NAMES.DELETE, ICON_SIZES.MEDIUM)}
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
