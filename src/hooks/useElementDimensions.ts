import { useState, useRef, useEffect, RefObject } from 'react'

// Define the shape of the dimensions object
interface ElementDimensions {
  width: number
  height: number
}

// Define the return type for the hook: a tuple containing the ref and the dimensions object
type UseElementDimensionsResult = [RefObject<HTMLElement>, ElementDimensions]

export function useElementDimensions(): UseElementDimensionsResult {
  // Specify the type for useRef: It can hold an HTMLElement or null initially.
  //    We also cast it to the RefObject type for the return value consistency.
  const ref = useRef<HTMLElement | null>(null) as RefObject<HTMLElement>

  // Specify the type for useState: It holds the ElementDimensions interface.
  const [dimensions, setDimensions] = useState<ElementDimensions>({ width: 0, height: 0 })

  useEffect(() => {
    // ref.current is now of type HTMLElement | null
    const currentElement = ref.current
    if (!currentElement) return

    // Use ResizeObserver for efficient element dimension tracking
    // ResizeObserverEntry has the 'contentRect' property we access
    const observer = new ResizeObserver((entries: ResizeObserverEntry[]) => {
      // Check if the element exists in the observed entries
      if (entries[0]) {
        setDimensions({
          width: entries[0].contentRect.width,
          height: entries[0].contentRect.height,
        })
      }
    })

    observer.observe(currentElement) // Start observing the element

    // Cleanup function
    return () => observer.disconnect()
    // The dependency array doesn't strictly need `ref` if it's stable,
    //    but it's harmless. We keep it for safety based on the original code.
  }, [ref])

  return [ref, dimensions]
}
// Usage: const [myRef, { width, height }] = useElementDimensions();
