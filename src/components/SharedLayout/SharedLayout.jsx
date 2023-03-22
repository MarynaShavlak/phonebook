import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  NavigationList,
  NavigationLink,
} from './SharedLayout.styled';
import { Loader } from 'components/Loader';
import { renderIcons } from 'utils/renderIcons';
import { iconSize } from 'constants';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <nav>
            <NavigationList>
              <li>
                <NavigationLink to="/">
                  {renderIcons('home', iconSize.md)}Home
                </NavigationLink>
              </li>
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
            </NavigationList>
          </nav>
        </Container>
      </Header>
      <Suspense fallback={<Loader />}>
        <Container>
          <Outlet />
        </Container>
      </Suspense>
    </>
  );
};
