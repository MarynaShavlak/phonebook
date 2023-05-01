import { LabelList } from 'shared';
import { ITEM_CATEGORIES } from 'constants';

export const renderContactsToAddInGroupList = (
  contactsToAddInGroup,
  handleContactSelect
) => {
  if (!contactsToAddInGroup.length) {
    return null;
  }

  return (
    <LabelList
      items={contactsToAddInGroup}
      handleItem={handleContactSelect}
      category={ITEM_CATEGORIES.CONTACT}
    />
  );
};
