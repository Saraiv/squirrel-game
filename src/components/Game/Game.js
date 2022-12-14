import Inputs from '../Frog/Inputs'
import World from '../World/World'
import {
    isDrowning,
    isTruckCollision,
    hasReachedGoal,
    getRiddenBoat,
    isRidingBoat,
    objectsIdentical,
} from '../../helpers/Helpers'
import { 
    atom, 
    useRecoilState, 
    useRecoilValue 
} from 'recoil'
import { useEffect } from 'react'
import React from 'react'
import party from 'party-js'

const Game = () => {
    const scoreState = atom({
        key: 'scoreState',
        default: 0,
    })
    const [score, setScore] = useRecoilState(scoreState)

    const highScoreState = atom({
        key: 'highScoreState',
        default: 0
    })
    const [highScore, setHighScore] = useRecoilState(highScoreState)

    const [gameOver, setGameOver] = useRecoilState(atom({ key: 'gameOverState', default: false }))

    const frogState = atom({ key: 'frogState', default: {} })
    const [frog, setFrog] = useRecoilState(frogState)

    const trucks = useRecoilValue(atom({ key: 'trucksState' }))
    const boats = useRecoilValue(atom({ key: 'boatsState' }))

    useEffect(() => {
        if (trucks && isTruckCollision(frog, trucks)) {
            if (!gameOver)
                setGameOver(true)
            if (!frog.dead)
                setFrog({ ...frog, dead: true })
        }
    }, [trucks, frog, setFrog, gameOver, setGameOver])

    useEffect(() => {
        if (boats && isRidingBoat(frog, boats)) {
            const boat = getRiddenBoat(frog, boats)
            if (!objectsIdentical(frog, { ...frog, x: boat.x, y: boat.y }))
                setFrog({ ...frog, x: boat.x, y: boat.y })
        } else if (boats && isDrowning(frog, boats)) {
            if (!gameOver)
                setGameOver(true)
            if (!frog.dead)
                setFrog({ ...frog, dead: true })
        }
    }, [boats, frog, setFrog, gameOver, setGameOver])

    useEffect(() => {
        if (hasReachedGoal(frog)) {
            setScore(score + 1)
            if (score + 1 > highScore)
                setHighScore(score + 1)
            setFrog({ ...frog, x: 4, y: 8 })
            party.confetti(document.body, {
                count: party.variation.range(0, 100),
	            size: party.variation.range(0.6, 1.4),
                speed: party.variation.range(300, 1000)
            })
        }
    }, [frog, setFrog, score, setScore, highScore, setHighScore])

    return (
            <>
                <World />
                <Inputs />
            </>
    )   
}

export default Game