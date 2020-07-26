/**
 * Hook to update document title
 * @param {string} title - new document title
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

export const useDocumentTitle = (title: string): void => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};
