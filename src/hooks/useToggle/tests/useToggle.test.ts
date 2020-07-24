import { act, renderHook } from '@testing-library/react-hooks';
import { useToggle } from '../useToggle';

describe('useToggle tests', () => {
  it('should initialize with default value false if no initial value was passed', () => {
    const { result } = renderHook(() => useToggle());
    const [state] = result.current;

    expect(state).toBeFalsy();
  });

  it('should initialize with default value true if initial value true was passed', () => {
    const { result } = renderHook(() => useToggle(true));
    const [state] = result.current;

    expect(state).toBeTruthy();
  });

  it('should initialize with default value false if initial value false was passed', () => {
    const { result } = renderHook(() => useToggle(false));
    const [state] = result.current;

    expect(state).toBeFalsy();
  });

  it('should be the opposite value after toggle function was called', () => {
    const { result } = renderHook(() => useToggle());

    // Save current value
    const initialValue: boolean = result.current[0];

    act(() => {
      result.current[1]();
    });

    expect(result.current[0]).toEqual(!initialValue);
  });

  it('should be the opposite value after toggle function was called with initialValue true', () => {
    const { result } = renderHook(() => useToggle(true));

    act(() => {
      result.current[1]();
    });

    expect(result.current[0]).toEqual(false);
  });

  it('should be the opposite value after toggle function was called with initialValue false', () => {
    const { result } = renderHook(() => useToggle(false));

    act(() => {
      result.current[1]();
    });

    expect(result.current[0]).toEqual(true);
  });

  it('should be the same value after toggle function was called with a given value', () => {
    const { result } = renderHook(() => useToggle());

    act(() => {
      result.current[1](true);
    });

    expect(result.current[0]).toEqual(true);
  });

  it('should be the same value after toggle function was called with a given value', () => {
    const { result } = renderHook(() => useToggle());

    act(() => {
      result.current[1](false);
    });

    expect(result.current[0]).toEqual(false);
  });
});
