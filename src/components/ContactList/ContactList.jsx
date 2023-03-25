import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Contact } from 'components';
import { clsx } from 'clsx';
import {
  ContactsList,
  ContactItem,
  SortButtons,
  SortBtn,
} from './ContactList.styled';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { renderIcons } from 'utils/renderIcons';
import { iconSize } from 'constants';

export function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const [sortOption, setSortOption] = useState('ByAlphabet');

  const contactsToDisplay = useMemo(
    () =>
      [...contacts].sort((firstContact, secondContact) =>
        sortOption === 'ByAlphabet'
          ? firstContact.name.localeCompare(secondContact.name)
          : secondContact.id - firstContact.id
      ),
    [contacts, sortOption]
  );

  const sortByAlphabet = () => {
    setSortOption('ByAlphabet');
  };

  const sortByDate = () => {
    setSortOption('ByDate');
  };

  return (
    <>
      <SortButtons>
        <SortBtn
          onClick={() => sortByAlphabet()}
          aria-label="Sort contacts by date of alphabet"
          className={clsx({ active: sortOption === 'ByAlphabet' })}
        >
          {renderIcons('alphaDown', iconSize.sm)}
        </SortBtn>
        <SortBtn
          onClick={() => sortByDate()}
          aria-label="Sort contacts by date of create"
          className={clsx({ active: sortOption === 'ByDate' })}
        >
          {renderIcons('dateUp', iconSize.sm)}
        </SortBtn>
      </SortButtons>
      <ContactsList>
        {contactsToDisplay.map(contact => (
          <ContactItem key={contact.id}>
            <Contact contact={contact} />
          </ContactItem>
        ))}
      </ContactsList>
    </>
  );
}
