import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Select from 'react-select';
import { AppBar } from 'components';
import { Section, BackButton } from 'shared';
import {
  selectGroups,
  deleteContactFromGroup,
  addContactToGroup,
} from 'redux/groups';
import { selectContacts, fetchContacts } from 'redux/contacts';
import { ContentWrapper, Text } from 'shared/commonStyledComponents.jsx';
import {
  getContactsByGroupName,
  getOriginalGroupName,
  getAvailableToSelectContacts,
} from 'utils';
import { showGroupManageContactsSuccess } from 'utils/notifications';
import {
  renderExistedContactsText,
  renderContactsToAddInGroupList,
} from './helpers';
import { ROUTES } from 'constants';

const ManageGroupMember = () => {
  const dispatch = useDispatch();
  const { groupName } = useParams();
  const allContacts = useSelector(selectContacts);
  const groups = useSelector(selectGroups);

  useEffect(() => {
    if (!allContacts) {
      dispatch(fetchContacts());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const choseContactToAddInGroup = contact => {
    setContactsToAddInGroup(prevContacts => [...prevContacts, contact]);
    dispatch(addContactToGroup({ group: originalGroupName, contact }));
  };

  const handleContactSelect = contact => {
    const isSelected = contactsToAddInGroup
      .map(el => el.id)
      .includes(contact.id);

    if (isSelected) {
      setContactsToAddInGroup(
        contactsToAddInGroup.filter(el => el.id !== contact.id)
      );
      dispatch(
        deleteContactFromGroup({
          group: originalGroupName,
          contact,
        })
      );
    }
  };
  const handleBackButtonClick = () =>
    showGroupManageContactsSuccess(originalGroupName, contactsInGroup);

  const contactsInGroup = useMemo(
    () => getContactsByGroupName({ groupName, groups }),
    [groupName, groups]
  );

  const contactsAvailableToSelect = useMemo(
    () => getAvailableToSelectContacts(contactsInGroup, allContacts),
    [contactsInGroup, allContacts]
  );

  const originalGroupName = useMemo(
    () => getOriginalGroupName({ groupName, groups }),
    // eslint-disable-next-line
    [groupName]
  );

  const [contactsToAddInGroup, setContactsToAddInGroup] =
    useState(contactsInGroup);
  const [existedContactsInGroup, setExistedContactsInGroup] = useState([]);

  useEffect(() => {
    setExistedContactsInGroup(contactsInGroup);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const options = contactsAvailableToSelect?.map(contact => ({
    label: `${contact.name}: ${contact.number} `,
    value: contact,
  }));

  const customStyles = {
    control: provided => ({
      ...provided,
      border: `2px solid #fab7d2`,
      borderColor: `#fab7d2`,
      borderRadius: '10px',
      '&:hover': {
        borderColor: '#ef4287',
      },
      boxShadow: null,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#fde7f0' : null,
      color: state.isSelected ? '#100f10' : null,
      fontSize: '12px',
    }),
  };

  return (
    <>
      <AppBar />
      <main>
        <Section>
          <ContentWrapper>
            <BackButton
              pathTo={ROUTES.ROOT + ROUTES.GROUPS}
              onClick={handleBackButtonClick}
            />
            <>
              {renderExistedContactsText(existedContactsInGroup)}
              <Text>
                Choose contacts to add to the group <b>"{originalGroupName}"</b>
              </Text>
              <Select
                options={options}
                onChange={option => choseContactToAddInGroup(option.value)}
                styles={customStyles}
              />

              {renderContactsToAddInGroupList(
                contactsToAddInGroup,
                handleContactSelect
              )}
            </>
          </ContentWrapper>
        </Section>
      </main>
    </>
  );
};

export default ManageGroupMember;
