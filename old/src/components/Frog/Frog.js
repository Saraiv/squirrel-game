import { 
    atom, 
    useRecoilValue 
} from 'recoil'
import {
    frogNE, 
    frogNW,
    frogSE,
    frogSW
} from '../../helpers/Images'
import {
    WORLD_SIZE,
    TILE_ASPECT_RATIO
} from '../../helpers/Helpers'

const Frog = () => {
    const frogState = atom({
        key: "frogState",
        default: { 
            x: 4, 
            y: 8, 
            dir: 'up', 
            dead: false 
        }
    })
    const frog = useRecoilValue(frogState)

    const yOffset = ((100 / WORLD_SIZE) * TILE_ASPECT_RATIO) / 1.8
    const yBase = yOffset * frog.y + yOffset / 1.8
    const xBase = 50 - (100 / 18) * frog.y
    const xAbs = xBase + (100 / 18) * frog.x
    const yAbs = yBase + yOffset * frog.x

    let src
    if(frog.dir === 'up')
        src = frogNE
    else if(frog.dir === 'down')
        src = frogSW
    else if(frog.dir === 'left')
        src = frogNW
    else if(frog.dir === 'righ')
        src = frogSE

    return <img src={src} alt='frog' className={`frog ${frog.dead && 'dead'}`} style={{left: `${xAbs}%`, top: `${yAbs}%`}} />
}

export default Frog