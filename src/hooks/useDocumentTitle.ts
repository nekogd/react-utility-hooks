let { useRef, useEffect } = require('react')

type useDocumentTitleProps = {
  title: string
  retainOnUnmount: boolean
}

const useDocumentTitle = ({
  title,
  retainOnUnmount = false,
}: useDocumentTitleProps): void => {
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

export default useDocumentTitle
