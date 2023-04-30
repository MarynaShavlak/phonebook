import styled from 'styled-components';

export const GroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  row-gap: 10px;
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
    background-color: #ef4287;
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
      fill: #ef4287;
    }
  }
`;

export const Element = styled.div`
  display: flex;
  flex-grow: 1;
  column-gap: 10px;
  align-items: center;
  font-size: 16px;
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    font-size: 18px;
  }
  font-weight: 500;
`;

export const GroupAvatar = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  padding: 5px;
  margin-right: 10px;
  background-color: #ef4287;
  color: ${props => props.theme.colors.black};
  border: 5px solid transparent;
  border-radius: 50%;

  font-weight: 800;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 15px;
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
  column-gap: 5px;
  align-items: center;
  font-size: 14px;
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    font-size: 16px;
  }
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
    color: #ef4287;
    ~ ${ContactEl} {
      color: #ef4287;
    }
  }
`;
export const DropButton = styled.button`
  display: flex;
  column-gap: 10px;
  align-self: center;
  align-items: center;
  background-color: transparent;

  border: 1px solid transparent;
  cursor: pointer;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #ef4287;
  }
`;
