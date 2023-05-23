import styled from 'styled-components';
import { Element } from 'shared/commonStyledComponents';

export const ControlButtons = styled.div`
  display: flex;
  column-gap: ${props => props.theme.gapSize.large};
`;
export const ContactEl = styled(Element)`
  font-size: ${props => props.theme.fontSize.md};
`;

export const Time = styled.p`
  display: flex;
  column-gap: ${props => props.theme.gapSize.extraSmall};
  padding-left: 40px;
  align-items: center;
  font-size: ${props => props.theme.fontSize.xxs};
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    font-size: ${props => props.theme.fontSize.xs};
  }
`;
