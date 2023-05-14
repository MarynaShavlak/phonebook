import styled from 'styled-components';
import { TelLink } from 'shared/commonStyledComponents';

export const GroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  row-gap: ${props => props.theme.gapSize.standard};
`;
export const GroupEl = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 3px;
    background-color: ${props => props.theme.colors.hover};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:before {
    top: 0;
  }
  &:after {
    bottom: 0;
  }
  &:hover:before,
  &:hover:after {
    transform: scaleX(1);
  }
  &:hover {
    svg {
      fill: ${props => props.theme.colors.hover};
    }
  }
`;

export const Element = styled.div`
  display: flex;
  flex-grow: 1;
  column-gap: ${props => props.theme.gapSize.standard};
  align-items: center;
  font-size: ${props => props.theme.fontSize.lg};

  font-weight: 500;
`;

export const GroupAvatar = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  padding: 5px;
  margin-right: 10px;
  background-color: ${props => props.theme.colors.hover};
  color: ${props => props.theme.colors.black};
  border: 5px solid transparent;
  border-radius: ${props => props.theme.borderRadius.extra};

  font-weight: 800;
`;

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
export const ContactEl = styled.div`
  display: flex;
  flex-grow: 1;
  column-gap: ${props => props.theme.gapSize.extraSmall};
  align-items: center;
  font-size: ${props => props.theme.fontSize.md};

  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:not(:hover) {
    color: initial;
    font-weight: initial;
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
    ~ ${ContactEl} {
      color: ${props => props.theme.colors.hover};
    }
    ~ ${TelLink} {
      color: ${props => props.theme.colors.hover};
    }
  }
`;
export const DropButton = styled.button`
  display: flex;
  column-gap: ${props => props.theme.gapSize.standard};
  align-self: center;
  align-items: center;
  background-color: transparent;

  border: 1px solid transparent;
  cursor: pointer;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${props => props.theme.colors.hover};
  }
`;
