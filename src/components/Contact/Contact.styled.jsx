import styled from 'styled-components';
export const ControlButtons = styled.div`
  display: flex;
  column-gap: 20px;
`;
export const ContactEl = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
  font-size: 24px;
  flex-grow: 1;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);

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
