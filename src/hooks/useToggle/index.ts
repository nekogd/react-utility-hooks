import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

type IUseToggle = { toggled: boolean; handleToggled: (value?: boolean) => void };

/**
 * Hook to toggle state
 * @param {number} initialState
 *        initial value
 *
 * @return {boolean}
 *        toggled or not
 *
 * @return {()=>void}
 *        handleToggled
 *
 * @example
 *
 * const ExampleComponent = () => {
 *   const { toggled, handleToggled } = useToggle();
 *
 *   const handleClick = () => {
 *     handleToggled();
 *   }
 *
 *   return (
 *     <>
 *       <button onClick={handleClick}>toggle</button>
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

useToggle.PropTypes = {
  initialState: PropTypes.bool.isRequired,
};

useToggle.defaultProps = {
  initialState: false,
};
