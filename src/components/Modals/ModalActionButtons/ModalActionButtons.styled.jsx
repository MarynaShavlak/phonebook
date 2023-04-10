import styled from 'styled-components';

export const ModalButtonsBlock = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  li {
    flex: 1;
    margin: 0;
    &:not(:last-child) {
      margin-right: 30px;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 10px 20px;
  background-color: #f787b4;
  color: black;
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
    background-color: #fc458e;
    color: white;
  }
`;
