import { ModalText } from 'shared/commonStyledComponents';

export const renderSelectedGroupsText = selectedGroups => {
  return (
    <ModalText>
      {selectedGroups.length
        ? `Contacts have been included in groups: ${selectedGroups.join(', ')}`
        : `No groups have been assigned to the contacts yet.`}
    </ModalText>
  );
};
