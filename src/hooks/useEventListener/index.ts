/**
 * Example usage 
 * const [coords, setCoords] = useState({ x: 0, y: 0 });
 * const handler = useCallback(
 * ({ clientX, clientY }) => {
 * setCoords({ x: clientX, y: clientY });
 * },[setCoords]);
 * useEventListener('mousemove', handler);
 * 
 */

import { useEffect, useRef } from 'react';
import { BasicTarget, getTargetElement } from '../../helpers';

export type Target = BasicTarget<HTMLElement | Window>;

type Options = {
  target?: Target;
  capture?: boolean;
  once?: boolean;
  passive?: boolean;
};

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
