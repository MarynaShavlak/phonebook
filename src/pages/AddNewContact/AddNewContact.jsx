import React from 'react';
import { ContactForm } from 'components';
import { Section } from 'components';
import { ContentWrapper } from 'pages/Contacts/Contacts.styled';

const AddNewContact = () => {
  return (
    <main>
      <Section>
        <ContentWrapper>
          <ContactForm />
        </ContentWrapper>
      </Section>
    </main>
  );
};

export default AddNewContact;
