export const findContactGroupsChanges = (initialState, finalState) => {
  const removedGroups = initialState.filter(
    group => !finalState.includes(group)
  );
  const addedGroups = finalState.filter(group => !initialState.includes(group));

  let message = '';

  if (removedGroups.length > 0) {
    const removedMessage = `Contact was deleted from group${
      removedGroups.length > 1 ? 's' : ''
    } "${removedGroups.join('", "')}". `;
    message += removedMessage;
  }

  if (addedGroups.length > 0) {
    const addedMessage = `Contact was added to group${
      addedGroups.length > 1 ? 's' : ''
    } "${addedGroups.join('", "')}".`;
    message += addedMessage;
  }

  return message;
};
