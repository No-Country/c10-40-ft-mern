import { type RefObject, useEffect, useState } from 'react'

interface IntersectionObserverOptions {
  root?: Element | null
  rootMargin?: string
  threshold?: number | number[]
}

type UseIntersectionObserver = (
  ref: RefObject<Element>,
  options?: IntersectionObserverOptions
) => boolean

const useIntersectionObserver: UseIntersectionObserver = (
  ref,
  options = {}
): boolean => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting)
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [ref, options])

  return isVisible
}

export default useIntersectionObserver
