import React from 'react';
import { SignUpForm } from 'components';
import {
  SignUpLink,
  RedirectLink,
  Content,
  Wrapper,
} from 'pages/LogIn/LogIn.styled';

const SignUp = () => {
  return (
    <Wrapper>
      <Content>
        <SignUpForm />
        <RedirectLink>
          Have an account? <SignUpLink to="/login">Log In </SignUpLink>
        </RedirectLink>
      </Content>
    </Wrapper>
  );
};

export default SignUp;
