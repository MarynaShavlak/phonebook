import React from 'react';
import { LogInForm, Section } from 'components';
import {} from 'components';
import { ContentWrapper, Info, SignUpLink, RedirectLink } from './LogIn.styled';

const LogIn = () => {
  return (
    <main>
      <Section>
        <ContentWrapper>
          <Info>
            <p>
              &nbsp;&nbsp;Welcome to <span>Phone Genie</span>. Please log in to
              access your contacts and enjoy all the amazing features of our
              application.
            </p>{' '}
            <p>
              &nbsp;&nbsp;If you don't have an account yet, you can easily
              create one by clicking on the <b>"Sign Up"</b> link below. Once
              you're logged in, you can start adding, editing, and managing your
              contacts with ease.
            </p>
            <p>
              &nbsp;&nbsp;If you're having trouble logging in, please make sure
              that you're using the correct email and password combination.
            </p>
            <p>
              &nbsp;&nbsp;Thank you for choosing <span>Phone Genie</span> as
              your go-to contacts book. We hope you have a great experience
              using our app!
            </p>
            <RedirectLink>
              Have an account? <SignUpLink to="/register">Sign Up </SignUpLink>
            </RedirectLink>
          </Info>

          <LogInForm />
        </ContentWrapper>
      </Section>
    </main>
  );
};

export default LogIn;
