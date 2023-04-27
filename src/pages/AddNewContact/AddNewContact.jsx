import React from 'react';
import { ContactForm } from 'components';
import { Section } from 'components';
import { ContentWrapper } from 'pages/Contacts/Contacts.styled';
import { useLocation } from 'react-router-dom';
import { renderIcons } from 'utils/renderIcons';
import { BackButton } from 'components/Form/Form.styled';
import { AppBar } from 'components/AppBar/AppBar';

const AddNewContact = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/contacts';

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
            <ContactForm action="Add new contact" />
          </ContentWrapper>
        </Section>
      </main>
    </>
  );
};

export default AddNewContact;
