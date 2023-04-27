import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { Section, ContactForm, Loader } from 'components';
import { selectContacts } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { ContentWrapper } from 'pages/Contacts/Contacts.styled';
import { EditFormInfo, EditFormInstrc } from './EditContact.styled';
import { renderIcons } from 'utils';
import { BackButton } from 'components/Form/Form.styled';
import { AppBar } from 'components/AppBar/AppBar';
import { showEditContactSuccess } from 'utils/notifications';
import { useNavigate } from 'react-router-dom';

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
                {renderIcons('back', 50)}
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
                <p>{renderIcons('info', 25)}</p>

                <p>
                  Modify only one field for a contact - either the <b>name </b>
                  or <b>number</b>. If you need to change both, delete the
                  existing contact and create a new one.
                </p>
              </EditFormInstrc>
              <ContactForm
                action="Edit contact"
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
