import styled from 'styled-components';

export const PhoneLogo = styled.img`
  height: 100%;
  height: 50px;
  @media screen and (min-width: ${props => props.theme.devices.desktop}) {
    height: 60px;
  }
`;
