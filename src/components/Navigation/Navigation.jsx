import { NavigationList, NavigationLink, PhoneLogo } from './Navigation.styled';
import { renderIcons } from 'utils';
import { useAuth } from 'hooks';
import Logo from './images/phone-genie-logo.png';
import { Link } from 'react-router-dom';
import { OPERATION_TYPES } from 'constants';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav className="menu">
      <Link to="/">
        {' '}
        <PhoneLogo src={Logo} alt="logo" />
      </Link>

      <NavigationList>
        <li>
          <NavigationLink to="/">
            {renderIcons('home', 20)}
            <span>Home</span>
          </NavigationLink>
        </li>
        {isLoggedIn && (
          <>
            {' '}
            <li>
              <NavigationLink to="/contacts">
                {renderIcons('contact', 20)}
                <span>Contacts</span>
              </NavigationLink>
            </li>
            <li>
              <NavigationLink to="/favorites">
                {renderIcons('favorite', 20)}
                <span>Favorites</span>
              </NavigationLink>
            </li>
            <li>
              <NavigationLink to="/groups">
                {renderIcons('group', 20)}
                <span>Groups</span>
              </NavigationLink>
            </li>
            <li>
              <NavigationLink to="/recyclebin">
                {renderIcons(OPERATION_TYPES.DELETE, 20)}
                <span>Recycle Bin</span>
              </NavigationLink>
            </li>
          </>
        )}
      </NavigationList>
    </nav>
  );
};
