import { 
  useState, 
  useEffect 
} from 'react'

export const WORLD_SIZE = 9
export const TILE_ASPECT_RATIO = 1 / 0.75
export const WATER_TILES_Y_INDEXES = [1, 2]

export const useWindowDimensions = () => {
    const hasWindow = typeof window !== 'undefined'
  
    const getWindowDimensions = () => {
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

export const isTruckCollision = (frog, trucks) => {
  return trucks.some((truck) => truck.x === frog.x && truck.y === frog.y);
};

export const isDrowning = (frog, boats) => {
  const boatUnderFrog = boats.some(
    (boat) => boat.y === frog.y && Math.abs(boat.x - frog.x) <= 1
  );
  if (WATER_TILES_Y_INDEXES.includes(frog.y) && !boatUnderFrog) {
    return true;
  } else {
    return false;
  }
};

export const getRiddenBoat = (frog, boats) => {
  return boats.find((boat) => {
    return boat.y === frog.y && Math.abs(boat.x - frog.x) <= 1;
  })
}

export const isRidingBoat = (frog, boats) => {
  return boats.find((boat) => {
    return boat.y === frog.y && Math.abs(boat.x - frog.x) <= 1;
  })
}

export const hasReachedGoal = (frog) => {
  return frog.y === -1;
}

export const objectsIdentical = (o1, o2) => {
  return JSON.stringify(o1) === JSON.stringify(o2);
}