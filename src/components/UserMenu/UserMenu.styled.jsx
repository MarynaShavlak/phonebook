import styled from 'styled-components';

export const UserMenuWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  column-gap: ${props => props.theme.gapSize.standard};
  div {
    cursor: pointer;
  }
  p {
    display: flex;
    font-weight: 500;
    font-size: ${props => props.theme.fontSize.sm};
    @media screen and (min-width: ${props => props.theme.devices.desktop}) {
      font-size: ${props => props.theme.fontSize.md};
    }
  }
  span {
    font-weight: 700;
  }
  .sb-avatar {
    cursor: pointer;
  }
`;

export const AvatarWrap = styled.div`
  display: flex;
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  right: 0;
  z-index: 999;
  margin-top: 10px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 10px 60px rgba(0, 0, 0, 0.5);

  /* box-shadow: 5px 5px 8px 1px rgba(112, 111, 111, 1); */
  border-radius: ${props => props.theme.borderRadius.small};
  overflow: hidden;

  .user-logout {
    margin-top: 10px;
    cursor: pointer;
    transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
      background-color: ${props => props.theme.colors.accent};
    }
  }
`;
export const DropdownMenuItem = styled.li`
  padding: 4px 8px;
  font-size: ${props => props.theme.fontSize.xs};

  .registation-info {
    font-style: italic;
    font-size: ${props => props.theme.fontSize.sm};
  }
`;

export const LogoutButton = styled.button`
  display: flex;
  column-gap: ${props => props.theme.gapSize.standard};
  align-items: center;
  width: 100%;
  background-color: transparent;
  color: ${props => props.theme.colors.black};
  border: 5px solid transparent;
  border-radius: ${props => props.theme.borderRadius.standard};
  font-size: ${props => props.theme.fontSize.sm};
  font-weight: 800;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  /* &:hover {
    color: ${props => props.theme.colors.white};
  } */
`;
