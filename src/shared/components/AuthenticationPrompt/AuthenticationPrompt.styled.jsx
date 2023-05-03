import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const RedirectLink = styled(NavLink)`
  color: ${props => props.theme.colors.black};
  text-decoration: underline;
  font-weight: 900;
`;
