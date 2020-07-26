/**
 * Hook to generate slugs from strings.
 * @param  {string} inputString 
 *         string that is used to generate the slug from i.e. "I am Title"
 * 
 * @return {string} 
 *         slug generated from input i.e. "i-am-title"
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

export const useSlug = (inputString: string): string => {
  const from = 'àáäâãåăąæçćęèéëêǵḧìíïîḿńǹñòóöôœøṕŕßśșțùúüûǘẃẍÿżź·/_,:;';
  const to = 'aaaaaaaaacceeeeeghiiiimnnnooooooprssstuuuuuwxyzz------';
  const regex = new RegExp(from.split('').join('|'), 'g');

  return inputString
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
