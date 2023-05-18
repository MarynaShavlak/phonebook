import { useState, useCallback } from 'react';

export const useLocalStorageNonString = (key, initialState) => {
  const serializedInitialState = JSON.stringify(initialState);
  let storageValue = initialState;
  try {
    storageValue = JSON.parse(localStorage.getItem(key)) ?? initialState;
  } catch {
    localStorage.setItem(key, serializedInitialState);
  }
  const [value, setValue] = useState(storageValue);
  const updatedSetValue = useCallback(
    newValue => {
      const serializedNewValue = JSON.stringify(newValue);
      if (
        serializedNewValue === serializedInitialState ||
        typeof newValue === 'undefined'
      ) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, serializedNewValue);
      }
      setValue(newValue ?? initialState);
    },
    [initialState, serializedInitialState, key]
  );
  return [value, updatedSetValue];
};
