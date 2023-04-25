import styled from 'styled-components';
import { Container } from 'components/SharedLayout/SharedLayout.styled';

export const Info = styled.p`
  font-size: 16px;
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    font-size: 18px;
  }

  span {
    font-weight: 700;
  }
`;
export const InfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f787b4;
  border-top: 1px solid #f787b4;
`;
export const ContentWrapper = styled(Container)`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 0;
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

export const AddNewContactBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f787b4;
  border: none;
  cursor: pointer;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #ef4287;
    color: white;
  }
`;

export const FilterList = styled.ul`
  display: flex;
  justify-content: space-between;
  li {
    width: calc(50% - 10px);
  }
`;
