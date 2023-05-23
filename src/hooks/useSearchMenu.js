import { useState, useEffect } from 'react';
import { LOCAL_STORAGE_KEYS } from 'constants';

export const useSearchMenu = route => {
  const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(() => {
    const isSearchMenuOpenState =
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.SEARCH_MENU_STATE)) ||
      {};
    return isSearchMenuOpenState[route] ?? false;
  });

  const toggleSearchMenu = () => {
    setIsSearchMenuOpen(!isSearchMenuOpen);
  };

  useEffect(() => {
    const isSearchMenuOpenState =
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.SEARCH_MENU_STATE)) ||
      {};
    localStorage.setItem(
      LOCAL_STORAGE_KEYS.SEARCH_MENU_STATE,
      JSON.stringify({
        ...isSearchMenuOpenState,
        [route]: isSearchMenuOpen,
      })
    );
  }, [isSearchMenuOpen, route]);

  return {
    isSearchMenuOpen,
    toggleSearchMenu,
  };
};
