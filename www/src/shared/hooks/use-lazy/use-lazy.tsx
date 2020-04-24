import React, { useEffect, useState } from 'react'

const useLazy = function <T>(
  initialValue: T,
  effectCallback: (
    setState: React.Dispatch<React.SetStateAction<T>>,
    setError: React.Dispatch<React.SetStateAction<any>>,
    state: T,
    isInitial: boolean
  ) => void | (() => void | undefined) = () => () => {},
  deps: React.DependencyList = []
): [
  T,
  any,
  boolean,
  React.Dispatch<React.SetStateAction<T>>,
  React.Dispatch<React.SetStateAction<any>>
] {
  const [state, setState] = useState(initialValue)
  const [error, setError] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      const unsubscribe = effectCallback(
        (state) => {
          setState(state)
          setLoading(false)
        },
        (error) => {
          setError(error)
          setLoading(false)
        },
        state,
        loading
      )
      return unsubscribe
    } catch (e) {
      setError(e)
      setLoading(false)
    }
    /* eslint-disable */
  }, deps)
  /* eslint-enable */

  return [state, error, loading, setState, setError]
}

export default useLazy
