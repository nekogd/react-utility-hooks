import { renderHook } from '@testing-library/react-hooks';
import { useSlug } from '../index';

describe('useSlug tests', () => {
  it('useSlug should be defined', () => {
    expect(useSlug).toBeDefined();
  });

  it('should return slug without latin chars', () => {
    const { result } = renderHook(() => useSlug('I should Be Slug'));
    const slug = result.current;

    expect(slug).toEqual('i-should-be-slug');
  });

  it('should return slug with polish special chars', () => {
    const { result } = renderHook(() => useSlug('Somę lątin chąrs'));
    const slug = result.current;

    expect(slug).toEqual('some-latin-chars');
  });
});
