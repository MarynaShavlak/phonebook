import { LabelList, LabelButton } from 'shared/commonStyledComponents.jsx';

export const renderContactsToAddInGroupList = (
  contactsToAddInGroup,
  handleContactSelect
) => {
  if (!contactsToAddInGroup.length) {
    return null;
  }

  return (
    <LabelList>
      {contactsToAddInGroup.map(contact => (
        <li key={contact.id}>
          <LabelButton
            type="button"
            className={contactsToAddInGroup.includes(contact) ? 'selected' : ''}
            onClick={() => handleContactSelect(contact)}
          >
            {contact.name}: {contact.number}
          </LabelButton>
        </li>
      ))}
    </LabelList>
  );
};
