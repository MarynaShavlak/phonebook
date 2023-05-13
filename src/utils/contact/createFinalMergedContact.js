export const createFinalMergedContact = ({
  selectedContacts,
  finalName,
  finalNumber,
}) => {
  const id = selectedContacts.find(contact => contact.name === finalName).id;
  return { id, name: finalName, number: finalNumber };
};
