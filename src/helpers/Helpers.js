import { 
  useState, 
  useEffect 
} from 'react'

export const WORLD_SIZE = 9
export const TILE_ASPECT_RATIO = 1 / 0.75
export const URL_PRIVATE = "http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000"

export const useWindowDimensions = () => {
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

/*const { height, width } = useWindowDimensions()

async function getNumber(url) {
    var response = await fetch(url)
    var data = await response.json()

    console.log(data[0])

    return data[0]
}

console.log(getNumber(URL_PRIVATE))*/