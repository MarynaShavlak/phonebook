import styled from 'styled-components';

export const Header = styled.header`
  border-bottom: 4px solid #fc458e;
  /* margin-bottom: 30px; */
`;

export const StyledAppBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 767px) {
    column-gap: 20px;
  }
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    justify-content: space-between;
  }
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
`;
