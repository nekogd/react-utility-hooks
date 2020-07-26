import { useEffect, useRef } from 'react';
import { BasicTarget, getTargetElement } from '../../helpers';

export type Target = BasicTarget<HTMLElement | Window>;

type Options = {
  target?: Target;
  capture?: boolean;
  once?: boolean;
  passive?: boolean;
};

/**
 * @param {string} eventName - string for our event name
 * @callback handler - callback function that should be triggered once event is triggered
 * @param {Object} options - options for the event handler
 * @property {<HTMLElement= | Window>=} options.target - DOM element or Ref 
 * @property {boolean=} options.capture  - Optional, a Boolean indicating that events of this type will be dispatched 
 *                                         to the registered listener before being dispatched to any EventTarget beneath it in the DOM tree.
 * @property {boolean=} options.once     - Optional, A Boolean indicating that the listener should be invoked at most once after being added. 
 *                                         If true, the listener would be automatically removed when invoked.
 * @property {boolean=} options.passive  - Optional, A Boolean which, if true, indicates that the function specified by listener will never call preventDefault(). 
 *                                         If a passive listener does call preventDefault(), the user agent will do nothing other than generate a console warning.
 * 
 * @link https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
 * 
 * @example
 * const ExampleComponent = () => {
 *   const [coords, setCoords] = useState({ x: 0, y: 0 });
 *
 *   const handler = useCallback(
 *     ({ clientX, clientY }) => {
 *       setCoords({ x: clientX, y: clientY });
 *     },[setCoords]);
 *
 *   useEventListener('mousemove', handler);
 *
 *   return (<> x: {coords.x} and y: {coords.y} </>)
 * }
 */

export const useEventListener = (
  eventName: string,
  handler: Function,
  options?: Options,
): void => {
  const savedHandler = useRef<Function>();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const targetElement = getTargetElement(options?.target, window)!;

    const isSupported = targetElement.addEventListener;

    if (!isSupported) return;
    const eventListener = (
      event: Event,
    ): EventListenerOrEventListenerObject | AddEventListenerOptions =>
      savedHandler.current && savedHandler.current(event);

    targetElement.addEventListener(eventName, eventListener, {
      capture: options?.capture,
      once: options?.once,
      passive: options?.passive,
    });

    return () => {
      targetElement.removeEventListener(eventName, eventListener, {
        capture: options?.capture,
      });
    };
  }, [eventName, options]);
};
