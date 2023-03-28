import React from 'react';
import { ContactForm, IconButton } from 'components';
import { Section } from 'components';
import { ContentWrapper } from 'pages/Contacts/Contacts.styled';
import { Link, useLocation } from 'react-router-dom';
import { renderIcons } from 'utils/renderIcons';
import { iconSize } from 'constants';

const AddNewContact = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/contacts';
  return (
    <main>
      <Section>
        <ContentWrapper>
          <Link to={backLinkHref}>
            <IconButton aria-label="Back to previous page">
              {renderIcons('back', iconSize.sm)}
            </IconButton>
          </Link>
          <ContactForm />
        </ContentWrapper>
      </Section>
    </main>
  );
};

export default AddNewContact;
