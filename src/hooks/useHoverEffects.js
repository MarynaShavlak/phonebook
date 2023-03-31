import { useState } from 'react';
export const useHoverEffects = operations => {
  const initialState = operations.reduce(
    (acc, operation) => ({ ...acc, [operation]: false }),
    {}
  );

  const [isHovered, setIsHovered] = useState(initialState);

  const toggleHoverEffect = operation => {
    const newState = { ...isHovered, [operation]: !isHovered[operation] };
    setIsHovered(newState);
  };

  return {
    isHovered,
    toggleHoverEffect,
  };
};
