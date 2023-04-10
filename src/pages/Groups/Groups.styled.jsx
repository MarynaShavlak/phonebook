import styled from 'styled-components';
// import { getRandomColors } from 'utils/getRandomColor';

export const GroupsList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 10px;
`;

export const GroupItem = styled.li`
  position: relative;
  margin: 0;
  display: flex;
`;
export const AddNewGroupBtn = styled.button`
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
