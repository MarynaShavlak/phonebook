import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Select from 'react-select';
import { BackButton } from 'shared';
import {
  selectGroups,
  deleteContactFromGroup,
  addContactToGroup,
} from 'redux/groups';
import { selectContacts, fetchContacts } from 'redux/contacts';
import { Text } from 'shared/commonStyledComponents.jsx';
import { getContactsByGroupName, getAvailableToSelectContacts } from 'utils';
import { showGroupManageContactsSuccess } from 'utils/notifications';
import {
  renderExistedContactsText,
  renderContactsToAddInGroupList,
} from './helpers';
import { ROUTES } from 'constants';

const ManageGroupMember = () => {
  const dispatch = useDispatch();
  const { groupName } = useParams();
  const originalGroupName = decodeURIComponent(groupName);
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
    () => getContactsByGroupName(originalGroupName, groups),
    [originalGroupName, groups]
  );

  const contactsAvailableToSelect = useMemo(
    () => getAvailableToSelectContacts(contactsInGroup, allContacts),
    [contactsInGroup, allContacts]
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
      border: `2px solid #abe4ff`,
      borderColor: `#abe4ff`,
      borderRadius: '10px',
      '&:hover': {
        borderColor: '#f7e643',
      },
      boxShadow: null,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#feafe5' : null,
      color: state.isSelected ? '#100f10' : null,
      fontSize: '12px',
    }),
  };

  return (
    <>
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
    </>
  );
};

export default ManageGroupMember;
