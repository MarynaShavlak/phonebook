import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { Loader, AppBar, ContactEditInfoBlock } from 'components';
import { Section, ContactForm, BackButton } from 'shared';
import { ContentWrapper } from 'shared/commonStyledComponents.jsx';
import { selectContacts, fetchContacts } from 'redux/contacts';
import { showEditContactSuccess } from 'utils/notifications';
import { getContactById } from 'utils';
import { CONTACT_ACTIONS, ROUTES } from 'constants';

const EditContact = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { contactId } = useParams();
  const navigate = useNavigate();
  const allContacts = useSelector(selectContacts);
  const contact = getContactById({ contactId, contacts: allContacts });

  useEffect(() => {
    if (!allContacts) {
      dispatch(fetchContacts());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const backLinkHref =
    location.state?.from ?? `${ROUTES.ROOT + ROUTES.CONTACTS}`;

  const successEditContact = ({ contact, updatedContact }) => {
    showEditContactSuccess(contact, updatedContact);
    navigate(`${ROUTES.ROOT + ROUTES.CONTACTS}`);
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
