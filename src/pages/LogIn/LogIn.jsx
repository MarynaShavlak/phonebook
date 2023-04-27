import React from 'react';
import { LogInForm } from 'components';

import {
  Wrapper,
  Content,
  SignUpLink,
  RedirectLink,
  ImageWrap,
} from './LogIn.styled';
import Logo from './images/phone-genie.png';

import useMediaQuery from '@mui/material/useMediaQuery';

const LogIn = () => {
  const isTablet = useMediaQuery('(min-width:768px)');
  return (
    <Wrapper>
      <Content>
        <LogInForm />
        <RedirectLink>
          Haven't an account yet?{' '}
          <SignUpLink to="/register">Sign Up </SignUpLink>
        </RedirectLink>
        {isTablet && (
          <ImageWrap>
            <img src={Logo} alt="logo" />

            <p>
              Phone Genie is grateful to be your preferred contacts book and
              wishes you a delightful experience using our app!
            </p>
          </ImageWrap>
        )}
      </Content>
    </Wrapper>
  );
};

export default LogIn;
