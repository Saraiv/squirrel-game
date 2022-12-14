import Trucks from '../Trucks/Trucks'
import Landscape from '../Landscape/Landscape'
import Boats from '../Boats/Boats'
import Frog from '../Frog/Frog'
import React from 'react'

const World = () => {
    return(
        <div className="world">
            <Landscape />
            <Trucks />
            <Boats />
            <Frog />
        </div>
    )
}

export default World