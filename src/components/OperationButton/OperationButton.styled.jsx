import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  column-gap: 10px;
  align-self: center;
  align-items: center;
  padding: 15px;
  background-color: #fde7f0;
  color: black;
  border: none;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  box-shadow: 5px 5px 8px 1px rgba(112, 111, 111, 1);
  cursor: pointer;
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    font-size: 14px;
  }

  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #f787b4;
    color: white;
  }
`;
