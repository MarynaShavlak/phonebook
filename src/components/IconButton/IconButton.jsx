import React from 'react';
import PropTypes from 'prop-types';
import { IconButtonStyled } from './IconButton.styled';
export const IconButton = React.forwardRef((props, ref) => {
  const { children, onClick, ...allyProps } = props;
  return (
    <IconButtonStyled type="button" ref={ref} onClick={onClick} {...allyProps}>
      {children}
    </IconButtonStyled>
  );
});

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  'aria-label': PropTypes.string.isRequired,
};
