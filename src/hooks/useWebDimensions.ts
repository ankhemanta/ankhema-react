import { useState, useEffect } from 'react'

// Define the shape of the dimensions object
interface WindowDimensions {
  width: number
  height: number
}

/**
 * Custom hook to get the current window height and width and track changes on resize.
 * @returns {WindowDimensions}
 */
function useWebDimensions(): WindowDimensions {
  //    This handles the case where `window` might not be defined (e.g., during server-side rendering).
  const getWindowDimensions = (): WindowDimensions => {
    // Check if `window` object is available
    if (typeof window === 'undefined') {
      return { width: 0, height: 0 } // Return default safe values for SSR
    }

    return {
      width: window.innerWidth,
      height: window.innerHeight,
    }
  }

  //  Specify the type for useState: It holds the WindowDimensions interface.
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>(getWindowDimensions())

  useEffect(() => {
    // Function to update the state with new window dimensions
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    // Attach the event listener
    window.addEventListener('resize', handleResize)

    // Cleanup function: Remove the event listener when the component unmounts
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty dependency array ensures effect runs only on mount/unmount

  return windowDimensions
}
export default useWebDimensions
