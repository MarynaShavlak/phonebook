import styled from 'styled-components';

export const GroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  row-gap: 20px;
`;
export const GroupEl = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
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
  font-size: 24px;
  font-weight: 500;
`;

export const GroupAvatar = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  padding: 10px;
  margin-right: 10px;
  background-color: #ef4287;
  color: black;
  border: 5px solid transparent;
  border-radius: 50%;

  font-weight: 800;
`;

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 20px;

  padding-left: 60px;
  li {
    position: relative;
    width: 50%;
    display: flex;
    justify-content: space-between;
  }
`;
export const ContactEl = styled.div`
  display: flex;
  flex-grow: 1;
  column-gap: 10px;
  align-items: center;
  font-size: 18px;

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
  column-gap: 10px;

  align-self: center;
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
