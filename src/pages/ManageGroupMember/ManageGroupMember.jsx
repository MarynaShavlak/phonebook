import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectGroups } from 'redux/groups';
import { Link, useParams } from 'react-router-dom';
import Select from 'react-select';
import { Section, IconButton } from 'components';
import { selectContacts } from 'redux/contacts';
import { deleteContactFromGroup, addContactToGroup } from 'redux/groups';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { ContentWrapper } from 'pages/Contacts/Contacts.styled';
import {
  GroupsList,
  GroupButton,
} from 'components/AddContactToGroupModal/AddContactToGroupModal.styled';
import { Text } from './ManageGroupMember.styled';
import { renderIcons, convertHyphenatedString } from 'utils/';
import { iconSize } from 'constants';

const ManageGroupMember = () => {
  const dispatch = useDispatch();
  const { groupName } = useParams();

  const allContacts = useSelector(selectContacts);
  const groups = useSelector(selectGroups);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const choseContactToAddInGroup = contact => {
    console.log(contact);
    setContactsToAdd(prevContacts => [...prevContacts, contact]);
    dispatch(addContactToGroup({ group: originalGroupName, contact }));
  };

  const getContactsByGroupName = ({ groupName, groups }) => {
    const convertedName = convertHyphenatedString(groupName);
    return groups.find(group => group.name.toLowerCase() === convertedName)
      .contacts;
  };

  const getContactsToSelect = ({ contactsInGroup, allContacts }) => {
    const contactIds = new Set(contactsInGroup.map(c => c.id));
    return allContacts.filter(c => !contactIds.has(c.id));
  };
  const getOriginalGroupName = groupName => {
    const convertedName = convertHyphenatedString(groupName);
    return groups.find(group => group.name.toLowerCase() === convertedName)
      .name;
  };
  const handleContactClick = contact => {
    const isSelected = contactsToAdd.map(el => el.id).includes(contact.id);
    console.log('isSelected: ', isSelected);

    if (isSelected) {
      setContactsToAdd(contactsToAdd.filter(el => el.id !== contact.id));
      dispatch(
        deleteContactFromGroup({
          group: originalGroupName,
          contact,
        })
      );
    }
    //  } else {
    //    setSelectedGroups([...selectedGroups, groupName]);
    //    dispatch(addContactToGroup({ group: groupName, contact }));
    //  }
  };

  const contactsInGroup = getContactsByGroupName({ groupName, groups });
  const contactsToSelect = getContactsToSelect({
    contactsInGroup,
    allContacts,
  });
  const originalGroupName = getOriginalGroupName(groupName);
  const [contactsToAdd, setContactsToAdd] = useState(contactsInGroup);
  const [initialContactsInGroup, setInitialContactsInGroup] = useState([]);

  useEffect(() => {
    setInitialContactsInGroup(contactsInGroup);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // const addContactToGroupList = () => {
  const contactsNames = initialContactsInGroup.map(contact => contact.name);
  // };

  const options = contactsToSelect.map(contact => ({
    label: `${contact.name}: ${contact.number} `,
    value: contact,
  }));

  return (
    <main>
      <Section>
        <ContentWrapper>
          <Link to="/groups">
            <IconButton aria-label="Back to previous page">
              {renderIcons('back', iconSize.sm)}
            </IconButton>
          </Link>{' '}
          <>
            {!!initialContactsInGroup.length && (
              <Text>
                The following contacts have already been added to the group :{' '}
                <b>{contactsNames.join(', ')}</b>
              </Text>
            )}

            <Text>
              Chose contacts to add to the group <b>"{originalGroupName}"</b>
            </Text>
            <Select
              options={options}
              onChange={option => choseContactToAddInGroup(option.value)}
            />
            {!!contactsToAdd.length && (
              <GroupsList>
                {contactsToAdd.map(contact => (
                  <li key={contact.id}>
                    <GroupButton
                      type="button"
                      className={
                        contactsToAdd.includes(contact) ? 'selected' : ''
                      }
                      onClick={() => handleContactClick(contact)}
                    >
                      {contact.name}: {contact.number}
                    </GroupButton>
                  </li>
                ))}
              </GroupsList>
            )}
          </>
        </ContentWrapper>
      </Section>
    </main>
  );
};

export default ManageGroupMember;
