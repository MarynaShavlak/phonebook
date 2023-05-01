import { Text } from 'shared/commonStyledComponents.jsx';

export const renderExistedContactsText = existedContacts => {
  if (!existedContacts.length) return null;
  const contactNames = existedContacts.map(contact => contact.name);
  const contactsNamesString = contactNames.join(', ');

  return (
    <Text>
      The following contacts have already been added to the group :{' '}
      <b>{contactsNamesString}</b>
    </Text>
  );
};
