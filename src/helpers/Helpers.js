export const WORLD_SIZE = 9
export const TILE_ASPECT_RATIO = 1 / 0.75
export const WATER_TILES_Y_INDEXES = [1, 2]
export const URL_PRIVATE = 'http://www.randomnumberapi.com/api/v1.0/random?min=800&max=1000'

async function getNumber(url) {
  try{
    const response = await fetch(url)
    const data = await response.json()
    return data[0]
  } catch{
    console.error()
  }
}

export const RANDOM_NUMBER = getNumber(URL_PRIVATE)

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