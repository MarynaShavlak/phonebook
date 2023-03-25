import styled from 'styled-components';
import { Container } from 'components/SharedLayout/SharedLayout.styled';

export const Header = styled.header`
  /* display: flex;
  align-items: center;
  justify-content: space-between; */
  border-bottom: 4px solid #fc458e;
  margin-bottom: 40px;

  > nav {
    display: flex;
  }
`;

export const StyledAppBar = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
