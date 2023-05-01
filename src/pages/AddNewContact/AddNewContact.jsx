import React from 'react';
import { useLocation } from 'react-router-dom';
import { AppBar } from 'components';
import { Section, ContactForm, BackButton } from 'shared';
import { ContentWrapper } from 'shared/commonStyledComponents.jsx';
import { showContactSuccess } from 'utils/notifications';
import { CONTACT_ACTIONS, OPERATION } from 'constants';
import { ROUTES } from 'constants';

const AddNewContact = () => {
  const location = useLocation();
  const backLinkHref =
    location.state?.from ?? `${ROUTES.ROOT + ROUTES.CONTACTS}`;

  const successAddContact = contact => {
    showContactSuccess(OPERATION.ADD, contact);
  };

  return (
    <>
      <AppBar />
      <main>
        <Section>
          <ContentWrapper>
            <BackButton pathTo={backLinkHref} />
            <ContactForm
              action={CONTACT_ACTIONS.ADD}
              onSubmit={successAddContact}
            />
          </ContentWrapper>
        </Section>
      </main>
    </>
  );
};

export default AddNewContact;
