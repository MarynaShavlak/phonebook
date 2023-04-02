import styled from 'styled-components';
// import { getRandomColors } from 'utils/getRandomColor';

export const GroupsList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 30px;
`;

export const GroupItem = styled.li`
  position: relative;
  margin: 0;
  display: flex;
`;
export const AddNewGroupBtn = styled.button`
  position: absolute;
  top: -20px;
  right: 0;
  border-radius: 50%;
  display: flex;
  column-gap: 10px;
  min-width: 40px;
  align-self: center;
  align-items: center;
  padding: 10px 10px;
  background-color: #f787b4;
  color: black;
  border: 5px solid transparent;
  font-size: 20px;
  font-weight: 800;
  box-shadow: 5px 5px 8px 1px rgba(112, 111, 111, 1);
  cursor: pointer;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #ef4287;
    color: white;
  }
`;
