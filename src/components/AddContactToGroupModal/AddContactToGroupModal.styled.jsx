import styled from 'styled-components';

export const GroupsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const GroupButton = styled.button`
  display: flex;
  justify-content: center;
  padding: 10px 30px;
  background-color: #fde7f0;
  color: black;
  border: 5px solid transparent;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;
  transition: 250ms background-color cubic-bezier(0.4, 0, 0.2, 1),
    250ms color cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #f787b4;
    color: white;
    box-shadow: 5px 5px 8px 1px rgba(112, 111, 111, 1);
  }
  &.selected {
    background-color: #fc458e;
  }
`;

export const ModalText = styled.p`
  font-size: 24px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 20px;
`;
