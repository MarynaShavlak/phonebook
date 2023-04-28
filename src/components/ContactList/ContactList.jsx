import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Contact, ContactSorter } from 'components';
import { ContactsList, ContactItem } from './ContactList.styled';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { useSort } from 'hooks';

export const ContactList = () => {
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
      <ContactSorter
        sortOption={sortOption}
        reverseSort={reverseSort}
        handleSortByAlphabet={toggleAlhabetSortBtn}
        handleSortByDate={toggleDateSortBtn}
      />
      <ContactsList>
        {contactsToDisplay.map(contact => (
          <ContactItem key={contact.id}>
            <Contact contact={contact} />
          </ContactItem>
        ))}
      </ContactsList>
    </>
  );
};
