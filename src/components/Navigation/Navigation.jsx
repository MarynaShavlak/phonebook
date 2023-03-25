import { NavigationList, NavigationLink } from './Navigation.styled';
import { renderIcons } from 'utils/renderIcons';
import { iconSize } from 'constants';
import { useAuth } from 'hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <NavigationList>
        <li>
          <NavigationLink to="/">
            {renderIcons('home', iconSize.md)}Home
          </NavigationLink>
        </li>
        {isLoggedIn && (
          <>
            {' '}
            <li>
              <NavigationLink to="/contacts">
                {renderIcons('contact', iconSize.md)}Contacts
              </NavigationLink>
            </li>
            <li>
              <NavigationLink to="/favourites">
                {renderIcons('favourite', iconSize.md)}Favourites
              </NavigationLink>
            </li>
            <li>
              <NavigationLink to="/groups">
                {renderIcons('group', iconSize.md)}Groups
              </NavigationLink>
            </li>
            <li>
              <NavigationLink to="/recycleBin">
                {renderIcons('delete', iconSize.md)}Recycle Bin
              </NavigationLink>
            </li>
          </>
        )}
      </NavigationList>
    </nav>
  );
};
