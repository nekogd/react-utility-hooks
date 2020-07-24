import { useRef, useEffect } from 'react'

export const useDocumentTitle = (
  title: string,
  retainOnUnmount: boolean = false
): void => {
  const defaultTitle = useRef(document.title)

  useEffect(() => {
    document.title = title
  }, [title])

  useEffect(() => {
    return () => {
      if (!retainOnUnmount) {
        document.title = defaultTitle.current
      }
    }
  }, [])
}
