import Trucks from '../Trucks/Trucks'
import Landscape from '../Landscape/Landscape'

const World = () => {
    return(
        <div className="world">
            <Landscape />
            <Trucks />
        </div>
    )
}

export default World