import styled from 'styled-components';
import { Container } from 'components/SharedLayout/SharedLayout.styled';

export const Header = styled.header`
  border-bottom: 4px solid #fc458e;
  margin-bottom: 40px;

  .menu {
    display: flex;
    justify-content: space-between;
    column-gap: 80px;
  }
`;

export const StyledAppBar = styled(Container)`
  display: flex;
  align-items: center;

  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
`;
