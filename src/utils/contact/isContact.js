export const isContact = data => {
  if (
    typeof data === 'object' &&
    data !== null &&
    'id' in data &&
    'name' in data &&
    'number' in data &&
    ('removalTime' in data || data.removalTime === undefined)
  ) {
    return true;
  } else {
    return false;
  }
};
