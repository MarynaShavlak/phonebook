import React from 'react';
import { LogInForm, Section } from 'components';
import { Wrapper, Info, SignUpLink, RedirectLink } from './LogIn.styled';
import useMediaQuery from '@mui/material/useMediaQuery';
const LogIn = () => {
  const isTablet = useMediaQuery('(min-width:768px)');
  const isMobile = useMediaQuery('(max-width:767px)');
  return (
    <main>
      <Section>
        <Wrapper>
          {isMobile && (
            <>
              <Info>
                <p>
                  Welcome to <span>Phone Genie</span>. Please log in to access
                  your contacts and enjoy all the amazing features of our
                  application.
                </p>{' '}
              </Info>
              <LogInForm />
              <Info>
                <RedirectLink>
                  Haven't an account yet?{' '}
                  <SignUpLink to="/register">Sign Up </SignUpLink>
                </RedirectLink>
                <p>
                  If you're having trouble logging in, please make sure that
                  you're using the correct email and password combination.
                </p>
                <p>
                  Thank you for choosing <span>Phone Genie</span> as your go-to
                  contacts book. We hope you have a great experience using our
                  app!
                </p>
              </Info>
            </>
          )}
          {isTablet && (
            <>
              <Info>
                <p>
                  Welcome to <span>Phone Genie</span>. Please log in to access
                  your contacts and enjoy all the amazing features of our
                  application.
                </p>{' '}
                <p>
                  If you don't have an account yet, you can easily create one by
                  clicking on the <b>"Sign Up"</b> link below. Once you're
                  logged in, you can start adding, editing, and managing your
                  contacts with ease.
                </p>
                <p>
                  If you're having trouble logging in, please make sure that
                  you're using the correct email and password combination.
                </p>
                <p>
                  Thank you for choosing <span>Phone Genie</span> as your go-to
                  contacts book. We hope you have a great experience using our
                  app!
                </p>
                <RedirectLink>
                  Haven't an account yet?{' '}
                  <SignUpLink to="/register">Sign Up </SignUpLink>
                </RedirectLink>
              </Info>

              <LogInForm />
            </>
          )}
        </Wrapper>
      </Section>
    </main>
  );
};

export default LogIn;
