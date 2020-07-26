import { renderHook } from '@testing-library/react-hooks';
import { useDocumentTitle } from '../index';

describe('useDocumentTitle tests', () => {
  it('should be defined', () => {
    expect(useDocumentTitle).toBeDefined();
  });

  it('renders the hook correctly, check types and set new title', () => {
    renderHook(() => useDocumentTitle('new title'));
    expect(document.title).toBe('new title');
    expect(typeof document.title).toBe('string');
  });
});
