import styled from 'styled-components';

export const ModalButtonsBlock = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  @media screen and (min-width: ${props => props.theme.devices.desktop}) {
    font-size: 20px;
    margin-top: 25px;
  }
  column-gap: 20px;
  li {
    flex: 1;
  }
`;

export const Button = styled.button`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 10px;
  background-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.black};
  border: 5px solid transparent;
  border-radius: 10px;
  font-size: 12px;
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    font-size: 14px;
  }
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: ${props => props.theme.colors.hover};
    color: ${props => props.theme.colors.white};
  }
`;
