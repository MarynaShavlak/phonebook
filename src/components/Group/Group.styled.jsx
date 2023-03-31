import styled from 'styled-components';

export const GroupEl = styled.p`
  display: flex;
  column-gap: 10px;
  align-items: center;
  font-size: 30px;
  flex-grow: 1;
  &.toDelete {
    color: red;
  }

  &.toEdit {
    color: blue;
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
