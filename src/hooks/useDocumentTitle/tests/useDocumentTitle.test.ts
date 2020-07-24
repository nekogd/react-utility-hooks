import { renderHook } from '@testing-library/react-hooks';
import { useDocumentTitle } from '../useDocumentTitle';

describe('useDocumentTitle tests', () => {
  it('renders the hook correctly, check types and set new title', () => {
    renderHook(() => useDocumentTitle('new title'));
    expect(document.title).toBe('new title');
    expect(typeof document.title).toBe('string');
  });
});
