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
  margin: 0;
  display: flex;
  column-gap: 10px;
  /* justify-content: space-between; */
`;

export const Group = styled.p`
  display: flex;
  column-gap: 10px;
  align-items: center;
  font-size: 30px;
  flex-grow: 1;
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
  transition: 250ms background-color cubic-bezier(0.4, 0, 0.2, 1),
    250ms color cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #ef4287;
    color: white;
  }
`;

export const GroupAvatar = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  padding: 10px 10px;
  background-color: #f74487;
  color: black;
  border: 5px solid transparent;
  border-radius: 50%;
  font-size: 20px;
  font-weight: 800;
  cursor: pointer;
`;
