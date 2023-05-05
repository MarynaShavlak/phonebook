import styled from 'styled-components';
// import { getRandomColors } from 'utils/getRandomColor';

export const GroupsList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: ${props => props.theme.gapSize.standart};
`;

export const GroupItem = styled.li`
  position: relative;
  margin: 0;
  display: flex;
`;
