import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  width: 1200px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 4px solid #fc458e;
  margin-bottom: 40px;

  > nav {
    display: flex;
  }
`;
export const NavigationList = styled.ul`
  display: flex;
  column-gap: 20px;
  justify-content: center;
`;

export const NavigationLink = styled(NavLink)`
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding: 15px 10px;
  font-size: 30px;
  font-weight: 800;
  color: black;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &.active {
    color: white;
    background-color: #fc458e;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #f787b4;
  }
`;
