import React from 'react';
import { useLocation } from 'react-router-dom';
import { AppBar } from 'components';
import { Section, ContactForm } from 'shared';
import { ContentWrapper, BackButton } from 'shared/commonStyledComponents.jsx';
import { renderIcons } from 'utils';
import { showContactSuccess } from 'utils/notifications';
import { CONTACT_ACTIONS, OPERATION } from 'constants';

const AddNewContact = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/contacts';

  const successAddContact = contact => {
    showContactSuccess(OPERATION.ADD, contact);
  };

  return (
    <>
      <AppBar />
      <main>
        <Section>
          <ContentWrapper>
            <BackButton to={backLinkHref}>
              <button type="button" aria-label="Back to previous page">
                {renderIcons('back', 50)}
              </button>
            </BackButton>
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
