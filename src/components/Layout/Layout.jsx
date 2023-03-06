import PropTypes from 'prop-types';
import {
LayoutStyled

} from './Layout.styled';

export function Layout({ children }) {
  return (
    <LayoutStyled>
      {children}
    </LayoutStyled>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}