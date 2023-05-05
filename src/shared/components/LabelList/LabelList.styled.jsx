import styled from 'styled-components';
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.gapSize.standart};
`;

export const LabelButton = styled.button`
  display: flex;
  justify-content: center;
  padding: 5px;
  background-color: ${props => props.theme.colors.main};
  color: ${props => props.theme.colors.black};
  border: 5px solid transparent;
  border-radius: ${props => props.theme.borderRadius.standart};
  font-weight: 800;
  /* box-shadow: 5px 5px 8px 1px rgba(112, 111, 111, 1); */
  cursor: pointer;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &.selected {
    background-color: ${props => props.theme.colors.error};
    color: ${props => props.theme.colors.white};
    box-shadow: 5px 5px 8px 1px rgba(112, 111, 111, 1);
  }

  font-size: ${props => props.theme.fontSize.xxs};
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    font-size: ${props => props.theme.fontSize.xs};

    &:hover {
      background-color: ${props => props.theme.colors.error};
      color: ${props => props.theme.colors.white};
      box-shadow: 5px 5px 8px 1px rgba(112, 111, 111, 1);
    }
  }
`;
