import styled from 'styled-components';
import { Element } from 'shared/commonStyledComponents';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: ${props => props.theme.gapSize.medium};
  padding-left: 20px;
  li {
    position: relative;

    display: flex;
    @media screen and (min-width: ${props => props.theme.devices.tablet}) {
      width: 50%;
    }
  }
`;

export const IconButton = styled.button`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${props => props.theme.colors.hover};
    + ${Element} {
      color: ${props => props.theme.colors.hover};
    }
  }
`;
