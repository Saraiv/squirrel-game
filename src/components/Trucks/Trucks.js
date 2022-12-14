import { useCallback, useEffect, useState } from 'react'
import { atom, useRecoilState } from 'recoil'
import { useInterval } from '../../hooks/useInterval'
import MovingObject from '../MovingObject/MovingObject'
import { getRandomTrucks } from '../../helpers/Helpers'
import React from 'react'

const Trucks = () => {
    const [random, setRandom] = useState(0)
    useEffect(() => {
        let mounted = true
        getRandomTrucks().then(number => {
            if(mounted)
                setRandom(number)
        })
        return () => mounted = false
    }, [])

    const trucksState = atom({
        key: 'trucksState',
        default: [
            { 
                x: -1, 
                y: 5, 
                dir: 'down', 
                id: Math.random().toString(36).substring(2, 9) 
            },
            { 
                x: 9, 
                y: 6, 
                dir: 'up', 
                id: Math.random().toString(36).substring(2, 9)
            }
        ]
    })
    const [trucks, setTrucks] = useRecoilState(trucksState)

    const moveTrucks = useCallback(() => {
        let trucksCopy = [...trucks]
        trucksCopy = trucksCopy.map((truck) => {
            if(truck.dir === 'up'){
                return {
                    ...truck,
                    x: parseInt(truck.x - 1) 
                }
            } else {
                return {
                    ...truck,
                    x: parseInt(truck.x + 1) 
                }
            }
        })
        
        const newTrucks = []
        if(trucksCopy.filter((truck) => truck.x === 7 || truck.x === 1).length){
            newTrucks.push({
                id: Math.random().toString(36).substring(2, 9),
                x: 9,
                y: 6,
                dir: 'up',
            })
            newTrucks.push({
                id: Math.random().toString(36).substring(2, 9),
                x: -1,
                y: 5,
                dir: 'down',
            })
        }

        setTrucks(trucksCopy.filter((truck) => {
                return truck.x >= -1 && truck.x <= 9
            }).concat(newTrucks)
        )
    }, [trucks, setTrucks])

    useInterval(() => {
        moveTrucks()
    }, random)

    return(
        <>
            {
                trucks.map((truck) => {
                    return (
                        <MovingObject
                            key={truck.id}
                            x={truck.x} 
                            y={truck.y}
                            dir={truck.dir}
                            type='truck'
                        />
                    )
                })
            }
        </>
    )
}

export default Trucks