import styled from 'styled-components';

export const SortButtonList = styled.div`
  display: flex;
  justify-content: end;
  background-color: ${props => props.theme.colors.mainLight};
  border-bottom: 1px solid #f787b4;
  border-top: 1px solid #f787b4;
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
    background-color: #f787b4;
    color: white;
  }

  &.active {
    background-color: #fc458e;
    color: white;
  }
`;
