import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  padding-top: 30px;
  padding-bottom: 10px;
  background: ${props => props.theme.colors.main};
`;

export const StyledAppBar = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  @media screen and (max-width: 767px) {
    column-gap: 20px;
  }
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    justify-content: space-between;
  } */
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const NavWrapper = styled.div`
  @media screen and (max-width: 767px) {
    background-color: ${props => props.theme.colors.white};
  }
  /* background-color: ${props => props.theme.colors.transparent}; */
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 20px;
  @media screen and (max-width: 767px) {
    column-gap: 20px;
  }
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    justify-content: space-between;
  }
`;
