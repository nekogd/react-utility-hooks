/**
 * Hook to toggle
 * @param (optional) - initialState {boolean}
 * 
 * @returns toggled {boolean}
 * @returns handleToggled {fn}
 *   
 * Example usage
 * 
 * import { useToggle } from '@nekogd/react-utility-hooks';
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

import { useState, useCallback } from 'react';

type IuseToggle = { toggled: boolean; handleToggled: (value?: boolean) => void };

export const useToggle = (initialState = false): IuseToggle => {
  const [toggled, setToggled] = useState(initialState);
  const handleToggled = useCallback(() => setToggled((toggled) => !toggled), []);

  return { toggled, handleToggled };
};
