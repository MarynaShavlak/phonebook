import React from 'react';
import { useLocation } from 'react-router-dom';
import { ContactForm, BackButton } from 'shared';
import { showContactSuccess } from 'utils/notifications';
import { CONTACT_ACTIONS } from 'constants';
import { ROUTES } from 'constants';

const AddNewContact = () => {
  const location = useLocation();
  const backLinkHref =
    location.state?.from ?? `${ROUTES.ROOT + ROUTES.CONTACTS}`;

  const successAddContact = contact => {
    showContactSuccess(CONTACT_ACTIONS.ADD, contact);
  };

  return (
    <>
      <BackButton pathTo={backLinkHref} />
      <ContactForm action={CONTACT_ACTIONS.ADD} onSubmit={successAddContact} />
    </>
  );
};

export default AddNewContact;
