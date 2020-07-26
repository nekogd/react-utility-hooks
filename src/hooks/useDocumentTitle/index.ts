/**
 * Hook to update document title
 *
 * @param {string} title
 *        new document title
 *
 * @example
 *
 * const ExampleComponent = () => {
 *   useDocumentTitle('new Document title')
 *
 *   return <>Document title updated</>
 * }
 */

import { useEffect } from 'react';
import PropTypes from 'prop-types';

export const useDocumentTitle = (title: string): void => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

useDocumentTitle.PropTypes = {
  title: PropTypes.string.isRequired,
};
