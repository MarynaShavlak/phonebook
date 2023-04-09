import styled from 'styled-components';

export const EditFormInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 10px;
  background-color: #fab7d2;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    font-size: 16px;
  }
  p {
    display: flex;
    column-gap: 10px;
  }
  p span:first-child {
    width: 100px;
    font-style: italic;
  }
`;

export const EditFormInstrc = styled.div`
  display: flex;
  p {
    padding-left: 10px;
    padding-right: 10px;
    font-size: 12px;
    line-height: 1.5;
    font-style: italic;
    text-align: justify;
    @media screen and (min-width: ${props => props.theme.devices.tablet}) {
      font-size: 14px;
    }
  }
`;
