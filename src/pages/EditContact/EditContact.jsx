import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { Loader, AppBar } from 'components';
import { Section, ContactForm } from 'shared';
import { ContentWrapper, BackButton } from 'shared/commonStyledComponents.jsx';
import { EditFormInfo, EditFormInstrc } from './EditContact.styled';
import { selectContacts, fetchContacts } from 'redux/contacts';
import { renderIcons } from 'utils';
import { showEditContactSuccess } from 'utils/notifications';
import { CONTACT_ACTIONS, ICON_NAMES, ICON_SIZES } from 'constants';

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
            <BackButton to={backLinkHref}>
              <button type="button" aria-label="Back to previous page">
                {renderIcons(ICON_NAMES.BACK_ARROW, ICON_SIZES.LARGE)}
              </button>
            </BackButton>

            <>
              <EditFormInfo>
                <p>You try to edit contact with:</p>
                <p>
                  <span>Name:</span>
                  <span>
                    <b>{contact.name}</b>
                  </span>
                </p>
                <p>
                  <span>Number:</span>
                  <span>
                    <b>{contact.number}</b>
                  </span>
                </p>
              </EditFormInfo>
              <EditFormInstrc>
                <p>{renderIcons(ICON_NAMES.INFO, ICON_SIZES.MEDIUM)}</p>

                <p>
                  Modify only one field for a contact - either the <b>name </b>
                  or <b>number</b>. If you need to change both, delete the
                  existing contact and create a new one.
                </p>
              </EditFormInstrc>
              <ContactForm
                action={CONTACT_ACTIONS.EDIT}
                contact={contact}
                onSubmit={successEditContact}
              />
            </>
          </ContentWrapper>
        </Section>
      </main>
    </>
  ) : (
    <Loader />
  );
};

export default EditContact;
