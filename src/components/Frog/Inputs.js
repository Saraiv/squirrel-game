import { 
    useCallback, 
    useEffect,
    useRef
} from 'react'
import {
    atom,
    useRecoilState,
    useRecoilValue
} from 'recoil'
import React from 'react'

const Inputs = () => {
    const frogState = atom({
        key: 'frogState',
        default: { 
            x: 4, 
            y: 8, 
            dir: 'up'
        }
    })
    const [frog, setFrog] = useRecoilState(frogState)

    const allowInputState = atom({
        key: 'allowInputState',
        default: true
    })
    const [allowInput, setAllowInput] = useRecoilState(allowInputState)
    
    const gameOver = useRecoilValue(atom({ key: 'gameOverState' }))

    let timer = useRef(false)
    useEffect(() => {
        return () => clearTimeout(timer.current)
    }, [timer])

    const keyPressHandler = useCallback(
        (e) => {
            if(e.preventDefault)
                e.preventDefault()
            
            if(gameOver || !allowInput)
                return

            setAllowInput(false);
            timer.current = setTimeout(() => {
                setAllowInput(true);
            }, 350)

            if(e.keyCode === 65){
                setFrog({
                    x: frog.x > 0 ? frog.x - 1 : frog.x,
                    y: frog.y,
                    dir: 'left'
                })
            } else if(e.keyCode === 68){
                setFrog({
                    x: frog.x < 8 ? frog.x + 1 : 8,
                    y: frog.y,
                    dir: 'right'
                })
            } else if(e.keyCode === 87){
                setFrog({
                    x: frog.x,
                    y: frog.y > -1 ? frog.y - 1 : 0,
                    dir: 'up'
                })
            } else if(e.keyCode === 83){
                setFrog({
                    x: frog.x,
                    y: frog.y < 8 ? frog.y + 1 : 8,
                    dir: 'down'
                })
            }
        }, [frog, setFrog, gameOver, allowInput, setAllowInput])

        useEffect(() => {
            window.addEventListener('keydown', keyPressHandler)
            return () => window.removeEventListener('keydown', keyPressHandler)
        }, [keyPressHandler])

        return(
            <>
            </>
        )
}

export default Inputs