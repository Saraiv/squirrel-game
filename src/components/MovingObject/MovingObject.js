import {
    truckUp, 
    truckDown,
    boatUp,
    boatDown
} from '../../helpers/Images'
import {
    WORLD_SIZE,
    TILE_ASPECT_RATIO
} from '../../helpers/Helpers'

const MovingObject = ({ x, y, dir, type }) => {
    const yOffset = ((100 / WORLD_SIZE) * TILE_ASPECT_RATIO) / 1.8
    const yBase = yOffset * y + yOffset / 1.5
    const xBase = 50 - (100 / 18) * y
    const xAbs = xBase + (100 / 18) * x
    const yAbs = yBase + yOffset * x

    let src, alt
    if(type === 'boat' && dir === 'up'){
        src = boatUp
        alt = type
    }
    else if(type === 'boat' && dir === 'down'){
        src = boatDown
        alt = type
    }
    else if(type === 'truck' && dir === 'up'){
        src = truckUp
        alt = type
    }
    else if(type === 'truck' && dir === 'down'){
        src = truckDown
        alt = type
    }

    return <img src={src} alt={alt} className={`${type}`} style={{left: `${xAbs}%`, top: `${yAbs}%`, opacity: x < 1 || x > 7 ? 0 : 1}} />
}

export default MovingObject