import styled from 'styled-components';

export const SortButtonList = styled.div`
  display: flex;
  justify-content: end;
  background-color: ${props => props.theme.colors.body};
`;

export const SortBtn = styled.button`
  display: flex;
  align-self: center;
  align-items: center;
  padding: 10px;
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    /* background-color: ${props => props.theme.colors.lightAccent}; */
    color: ${props => props.theme.colors.white};
  }

  &.active {
    background-color: ${props => props.theme.colors.hover};
    color: ${props => props.theme.colors.white};
  }
`;
