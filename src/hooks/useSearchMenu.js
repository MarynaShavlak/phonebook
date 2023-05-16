import { useState, useEffect } from 'react';

// export const useSearchMenu = () => {
//   const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(
//     sessionStorage.getItem('isSearchMenuOpen') === 'true'
//   );
//   console.log('isSearchMenuOpen: ', isSearchMenuOpen);

//   const toggleSearchMenu = () => {
//     setIsSearchMenuOpen(!isSearchMenuOpen);
//   };

//   useEffect(() => {
//     sessionStorage.setItem('isSearchMenuOpen', isSearchMenuOpen);
//   }, [isSearchMenuOpen]);

//   return {
//     isSearchMenuOpen,
//     toggleSearchMenu,
//   };
// };
export const useSearchMenu = route => {
  const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(() => {
    const isSearchMenuOpenState =
      JSON.parse(localStorage.getItem('isSearchMenuOpenState')) || {};
    return isSearchMenuOpenState[route] ?? false;
  });

  console.log('isSearchMenuOpen: ', isSearchMenuOpen);

  const toggleSearchMenu = () => {
    setIsSearchMenuOpen(!isSearchMenuOpen);
  };

  useEffect(() => {
    const isSearchMenuOpenState =
      JSON.parse(localStorage.getItem('isSearchMenuOpenState')) || {};
    localStorage.setItem(
      'isSearchMenuOpenState',
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
