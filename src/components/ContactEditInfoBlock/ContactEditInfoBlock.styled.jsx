import styled from 'styled-components';

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${props => props.theme.gapSize.standart};
  padding: 10px;
  background-color: ${props => props.theme.colors.main};
  border-radius: ${props => props.theme.borderRadius.standart};
  font-size: ${props => props.theme.fontSize.sm};
  font-weight: 600;
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    font-size: ${props => props.theme.fontSize.md};
  }
  p {
    display: flex;
    column-gap: ${props => props.theme.gapSize.standart};
  }
  p span:first-child {
    width: 100px;
    font-style: italic;
  }
`;

export const EditRules = styled.div`
  display: flex;
  p {
    padding-left: 10px;
    padding-right: 10px;
    font-size: ${props => props.theme.fontSize.xs};
    line-height: 1.5;
    font-style: italic;
    text-align: justify;
    @media screen and (min-width: ${props => props.theme.devices.tablet}) {
      font-size: ${props => props.theme.fontSize.sm};
    }
  }
`;
