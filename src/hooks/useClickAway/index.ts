import { useEffect, useCallback } from 'react';
import { getTargetElement, BasicTarget } from '../../helpers';

const defaultEvent = 'click';

type EventType = MouseEvent | TouchEvent;

/**
 * Hook for handling clickAway events
 * @param {EventType} onClickAway
 * @param {BasicTarget} target
 * @param {string} eventName
 *
 * @example
 *
 * const ExampleComponent = () => {
 *
 *   const [counter, setCounter] = useState(0);
 *   const ref = useRef();
 *   useClickAway(() => {
 *     setCounter((s) => s + 1);
 *   }, ref);
 *
 *   return (
 *     <>
 *       <div>
 *         I am increasing
 *         <div ref={ref}>
 *           <button type="button">I am not increasing the counter</button>
 *         </div>
 *         <p>counter: {counter}</p>
 *       </div>
 *     </>
 *   )
 * }
 */
export const useClickAway = (
  onClickAway: (event: EventType) => void,
  target: BasicTarget,
  eventName: string = defaultEvent,
) => {
  const handler = useCallback(
    (event) => {
      const targetElement = getTargetElement(target) as HTMLElement;

      if (!targetElement || targetElement.contains(event.target)) {
        return;
      }

      onClickAway(event);
    },
    [onClickAway, typeof target === 'function' ? undefined : target],
  );

  useEffect(() => {
    document.addEventListener(eventName, handler);

    return () => {
      document.removeEventListener(eventName, handler);
    };
  }, [eventName, handler]);
};
