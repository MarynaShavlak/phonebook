import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Select from 'react-select';
import { AppBar } from 'components';
import { Section } from 'shared';
import {
  selectGroups,
  deleteContactFromGroup,
  addContactToGroup,
} from 'redux/groups';
import { selectContacts, fetchContacts } from 'redux/contacts';
import {
  ContentWrapper,
  BackButton,
  Text,
} from 'shared/commonStyledComponents.jsx';
import {
  GroupsList,
  GroupButton,
} from 'components/AddContactToGroupModal/AddContactToGroupModal.styled';
import { renderIcons, convertHyphenatedString } from 'utils';
import { ICON_NAMES, ICON_SIZES } from 'constants';

const ManageGroupMember = () => {
  const dispatch = useDispatch();
  const { groupName } = useParams();

  const allContacts = useSelector(selectContacts);
  const groups = useSelector(selectGroups);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const choseContactToAddInGroup = contact => {
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

    if (isSelected) {
      setContactsToAdd(contactsToAdd.filter(el => el.id !== contact.id));
      dispatch(
        deleteContactFromGroup({
          group: originalGroupName,
          contact,
        })
      );
    }
  };

  const contactsInGroup = useMemo(
    () => getContactsByGroupName({ groupName, groups }),
    [groupName, groups]
  );
  const contactsToSelect = useMemo(
    () =>
      getContactsToSelect({
        contactsInGroup,
        allContacts,
      }),
    [contactsInGroup, allContacts]
  );
  const originalGroupName = useMemo(
    () => getOriginalGroupName(groupName),
    // eslint-disable-next-line
    [groupName]
  );
  const [contactsToAdd, setContactsToAdd] = useState(contactsInGroup);
  const [initialContactsInGroup, setInitialContactsInGroup] = useState([]);

  useEffect(() => {
    setInitialContactsInGroup(contactsInGroup);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const contactsNames = initialContactsInGroup.map(contact => contact.name);

  const options = contactsToSelect.map(contact => ({
    label: `${contact.name}: ${contact.number} `,
    value: contact,
  }));

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: `2px solid #fab7d2`,
      borderСщдщк: `#fab7d2`,
      borderRadius: '10px',
      '&:hover': {
        borderColor: '#ef4287',
      },
      boxShadow: null,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#fde7f0' : null,
      color: state.isSelected ? '#100f10' : null,
    }),
  };

  return (
    <>
      <AppBar />
      <main>
        <Section>
          <ContentWrapper>
            <BackButton to="/groups">
              <button type="button" aria-label="Back to previous page">
                {renderIcons(ICON_NAMES.BACK_ARROW, ICON_SIZES.LARGE)}
              </button>
            </BackButton>
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
                styles={customStyles}
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
    </>
  );
};

export default ManageGroupMember;
