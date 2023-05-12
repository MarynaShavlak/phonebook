import { nanoid } from 'nanoid';
import { showErrorMessage } from 'utils/notifications';
import { addNewGroup } from 'redux/groups';

export const createNewGroup = async ({ name, dispatch }) => {
  const newGroup = { name, id: nanoid() };
  const result = await dispatch(addNewGroup(newGroup));
  if (result.error) {
    showErrorMessage();
    return false;
  }
  return true;
};
