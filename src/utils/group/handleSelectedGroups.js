import { deleteGroup } from 'redux/groups';

export const handleSelectedGroups = async ({
  chosenGroupName,
  selectedGroups,
  dispatch,
}) => {
  const groupsToDelete = selectedGroups.filter(
    group => group.name !== chosenGroupName
  );
  await Promise.all(groupsToDelete.map(group => dispatch(deleteGroup(group))));
};
