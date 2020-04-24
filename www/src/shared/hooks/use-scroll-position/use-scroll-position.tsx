import { useRef, useLayoutEffect, DependencyList, useCallback } from 'react'

const isBrowser = typeof window !== `undefined`

function getScrollPosition({
  element,
  useWindow,
}: {
  element?: any
  useWindow?: boolean
}) {
  if (!isBrowser) return { x: 0, y: 0 }

  const target = element ? element.current : document.body
  const position = target.getBoundingClientRect()

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top }
}

export function useScrollPosition(
  effect: ({
    prevPos,
    currPos,
  }: {
    prevPos: { x: number; y: number }
    currPos: { x: number; y: number }
  }) => unknown,
  deps: DependencyList = [],
  element?: any,
  useWindow?: boolean,
  wait?: number
) {
  const position = useRef(getScrollPosition({ useWindow }))

  let throttleTimeout = useRef<number | NodeJS.Timeout | null>(null)

  const callBack = useCallback(() => {
    const currPos = getScrollPosition({ element, useWindow })
    effect({ prevPos: position.current, currPos })
    position.current = currPos
    throttleTimeout.current = null
  }, [effect, element, useWindow])

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout.current === null) {
          throttleTimeout.current = setTimeout(callBack, wait)
        }
      } else {
        callBack()
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
    /* eslint-disable */
  }, [wait, callBack].concat(deps))
  /* eslint-enable */
}
