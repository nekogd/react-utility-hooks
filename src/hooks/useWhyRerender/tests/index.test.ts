import { renderHook, act } from '@testing-library/react-hooks';
import { useWhyRerender } from '../index';
import { useState } from 'react';

describe('useWhyRerender', () => {
  it('should be defined', () => {
    expect(useWhyRerender).toBeDefined();
  });
  /**
   * this hook does not return anything, instead it logs into the console.
   */
  it('should work', () => {
    console.log = jest.fn();
    const setup = () =>
      renderHook(() => {
        const [count, setCount] = useState(100);
        useWhyRerender('useWhyRerenderComponent', { count });
        return {
          setCount,
        };
      });

    const hook = setup();

    act(() => {
      hook.result.current.setCount(1);
    });
    expect(console.log).toHaveBeenCalledWith(
      'WHY RERENDER:',
      'useWhyRerenderComponent',
      {
        count: {
          from: 100,
          to: 1,
        },
      },
    );
  });

  it('should support component props', () => {});
});
