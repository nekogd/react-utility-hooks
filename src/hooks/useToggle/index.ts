import { useState, useCallback } from 'react';

type IUseToggle = { toggled: boolean; handleToggled: (value?: boolean) => void };

/**
 * Hook to toggle state
 * @param {number} - initialState
 *
 * @return {boolean} toggled
 * @return {()=>void} handleToggled
 *
 * @example
 *
 * const ExampleComponent = () => {
 *   const { toggled, handleToggled } = useToggle();
 *
 *   return (
 *     <>
 *       <button onClick={handleToggled}>toggle</button>
 *       {toggled ? "visible" : "hidden"}
 *     </>
 *   );
 * };
 */

export const useToggle = (initialState = false): IUseToggle => {
  const [toggled, setToggled] = useState(initialState);
  const handleToggled = useCallback(() => setToggled((toggled) => !toggled), []);

  return { toggled, handleToggled };
};
