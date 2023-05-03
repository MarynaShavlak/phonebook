import styled from 'styled-components';
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const LabelButton = styled.button`
  display: flex;
  justify-content: center;
  padding: 5px;
  background-color: ${props => props.theme.colors.body};
  color: ${props => props.theme.colors.black};
  border: 5px solid transparent;
  border-radius: 10px;
  font-weight: 800;
  /* box-shadow: 5px 5px 8px 1px rgba(112, 111, 111, 1); */
  cursor: pointer;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &.selected {
    background-color: ${props => props.theme.colors.error};
    color: ${props => props.theme.colors.white};
    box-shadow: 5px 5px 8px 1px rgba(112, 111, 111, 1);
  }

  font-size: 10px;
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    font-size: 12px;
  }
`;
