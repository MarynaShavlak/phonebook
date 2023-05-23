import styled from 'styled-components';

export const GroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  row-gap: ${props => props.theme.gapSize.standard};
`;
export const GroupEl = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const GroupDetails = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 3px;
    background-color: ${props => props.theme.colors.hover};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:before {
    top: 0;
  }
  &:after {
    bottom: 0;
  }
  &:hover:before,
  &:hover:after {
    transform: scaleX(1);
  }
  &:hover {
    svg {
      fill: ${props => props.theme.colors.hover};
    }
  }
`;

// export const ContactInGroup = styled(Element)`
//   font-size: ${props => props.theme.fontSize.lg};
// `;

export const GroupAvatar = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  padding: 5px;
  margin-right: 10px;
  background-color: ${props => props.theme.colors.hover};
  color: ${props => props.theme.colors.black};
  border: 5px solid transparent;
  border-radius: ${props => props.theme.borderRadius.extra};

  font-weight: 800;
`;

export const DropButton = styled.button`
  display: flex;
  column-gap: ${props => props.theme.gapSize.standard};
  align-self: center;
  align-items: center;
  background-color: transparent;

  border: 1px solid transparent;
  cursor: pointer;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${props => props.theme.colors.hover};
  }
`;
