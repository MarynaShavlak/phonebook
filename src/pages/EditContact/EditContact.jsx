import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom';
import { Section, Form, IconButton, Loader } from 'components';
import { selectContacts } from 'redux/contacts/selectors';
import {
  fetchContacts,
  updateContact,
} from 'redux/contacts/contactsOperations';
import { ContentWrapper } from 'pages/Contacts/Contacts.styled';
import {
  EditFormInfo,
  EditFormInstrc,
  EditFormText,
  ContactInfo,
  ContactCategory,
} from './EditContact.styled';
import {
  renderIcons,
  Notifications,
  isExistByNumber,
  isExistByName,
} from 'utils';
import { iconSize } from 'constants';

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

    const isDuplicateContact =
      isExistByName({ newName: name, contact, contacts }) ||
      isExistByNumber({ newNumber: number, contact, contacts });

    console.log('isDuplicateContact: ', isDuplicateContact);

    if (isDuplicateContact) {
      return Notifications.showContactExistWarn(contact, updatedContact);
    }

    editContact(updatedContact);
    navigate('/contacts');
  }

  return contact ? (
    <main>
      <Section>
        <ContentWrapper>
          <Link to={backLinkHref}>
            <IconButton aria-label="Back to previous page">
              {renderIcons('back', iconSize.sm)}
            </IconButton>
          </Link>
          <>
            <EditFormInfo>
              <p>You try to edit contact with</p>
              <ContactInfo>
                <ContactCategory>Name:</ContactCategory>
                <span>
                  <b>{contact.name}</b>
                </span>
              </ContactInfo>
              <ContactInfo>
                <ContactCategory>Number:</ContactCategory>
                <span>
                  <b>{contact.number}</b>
                </span>
              </ContactInfo>
            </EditFormInfo>
            <EditFormInstrc>
              <EditFormText>
                It is allowed change only <b> name</b> OR <b>number</b>
              </EditFormText>
              <EditFormText>
                If you want to change <b> both name AND number</b>, please
                delete this contact and create new one with correct info
              </EditFormText>
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
