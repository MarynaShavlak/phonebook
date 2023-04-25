import PropTypes from 'prop-types';
import { Main } from './Layout.styled';

export function Layout({ children }) {
  return <Main>{children}</Main>;
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
