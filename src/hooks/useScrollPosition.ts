import { useState, useEffect, useRef } from 'react'




// --- Throttling Utility Function ---
/**
 * Limits the execution rate of a function.
 * @param func - The function to throttle.
 * @param limit - The minimum time in milliseconds between function calls.
 * @returns A throttled version of the function.
 */


/*
const throttle = (func: (...args: any[]) => void, limit: number) => {
  let inThrottle: boolean;
  return function (this: any, ...args: any[]) {
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      // After 'limit' milliseconds, allow the function to be called again
      setTimeout(() => (inThrottle = false), limit)
    }
  }
};
*/

function throttle<T extends (...args: any[]) => void>(func: T, limit: number) {
  let inThrottle = false;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// --- Custom Hook Definition ---
/**
 * Custom Hook to track the window's vertical scroll position.
 * It uses throttling to improve performance during rapid scrolling.
 * * @param throttleTime - The minimum time in milliseconds between scroll updates. Defaults to 100ms.
 * @returns The current vertical scroll position (number).
 */
export function useScrollPosition(throttleTime: number = 100): number {
  // State to hold the current scroll position
  const [scrollY, setScrollY] = useState<number>(0)

  // useRef to hold the throttled scroll handler.
  // This allows the useEffect cleanup to correctly reference the same function object
  // that was added as the listener, without needing to re-run the effect unnecessarily.
  const handleScrollRef = useRef<(() => void) | null>(null)

  useEffect(() => {
    // Function to update the state with the current scroll position
    const updateScrollPosition = (): void => {
      // window.scrollY is the standard way to get vertical scroll position
      setScrollY(window.scrollY)
    }

    // Create the throttled function and store it in the ref
    // We cast the throttled function to `() => void` because the scroll event listener
    // doesn't typically need to process event arguments (`...args: any[]`).
    handleScrollRef.current = throttle(updateScrollPosition, throttleTime) as () => void

    // Add the event listener when the component mounts
    window.addEventListener('scroll', handleScrollRef.current)

    // Cleanup: Remove the event listener when the component unmounts
    return () => {
      if (handleScrollRef.current) {
        window.removeEventListener('scroll', handleScrollRef.current)
      }
    }
  }, [throttleTime]) // Dependency array includes throttleTime to recalculate throttle if it changes

  return scrollY
}
