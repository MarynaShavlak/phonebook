import React from 'react';
import { SignUpForm, Section } from 'components';
import { Wrapper } from 'pages/LogIn/LogIn.styled';
import { Info, SignUpLink, RedirectLink } from 'pages/LogIn/LogIn.styled';

const SignUp = () => {
  return (
    <main>
      <Section>
        <Wrapper>
          <Info>
            <p>
              Welcome to <span>Phone Genie</span> - the ultimate contact
              management app that simplifies the way you organize and
              communicate with your contacts.
            </p>{' '}
            <p>
              With <span>Phone Genie</span>, you can easily store and access all
              your contacts in one secure location.{' '}
            </p>
            <p>
              To get started, simply fill out the sign-up form. We'll guide you
              through the process and help you get the most out of{' '}
              <span>Phone Genie</span>.
            </p>
            <RedirectLink>
              Have an account? <SignUpLink to="/login">Log In </SignUpLink>
            </RedirectLink>
          </Info>

          <SignUpForm />
        </Wrapper>
      </Section>
    </main>
  );
};

export default SignUp;
