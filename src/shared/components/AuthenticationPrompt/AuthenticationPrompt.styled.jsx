import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const RedirectLink = styled(NavLink)`
  color: ${props => props.theme.colors.brightAccent};
  font-weight: 700;
`;
