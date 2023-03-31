import styled from 'styled-components';
export const ControlButtons = styled.div`
  display: flex;
  column-gap: 20px;
`;
export const ContactEl = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
  font-size: 30px;
  flex-grow: 1;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  .marked {
    background-color: #f66fa5;
    font-weight: 700;
    border-radius: 5px;
  }
  &.toRemove,
  &.toDelete,
  .marked.toDelete {
    color: red;
  }

  &.toEdit,
  &.toRestore,
  .marked.toEdit {
    color: blue;
  }
`;

export const Name = styled.p`
  font-style: italic;
`;
export const Number = styled.p``;

export const Time = styled.p`
  display: flex;
  column-gap: 10px;
  align-items: center;
  margin-right: 20px;
`;

export const DropdownButton = styled.button`
  display: flex;
  column-gap: 10px;
  align-items: center;
  /* width: 100%; */
  background-color: transparent;
  color: black;
  border: 5px solid transparent;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 800;
  transition: 250ms background-color cubic-bezier(0.4, 0, 0.2, 1),
    250ms color cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: white;
  }
`;
