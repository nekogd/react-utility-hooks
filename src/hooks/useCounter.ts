import { useEffect, useState } from 'react'

const useCounter = (): number => {
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (count > 99) return setCount(0)

      setCount(count + 2)
    }, 1000)

    return () => clearInterval(interval)
  }, [count, setCount])
  return count
}

export default useCounter
