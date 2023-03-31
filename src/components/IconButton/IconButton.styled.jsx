import styled from 'styled-components';

export const IconButtonStyled = styled.button`
  display: flex;
  column-gap: 10px;
  min-width: 40px;
  align-self: center;
  align-items: center;
  padding: 10px 10px;
  background-color: #fde7f0;
  color: black;
  border: 5px solid transparent;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 800;
  box-shadow: 5px 5px 8px 1px rgba(112, 111, 111, 1);
  cursor: pointer;
  transition: 250ms background-color cubic-bezier(0.4, 0, 0.2, 1),
    250ms color cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #f787b4;
    color: white;
  }
`;
