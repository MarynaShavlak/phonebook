import styled from 'styled-components';
export const UserMenuWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  column-gap: 20px;
  div {
    cursor: pointer;
  }
  p {
    font-weight: 500;
    font-size: 18px;
  }
  span {
    /* color: #fc458e; */
    font-weight: 700;
  }
  .sb-avatar {
    cursor: pointer;
  }
`;
export const DropdownMenu = styled.ul`
  position: absolute;
  right: 0;
  z-index: 999;
  margin-top: 10px;
  background-color: #fde7f0;
  box-shadow: 5px 5px 8px 1px rgba(112, 111, 111, 1);
  border-radius: 5px;
  overflow: hidden;

  .user-logout {
    margin-top: 10px;
    cursor: pointer;
    transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
      background-color: #f787b4;
    }
  }
`;
export const DropdownMenuItem = styled.li`
  padding: 4px 8px;
  font-size: 12px;

  .registation-info {
    font-style: italic;
    font-size: 14px;
  }
`;

export const LogoutButton = styled.button`
  display: flex;
  column-gap: 10px;
  align-items: center;
  width: 100%;
  background-color: transparent;
  color: black;
  border: 5px solid transparent;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 800;
  transition: 250ms background-color cubic-bezier(0.4, 0, 0.2, 1),
    250ms color cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: white;
  }
`;
