/**
 * 
 * Function to determine if HTML element is hovered
 * 
 * @param {HTMLElement} node - HTML node that we need to inspect
 * 
 * @returns {[(HTMLElement | null) => void}, boolean]} array, 
 * first element is callback ref function,
 * second element whether or not the element is hovered
 * 
 * @example
 * const ExampleComponent = () => {
 *   const [hoverRef, isHovered] = useHover();
 *   return (
 *      <div ref={hoverRef}> {isHovered ? 'I am hovered': 'Not hovered'}</div>
 *   )
 * }
 */

import { useState, useCallback, useRef } from 'react';

export const useHover = <T extends HTMLElement>(): [
  (node?: T | null) => void,
  boolean,
] => {
  const [value, setValue] = useState<boolean>(false);

  const handleMouseOver = useCallback(() => setValue(true), []);
  const handleMouseOut = useCallback(() => setValue(false), []);

  /**
   * Keep track of the last node passed to callbackRef.
   * Based on that we will remove event listerens.
   */

  const ref = useRef<T>();

  /**
   * useEffect changes to ref.current would not cause a rerender and the effect would run again.
   * With a callback ref the event listeners get's changed
   */

  const callbackRef = useCallback<(node?: null | T) => void>(
    (node) => {
      if (ref.current) {
        ref.current.removeEventListener('mouseover', handleMouseOver);
        ref.current.removeEventListener('mouseout', handleMouseOut);
      }

      ref.current = node || undefined;

      if (ref.current) {
        ref.current.addEventListener('mouseover', handleMouseOver);
        ref.current.addEventListener('mouseout', handleMouseOut);
      }
    },
    [handleMouseOver, handleMouseOut],
  );

  return [callbackRef, value];
};
