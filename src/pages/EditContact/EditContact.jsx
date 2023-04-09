import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { Section, Form, Loader } from 'components';
import { selectContacts } from 'redux/contacts/selectors';
import {
  fetchContacts,
  updateContact,
} from 'redux/contacts/contactsOperations';
import { ContentWrapper } from 'pages/Contacts/Contacts.styled';
import { EditFormInfo, EditFormInstrc } from './EditContact.styled';
import {
  renderIcons,
  Notifications,
  isExistByNumber,
  isExistByName,
} from 'utils';
import { BackButton } from 'components/Form/Form.styled';

const EditContact = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { contactId } = useParams();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectContacts);
  const contact = getContactById({ contactId, contacts });
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    if (contact) {
      setName(contact.name);
      setNumber(contact.number);
    }
  }, [contact]);

  const backLinkHref = location.state?.from ?? '/contacts';

  function getContactById({ contactId, contacts }) {
    return contacts.find(contact => contact.id === contactId);
  }

  function editContact(updatedContact) {
    const edittedContact = { ...contact, ...updatedContact };
    dispatch(updateContact(edittedContact));
    Notifications.showEditContactSuccess(contact, updatedContact);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    name === 'name' ? setName(value) : setNumber(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (contact.name !== name && contact.number !== number) {
      return Notifications.showEditContactFailure();
    }

    if (contact.name === name && contact.number === number) {
      Notifications.showNoChangesMessage();
      return navigate('/contacts');
    }

    const updatedContact = { name, number };
    const isNameExist = isExistByName({ newName: name, contact, contacts });
    const isNumberExist = isExistByNumber({
      newNumber: number,
      contact,
      contacts,
    });
    const isDuplicate = isNameExist || isNumberExist;

    if (isDuplicate) {
      return Notifications.showContactExistWarn({
        isNameExist,
        isNumberExist,
        contact: updatedContact,
      });
    }

    editContact(updatedContact);
    navigate('/contacts');
  }

  return contact ? (
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
                Modify only one field for a contact - either the <b>name </b>or{' '}
                <b>number</b>. If you need to change both, delete the existing
                contact and create a new one.
              </p>
            </EditFormInstrc>
            <Form
              name={name}
              number={number}
              operationType="Edit contact"
              onSubmit={handleSubmit}
              onChange={handleChange}
            />
          </>
        </ContentWrapper>
      </Section>
    </main>
  ) : (
    <Loader />
  );
};

export default EditContact;
