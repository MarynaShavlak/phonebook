export const isArrayOfContacts = data => {
  return (
    Array.isArray(data) &&
    data.every(
      obj =>
        typeof obj === 'object' &&
        !Array.isArray(obj) &&
        obj !== null &&
        'id' in obj &&
        'name' in obj &&
        'number' in obj &&
        ('removalTime' in data || data.removalTime === undefined)
    )
  );
};
