import { act, renderHook } from '@testing-library/react-hooks';
import { useToggle } from '../index';

describe('useToggle tests', () => {
  it('should initialize with default value false if no initial value was passed', () => {
    const { result } = renderHook(() => useToggle());
    const { toggled } = result.current;

    expect(toggled).toBeFalsy();
  });

  it('should initialize with default value true if initial value true was passed', () => {
    const { result } = renderHook(() => useToggle(true));
    const { toggled } = result.current;

    expect(toggled).toBeTruthy();
  });

  it('should initialize with default value false if initial value false was passed', () => {
    const { result } = renderHook(() => useToggle(false));
    const { toggled } = result.current;

    expect(toggled).toBeFalsy();
  });

  it('should be the opposite value after toggle function was called', () => {
    const { result } = renderHook(() => useToggle());

    const initialValue: boolean = result.current.toggled;

    act(() => {
      result.current.handleToggled();
    });

    expect(result.current.toggled).toEqual(!initialValue);
  });

  it('should be the opposite value after toggle function was called with initialValue true', () => {
    const { result } = renderHook(() => useToggle(true));

    act(() => {
      result.current.handleToggled();
    });

    expect(result.current.toggled).toEqual(false);
  });

  it('should be the opposite value after toggle function was called with initialValue false', () => {
    const { result } = renderHook(() => useToggle(false));

    act(() => {
      result.current.handleToggled();
    });

    expect(result.current.toggled).toEqual(true);
  });
});
