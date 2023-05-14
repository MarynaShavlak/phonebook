import { useState, useEffect } from 'react';

export const useSearchMenu = () => {
  const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(
    localStorage.getItem('isSearchMenuOpen') === 'true'
  );

  const toggleSearchMenu = () => {
    setIsSearchMenuOpen(!isSearchMenuOpen);
  };

  useEffect(() => {
    localStorage.setItem('isSearchMenuOpen', isSearchMenuOpen);
  }, [isSearchMenuOpen]);

  return {
    isSearchMenuOpen,
    toggleSearchMenu,
  };
};
