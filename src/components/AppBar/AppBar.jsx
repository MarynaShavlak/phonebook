import { Navigation, UserMenu } from 'components';
import { Header } from './AppBar.styled';
import { StyledAppBar } from './AppBar.styled';
import { useAuth } from 'hooks';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <Header>
        <StyledAppBar>
          <Navigation />
          {isLoggedIn && <UserMenu />}
        </StyledAppBar>
      </Header>
    </>
  );
};
