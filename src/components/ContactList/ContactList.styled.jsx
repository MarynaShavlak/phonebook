import styled from 'styled-components';

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  row-gap: 10px;
`;

export const ContactItem = styled.li`
  position: relative;
  margin: 0;
  display: flex;
  /* justify-content: space-between; */
`;

export const SortButtons = styled.div`
  display: flex;
  justify-content: end;
  column-gap: 20px;
  background-color: #fde7f0;
  border-bottom: 1px solid #f787b4;
  border-top: 1px solid #f787b4;
`;

export const SortBtn = styled.button`
  display: flex;
  column-gap: 10px;
  min-width: 40px;
  align-self: center;
  align-items: center;
  padding: 10px 10px;
  background-color: transparent;
  color: black;
  border-color: transparent;

  font-size: 16px;
  font-weight: 800;
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
