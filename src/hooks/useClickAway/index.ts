import { useEffect, useCallback } from 'react';
import { getTargetElement, BasicTarget } from '../../helpers';

const defaultEvent = 'click';

type EventType = MouseEvent | TouchEvent;

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
