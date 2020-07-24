import { useState } from 'react';

export const useToggle = (
  initialValue: boolean = false,
): [boolean, (value?: boolean) => void] => {
  const [toggled, setToggled] = useState<boolean>(initialValue);
  const toggleState = (value?: boolean) => {
    if (value === undefined) {
      setToggled(!toggled);
    } else {
      setToggled(value);
    }
  };
  return [toggled, toggleState];
};
