import { useRef, useEffect } from 'react'

type IuseDocumentTitleProps = {
  title: string
  retainOnUnmount: boolean
}

const useDocumentTitle = ({
  title,
  retainOnUnmount = false,
}: IuseDocumentTitleProps): void => {
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
