import { useState, useEffect } from 'react'

export const WORLD_SIZE = 9
export const TILE_ASPECT_RATIO = 1 / 0.75

export default function useWindowDimensions() {
    const hasWindow = typeof window !== 'undefined'
  
    function getWindowDimensions() {
      const width = hasWindow ? window.innerWidth : null
      const height = hasWindow ? window.innerHeight : null
      return {
        width,
        height,
      }
    }
  
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())
  
    useEffect(() => {
      if (hasWindow) {
        function handleResize() {
          setWindowDimensions(getWindowDimensions())
        }
  
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
      }
    }, [hasWindow])
  
    return windowDimensions
}