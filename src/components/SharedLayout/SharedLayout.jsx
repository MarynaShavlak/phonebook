import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  NavigationList,
  NavigationLink,
} from './SharedLayout.styled';
// import { Layout } from 'components/Layout';
import { Loader } from 'components/Loader';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <nav>
            <NavigationList>
              <li>
                <NavigationLink to="/">Home</NavigationLink>
              </li>
              <li>
                <NavigationLink to="/contacts">Contacts</NavigationLink>
              </li>
              <li>
                <NavigationLink to="/favourites">Favourites</NavigationLink>
              </li>
              <li>
                <NavigationLink to="/groups">Groups</NavigationLink>
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
