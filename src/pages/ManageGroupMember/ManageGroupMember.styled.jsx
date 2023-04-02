import styled from 'styled-components';
import Select from 'react-select';

export const GroupsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
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
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #f787b4;
    color: white;
    box-shadow: 5px 5px 8px 1px rgba(112, 111, 111, 1);
  }
  &.selected {
    background-color: #bb6bd9;
  }
`;

export const Text = styled.p`
  font-size: 20px;
  padding-left: 10px;
  padding-right: 10px;
`;
