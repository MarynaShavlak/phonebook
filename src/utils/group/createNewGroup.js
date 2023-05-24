import { nanoid } from 'nanoid';
import { showErrorMessage } from 'utils/notifications';
import { addNewGroup } from 'redux/groups';
import { getGroupCreationTime } from 'utils';

export const createNewGroup = async ({ name, dispatch }) => {
  const currentTime = getGroupCreationTime();
  const newGroup = { name, id: nanoid(), creationTime: currentTime };
  const result = await dispatch(addNewGroup(newGroup));
  if (result.error) {
    showErrorMessage();
    return false;
  }
  return true;
};
