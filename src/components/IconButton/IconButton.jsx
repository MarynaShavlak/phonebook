import PropTypes from 'prop-types';
import { IconButtonStyled } from './IconButton.styled';

export const IconButton = ({
  type = 'button',
  children,
  onClick,
  ...allyProps
}) => {
  return (
    <IconButtonStyled type={type} onClick={onClick} {...allyProps}>
      {children}
    </IconButtonStyled>
  );
};

IconButton.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  'aria-label': PropTypes.string.isRequired,
};
