import React from 'react';
import { DescBlock } from './AppDescription.styled';

export const AppDescription = () => {
  return (
    <DescBlock>
      <p>
        <span>Phone Genie</span> - the ultimate contact management solution.
      </p>{' '}
      <p>
        With a powerful and user-friendly interface, it's easy to create and
        organize your contacts.
      </p>
      <p>Say goodbye to endless lists of contacts and hello to convenience.</p>
      <p>
        Whether you're a busy professional or a social butterfly,{' '}
        <span>Phone Genie</span> has got you covered.
      </p>
      <p>Try it now and take control of your contact management today!</p>
    </DescBlock>
  );
};
