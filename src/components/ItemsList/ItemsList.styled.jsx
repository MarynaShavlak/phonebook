import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: ${props => props.theme.fontSize.md};
  row-gap: ${props => props.theme.gapSize.large};
  min-width: 290px;
  @media screen and (min-width: ${props => props.theme.devices.mobile}) {
    width: 345px;
  }
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    width: 700px;
  }
  @media screen and (min-width: ${props => props.theme.devices.desktop}) {
    width: 800px;
  }
`;

export const ContactItem = styled.li`
  position: relative;
  margin: 0;
  display: flex;
  justify-content: space-between;
`;
