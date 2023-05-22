import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Menu, NavigationList, NavigationLink } from './Navigation.styled';
import { renderIcons } from 'utils';
import { useAuth } from 'hooks';
import { Link } from 'react-router-dom';
import { ICON_NAMES, ICON_SIZES, ROUTES } from 'constants';
import { AppLogo } from 'components';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const isTablet = useMediaQuery('(min-width:768px)');

  return (
    <>
      {isTablet && (
        <Link to={ROUTES.ROOT}>
          {' '}
          <AppLogo />
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
                  {isTablet && <span>Contacts</span>}
                </NavigationLink>
              </li>
              <li>
                <NavigationLink to={ROUTES.ROOT + ROUTES.FAVORITES}>
                  {renderIcons(ICON_NAMES.FAVORITE, ICON_SIZES.MEDIUM)}
                  {isTablet && <span>Favorites</span>}
                </NavigationLink>
              </li>
              <li>
                <NavigationLink to={ROUTES.ROOT + ROUTES.GROUPS}>
                  {renderIcons(ICON_NAMES.GROUP, ICON_SIZES.MEDIUM)}
                  {isTablet && <span>Groups</span>}
                </NavigationLink>
              </li>
              <li>
                <NavigationLink to={ROUTES.ROOT + ROUTES.RECYCLEBIN}>
                  {renderIcons(ICON_NAMES.DELETE, ICON_SIZES.MEDIUM)}
                  {isTablet && <span>Recycle Bin</span>}
                </NavigationLink>
              </li>
            </>
          )}
        </NavigationList>
      </Menu>
    </>
  );
};
