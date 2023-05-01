import React from 'react';
import { SignUpForm } from 'components';
import { AuthenticationPrompt } from 'shared';
import {
  PageWrapper,
  SpecificContentWrapper,
} from 'shared/commonStyledComponents';
import { ROUTES } from 'constants';

const SignUp = () => {
  return (
    <PageWrapper>
      <SpecificContentWrapper>
        <SignUpForm />
        <AuthenticationPrompt path={ROUTES.ROOT + ROUTES.LOGIN} />
      </SpecificContentWrapper>
    </PageWrapper>
  );
};

export default SignUp;
