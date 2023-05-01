import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';
import PropTypes from 'prop-types';
import { ROUTES } from 'constants';
const route = ROUTES.ROOT;

export const RestrictedRoute = ({
  component: Component,
  redirectTo = { route },
}) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

RestrictedRoute.propTypes = {
  component: PropTypes.element.isRequired,
  redirectTo: PropTypes.string.isRequired,
};
