import * as React from 'react'
// import './styles.scss'
import { useCounter, useDocumentTitle, useWhyRerender, useHover } from './hooks'



const Counter: React.FC<{
  count: number
  className: string
}> = ({ count, className }) => (
  <div className={`counter ${className}`}>
    <p
      key={count}
      className={`counter__count ${className ? className + '__count' : ''}`}
    >
      {count}
    </p>
  </div>
)

export type IComponentExampleProps = {
  className?: string
}

const ComponentExample: React.FC<IComponentExampleProps> = ({
  className = '',
}) => {
  const count: number = useCounter()

  return <Counter className={className} count={count} />
}

export {
  ComponentExample,
  useCounter,
  useDocumentTitle,
  useWhyRerender,
  useHover,
} 
