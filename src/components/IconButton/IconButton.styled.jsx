import styled from 'styled-components';

export const IconButtonStyled = styled.button`
  display: flex;
  column-gap: ${props => props.theme.gapSize.standart};
  min-width: 40px;
  align-self: center;
  align-items: center;
  padding: 10px 10px;
  background-color: ${props => props.theme.colors.mainLight};
  color: ${props => props.theme.colors.black};
  border: 5px solid transparent;
  border-radius: ${props => props.theme.borderRadius.standart};
  font-size: ${props => props.theme.fontSize.xl};
  font-weight: 800;
  box-shadow: 5px 5px 8px 1px rgba(112, 111, 111, 1);
  cursor: pointer;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.white};
  }
`;
