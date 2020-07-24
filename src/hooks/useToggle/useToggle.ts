import { useState } from 'react';

export const useToggle = (
  initialValue: boolean = false,
): [boolean, (value?: boolean) => void] => {
  const [state, setState] = useState<boolean>(initialValue);
  const toggleState = (value?: boolean) => {
    if (value === undefined) {
      setState(!state);
    } else {
      setState(value);
    }
  };
  return [state, toggleState];
};
