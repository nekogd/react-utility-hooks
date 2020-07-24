/**
 * example usage
 * const ExampleComponent = () => {
 *   const [hoverRef, isHovered] = useHover();
 *   return (
 *      <div ref={hoverRef}> {isHovered ? 'I am hovered': 'Not hovered'}</div>
 *   )
 * }
 */

import { useState, useCallback, useRef } from 'react';

export const useHover = () => {
  const [value, setValue] = useState<boolean>(false);

  const handleMouseOver = useCallback(() => setValue(true), []);
  const handleMouseOut = useCallback(() => setValue(false), []);

  /**
   * Keep track of the last node passed to callbackRef.
   * Based on that we will remove event listerens.
   */

  const ref = useRef<HTMLElement | null>(null);

  /**
   * useEffect changes to ref.current would not cause a rerender and the effect would run again.
   * With a callback ref the event listeners get's changed
   */

  const callbackRef = useCallback(
    (node) => {
      if (ref.current) {
        ref.current.removeEventListener('mouseover', handleMouseOver);
        ref.current.removeEventListener('mouseout', handleMouseOut);
      }

      ref.current = node;

      if (ref.current) {
        ref.current.addEventListener('mouseover', handleMouseOver);
        ref.current.addEventListener('mouseout', handleMouseOut);
      }
    },
    [handleMouseOver, handleMouseOut],
  );

  return [callbackRef, value];
};
