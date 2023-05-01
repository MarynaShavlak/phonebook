import { ModalText } from 'shared/commonStyledComponents';

export const renderSelectedGroupsText = selectedGroups => {
  return (
    <ModalText>
      {selectedGroups.length
        ? `Contact has been included in groups: ${selectedGroups.join(', ')}`
        : `No groups have been assigned to the contact yet.`}
    </ModalText>
  );
};
