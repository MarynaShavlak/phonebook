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
            {renderIcons('home', iconSize.sm)}
            <span>Home</span>
          </NavigationLink>
        </li>
        {isLoggedIn && (
          <>
            {' '}
            <li>
              <NavigationLink to="/contacts">
                {renderIcons('contact', iconSize.sm)}
                <span>Contacts</span>
              </NavigationLink>
            </li>
            <li>
              <NavigationLink to="/favourites">
                {renderIcons('favourite', iconSize.sm)}
                <span>Favourites</span>
              </NavigationLink>
            </li>
            <li>
              <NavigationLink to="/groups">
                {renderIcons('group', iconSize.sm)}
                <span>Groups</span>
              </NavigationLink>
            </li>
            <li>
              <NavigationLink to="/recycleBin">
                {renderIcons('delete', iconSize.sm)}
                <span>Recycle Bin</span>
              </NavigationLink>
            </li>
          </>
        )}
      </NavigationList>
    </nav>
  );
};
