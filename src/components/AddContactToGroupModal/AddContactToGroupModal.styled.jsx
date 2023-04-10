import styled from 'styled-components';

export const GroupsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    margin-bottom: 20px;
  }
`;

export const GroupButton = styled.button`
  display: flex;
  justify-content: center;
  padding: 5px;
  background-color: #fde7f0;
  color: black;
  border: 5px solid transparent;
  border-radius: 10px;
  font-size: 10px;

  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    font-size: 12px;
  }
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

export const ModalText = styled.p`
  font-size: 12px;
  line-height: 1.5;
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    font-size: 14px;
  }

  margin-bottom: 10px;
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    margin-bottom: 20px;
  }
`;
