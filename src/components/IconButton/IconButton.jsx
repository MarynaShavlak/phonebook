import PropTypes from 'prop-types';
import { IconButtonStyled } from './IconButton.styled';
export const IconButton = ({ children, onClick, ...allyProps }) => {
  return (
    <IconButtonStyled type="button" onClick={onClick} {...allyProps}>
      {children}
    </IconButtonStyled>
  );
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  'aria-label': PropTypes.string.isRequired,
};
