import React, { useState, useEffect } from 'react';
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
import { renderIcons } from 'utils';
import { iconSize } from 'constants';
import { useSort } from 'hooks';

export function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  const [sortOption, setSortOption] = useState(
    localStorage.getItem('sortOption') || 'ByAlphabet'
  );
  const [reverseSort, setReverseSort] = useState(
    localStorage.getItem('reverseSort') === 'true' ? true : false
  );

  useEffect(() => {
    localStorage.setItem('sortOption', sortOption);
    localStorage.setItem('reverseSort', reverseSort);
  }, [sortOption, reverseSort]);

  const { handleSortByAlphabet, handleSortByDate, sortContacts } = useSort(
    sortOption,
    reverseSort
  );
  const contactsToDisplay = sortContacts(contacts);

  const toggleAlhabetSortBtn = () => {
    setSortOption('ByAlphabet');
    setReverseSort(!reverseSort);
    handleSortByAlphabet();
  };
  const toggleDateSortBtn = () => {
    setSortOption('ByDate');
    setReverseSort(!reverseSort);
    handleSortByDate();
  };

  return (
    <>
      <SortButtons>
        <SortBtn
          onClick={toggleAlhabetSortBtn}
          aria-label="Sort contacts by alphabet"
          className={clsx({ active: sortOption === 'ByAlphabet' })}
        >
          {reverseSort
            ? renderIcons('alphaUp', 25)
            : renderIcons('alphaDown', 25)}
        </SortBtn>
        <SortBtn
          onClick={toggleDateSortBtn}
          aria-label="Sort contacts by date of create"
          className={clsx({ active: sortOption === 'ByDate' })}
        >
          {reverseSort
            ? renderIcons('dateUp', 25)
            : renderIcons('dateDown', 25)}
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
