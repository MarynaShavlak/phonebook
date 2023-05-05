import styled from 'styled-components';

export const NotificationMessage = styled.p`
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: ${props => props.theme.fontSize.sm};
  @media screen and (min-width: ${props => props.theme.devices.desktop}) {
    font-size: ${props => props.theme.fontSize.md};
  }
`;
