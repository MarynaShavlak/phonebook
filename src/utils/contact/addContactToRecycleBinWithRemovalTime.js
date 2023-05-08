import { addContactToRecycleBin } from 'redux/recycleBin';
import { getCurrentTime } from 'utils';

export const addContactToRecycleBinWithRemovalTime = (contact, dispatch) => {
  const removalTime = getCurrentTime();
  dispatch(addContactToRecycleBin({ ...contact, removalTime }));
};
