import styled, { css } from 'styled-components';
import 'rc-dropdown/assets/index.css';
import Dropdown from 'rc-dropdown';
import Menu, { MenuItem } from 'rc-menu';

export const StyledDropdown = styled(Dropdown)`
  ${({ theme }) => css`
    /* Add custom styles for the Menu container */

    font-size: 24px;

    /* Override the default styles from rc-dropdown */

    .rc-menu {
      background-color: yellow;
      background-clip: border-box;
    }
  `}
`;

export const UserMenuWrapper = styled.div`
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
