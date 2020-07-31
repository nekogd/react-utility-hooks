import PropTypes from 'prop-types';

/**
 * Hook to generate slugs from strings.
 * @param  {string} input
 *         string that is used to generate the slug from i.e. "I am Title"
 *
 * @return {string | null}
 *         slug generated from input i.e. "i-am-title" or null if empty value given
 *
 * @example
 *
 * const ExampleComponent = () => {
 *   const slug = useSlug('my string');
 *
 *   return (<>Slug is {slug}</>)
 * }
 *
 */

export const useSlug = (input: string): string | null => {
  const from = 'àáäâãåăąæçćęèéëêǵḧìíïîḿńǹñòóöôœøṕŕßśșțùúüûǘẃẍÿżź·/_,:;';
  const to = 'aaaaaaaaacceeeeeghiiiimnnnooooooprssstuuuuuwxyzz------';
  const regex = new RegExp(from.split('').join('|'), 'g');
  
  if (!input || typeof input !== 'string') return null;

  return input
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(regex, (character) => to.charAt(from.indexOf(character)))
    .replace(/&/g, '-and-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

useSlug.propTypes = {
  input: PropTypes.string.isRequired,
};
