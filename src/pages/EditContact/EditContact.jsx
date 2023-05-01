import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { Loader, AppBar, ContactEditInfoBlock } from 'components';
import { Section, ContactForm, BackButton } from 'shared';
import { ContentWrapper } from 'shared/commonStyledComponents.jsx';
import { selectContacts, fetchContacts } from 'redux/contacts';
import { showEditContactSuccess } from 'utils/notifications';
import { CONTACT_ACTIONS } from 'constants';

const EditContact = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { contactId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getContactById = ({ contactId, contacts }) => {
    return contacts.find(contact => contact.id === contactId);
  };
  const contacts = useSelector(selectContacts);
  const contact = getContactById({ contactId, contacts });
  const backLinkHref = location.state?.from ?? '/contacts';

  const successEditContact = ({ contact, updatedContact }) => {
    showEditContactSuccess(contact, updatedContact);
    navigate('/contacts');
  };
  return contact ? (
    <>
      <AppBar />
      <main>
        <Section>
          <ContentWrapper>
            <BackButton pathTo={backLinkHref} />
            <ContactEditInfoBlock contact={contact} />
            <ContactForm
              action={CONTACT_ACTIONS.EDIT}
              contact={contact}
              onSubmit={successEditContact}
            />
          </ContentWrapper>
        </Section>
      </main>
    </>
  ) : (
    <Loader />
  );
};

export default EditContact;
