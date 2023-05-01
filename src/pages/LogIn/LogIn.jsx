import React from 'react';
import { LogInForm } from 'components';
import { AuthenticationPrompt } from 'shared';
import Logo from './images/phone-genie.png';
import {
  PageWrapper,
  SpecificContentWrapper,
  ImageWrap,
} from 'shared/commonStyledComponents';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ROUTES } from 'constants';

const LogIn = () => {
  const isTablet = useMediaQuery('(min-width:768px)');
  return (
    <PageWrapper>
      <SpecificContentWrapper>
        <LogInForm />
        <AuthenticationPrompt path={ROUTES.ROOT + ROUTES.REGISTER} />
        {isTablet && (
          <ImageWrap>
            <img src={Logo} alt="logo" />
            <p>
              Phone Genie is grateful to be your preferred contacts book and
              wishes you a delightful experience using our app!
            </p>
          </ImageWrap>
        )}
      </SpecificContentWrapper>
    </PageWrapper>
  );
};

export default LogIn;
