import React from 'react';
import { SignUpForm, Section } from 'components';
import {
  ContentWrapper,
  Info,
  SignUpLink,
  RedirectLink,
} from 'pages/Log/LogIn.styled';

const SignUp = () => {
  return (
    <main>
      <Section>
        <ContentWrapper>
          <Info>
            <p>
              &nbsp;&nbsp;Welcome to <span>Phone Genie</span> - the ultimate
              contact management app that simplifies the way you organize and
              communicate with your contacts.
            </p>{' '}
            <p>
              &nbsp;&nbsp;With <span>Phone Genie</span>, you can easily store
              and access all your contacts in one secure location. Whether
              you're looking for your friend's phone number, your colleague's
              email address, or your family member's home address,{' '}
              <span>Phone Genie</span> has got you covered.
            </p>
            <p>
              &nbsp;&nbsp;To get started, simply fill out the sign-up form.
              We'll guide you through the process and help you get the most out
              of <span>Phone Genie</span>.
            </p>
            <RedirectLink>
              Have an account? <SignUpLink to="/login">Log In </SignUpLink>
            </RedirectLink>
          </Info>

          <SignUpForm />
        </ContentWrapper>
      </Section>
    </main>
  );
};

export default SignUp;
