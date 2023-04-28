import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Contact, ContactSortButtons } from 'components';
import { List, ContactItem } from './ContactList.styled';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { useSort } from 'hooks';
import { SORT_OPTIONS, LOCAL_STORAGE_KEYS } from 'constants';

const { SORT_OPTION_KEY, REVERSE_SORT_KEY } = LOCAL_STORAGE_KEYS;

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  const {
    sortOption,
    reverseSort,
    handleSortByAlphabet,
    handleSortByDate,
    sortContacts,
  } = useSort(
    localStorage.getItem(SORT_OPTION_KEY) || SORT_OPTIONS.ALPHABETICALLY,
    localStorage.getItem(REVERSE_SORT_KEY) === 'true'
  );

  useEffect(() => {
    localStorage.setItem(SORT_OPTION_KEY, sortOption);
    localStorage.setItem(REVERSE_SORT_KEY, reverseSort);
  }, [sortOption, reverseSort]);

  const sortedContacts = sortContacts(contacts);

  return (
    <>
      <ContactSortButtons
        sortOption={sortOption}
        reverseSort={reverseSort}
        handleSortByAlphabet={handleSortByAlphabet}
        handleSortByDate={handleSortByDate}
      />
      <List>
        {sortedContacts.map(contact => (
          <ContactItem key={contact.id}>
            <Contact contact={contact} />
          </ContactItem>
        ))}
      </List>
    </>
  );
};
