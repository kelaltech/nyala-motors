import React, { useCallback, useState } from 'react'

const useBomb = (timeout = 5000): [boolean, () => void] => {
  const [isActive, setIsActive] = useState(false)

  const trigger = useCallback(
    (event?: React.MouseEvent) => {
      event?.preventDefault()
      setIsActive(true)

      setTimeout(() => {
        setIsActive(false)
      }, timeout)
    },
    [timeout]
  )

  return [isActive, trigger]
}

export default useBomb
