import { useState } from 'react';
import { validateName } from 'utils';

export const useGroupName = initialValue => {
  const [groupName, setGroupName] = useState(initialValue);
  const [groupNameError, setGroupNameError] = useState(null);

  const handleNameChange = async value => {
    const errorMessage = await validateName(value);
    setGroupName(value);
    setGroupNameError(errorMessage);
  };

  return [groupName, groupNameError, handleNameChange];
};
//
