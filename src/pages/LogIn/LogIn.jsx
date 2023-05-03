import React from 'react';
import { LogInForm } from 'components';
import { AuthenticationPrompt } from 'shared';
import {
  PageWrapper,
  SpecificContentWrapper,
} from 'shared/commonStyledComponents';
import { ROUTES } from 'constants';

const LogIn = () => {
  return (
    <PageWrapper>
      <SpecificContentWrapper>
        <LogInForm />
        <AuthenticationPrompt path={ROUTES.ROOT + ROUTES.REGISTER} />
      </SpecificContentWrapper>
    </PageWrapper>
  );
};

export default LogIn;
