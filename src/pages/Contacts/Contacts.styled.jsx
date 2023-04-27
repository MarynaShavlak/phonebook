import styled from 'styled-components';

export const AddNewContactBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f787b4;
  border: none;
  cursor: pointer;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #ef4287;
    color: white;
  }
`;

export const FilterList = styled.ul`
  display: flex;
  justify-content: space-between;
  li {
    width: calc(50% - 10px);
  }
`;
