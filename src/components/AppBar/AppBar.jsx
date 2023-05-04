import { Navigation, UserMenu } from 'components';
import { Header } from './AppBar.styled';
import { StyledAppBar, NavWrapper } from './AppBar.styled';
import { useAuth } from 'hooks';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <Header>
        <StyledAppBar>
          <NavWrapper>
            <Navigation />
            {isLoggedIn && <UserMenu />}
          </NavWrapper>
        </StyledAppBar>
      </Header>
    </>
  );
};
