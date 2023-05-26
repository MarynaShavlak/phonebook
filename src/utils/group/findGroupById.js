export const findGroupById = (id, groups) => {
  return groups.find(group => group.id === id);
};
