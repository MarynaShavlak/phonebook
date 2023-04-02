import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import Select from 'react-select';
import { Section, IconButton } from 'components';
import { selectContacts } from 'redux/contacts';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { ContentWrapper } from 'pages/Contacts/Contacts.styled';
import { Text } from './ManageGroupMember.styled';
import { renderIcons } from 'utils/';
import { iconSize } from 'constants';

const ManageGroupMember = () => {
  const { groupName } = useParams();
  const dispatch = useDispatch();
  console.log('groupName: ', groupName);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  // console.log('contactsInGroup: ', contactsInGroup);
  const location = useLocation();
  const backLinkHref = '/groups';
  const [contactsToAdd, setContactsToAdd] = useState([]);
  const allContacts = useSelector(selectContacts);

  // const addContactToGroupList = () => {

  // };

  // const choseContactToAdd = contact => {
  //   console.log(contact);
  //   setContactsToAdd(prevContacts => [...prevContacts, contact]);
  // };

  // const getContactsToSelect = ({ contactsInGroup, allContacts }) => {
  //   // console.log('contactsInGroup: ', contactsInGroup);
  //   const contactIds = new Set(contactsInGroup.map(c => c.id));

  //   return allContacts.filter(c => !contactIds.has(c.id));
  // };
  // const contactsToSelect = getContactsToSelect({
  //   contactsInGroup,
  //   allContacts,
  // });
  // const names = contactsInGroup.map(contact => contact.name);

  // const options = contactsToSelect.map(contact => ({
  //   label: `${contact.name}: ${contact.number} `,
  //   value: contact,
  // }));

  return (
    <main>
      <Section>
        <ContentWrapper>
          <Link to={backLinkHref}>
            <IconButton aria-label="Back to previous page">
              {renderIcons('back', iconSize.sm)}
            </IconButton>
          </Link>{' '}
          <>
            <Text>
              The following contacts have already been added to the group:{' '}
              {/* <b>{names.join(', ')}</b> */}
            </Text>
            {/* <Text>
              Chose contacts to add to the group <b>"{group.name}"</b>
            </Text>
            <Select
              options={options}
              onChange={option => choseContactToAdd(option.value)}
            /> */}
          </>
        </ContentWrapper>
      </Section>
    </main>
    // <ConfirmationModal
    //   isOpen={isOpen}
    //   onClose={onClose}
    //   action={action}
    //   onConfirm={addContactToGroupList}
    // >
    //   <>
    //     <Text>
    //       The following contacts have already been added to the group:{' '}
    //       <b>{names.join(', ')}</b>
    //     </Text>
    //     <Text>
    //       Chose contacts to add to the group <b>"{group.name}"</b>
    //     </Text>
    //     <Select
    //       options={options}
    //       onChange={option => choseContactToAdd(option.value)}
    //     />
    //   </>
    // </ConfirmationModal>
  );
};

// GroupMemberAdder.propTypes = {
//   contact: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default ManageGroupMember;
