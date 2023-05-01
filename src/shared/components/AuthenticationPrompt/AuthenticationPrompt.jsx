import React from 'react';
import PropTypes from 'prop-types';
import { RedirectLink } from './AuthenticationPrompt.styled';
import { ROUTES } from 'constants';

export const AuthenticationPrompt = ({ path }) => {
  const route = `${ROUTES.ROOT + ROUTES.LOGIN}`;
  const message =
    path === route ? 'Have an account?' : "Haven't an account yet?";
  const linkText = path === route ? 'Log In' : 'Sign Up';
  return (
    <p>
      {message} <RedirectLink to={path}>{linkText}</RedirectLink>
    </p>
  );
};

AuthenticationPrompt.propTypes = {
  path: PropTypes.string.isRequired,
};
