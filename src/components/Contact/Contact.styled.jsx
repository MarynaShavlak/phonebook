import styled from 'styled-components';
export const ControlButtons = styled.div`
  display: flex;
  column-gap: ${props => props.theme.gapSize.large};
`;
export const ContactEl = styled.div`
  display: flex;
  column-gap: ${props => props.theme.gapSize.standard};
  align-items: center;
  font-size: ${props => props.theme.fontSize.sm};
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    font-size: ${props => props.theme.fontSize.md};
  }
  flex-grow: 1;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  color: ${props => props.theme.colors.black};
  .marked {
    background-color: ${props => props.theme.colors.hover};
    font-weight: 700;
    border-radius: ${props => props.theme.borderRadius.small};
  }
`;

// export const Name = styled.p`
//   font-style: italic;
// `;
// export const Number = styled.p``;

export const Time = styled.p`
  display: flex;
  column-gap: ${props => props.theme.gapSize.extraSmall};
  padding-left: 40px;
  align-items: center;
  /* margin-right: 20px; */
  font-size: ${props => props.theme.fontSize.xxs};
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    font-size: ${props => props.theme.fontSize.xs};
  }
`;
