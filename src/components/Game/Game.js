import Inputs from '../Frog/Inputs'
import World from '../World/World'
// import {
//     isDrowning,
//     isTruckCollision,
//     hasReachedGoal,
//     getRiddenBoat,
//     isRidingBoat,
//     objectsIdentical,
// } from '../../helpers/Helpers'
// import { 
//     atom, 
//     useRecoilState, 
//     useRecoilValue 
// } from 'recoil'
// import { useEffect } from 'react'
import React from 'react'

const Game = () => {
    return (
            <>
                <World />
                <Inputs />
            </>
    )   
}

export default Game