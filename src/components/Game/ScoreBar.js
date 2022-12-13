import {
    atom,
    useRecoilState,
    useRecoilValue,
    useSetRecoilState,
} from 'recoil'
import React from 'react'

const ScoreBar = () => {
    const [frog, setFrog] = useRecoilState(
        atom({ key: "frogState", default: {} })
    );
    const score = useRecoilValue(atom({ key: "scoreState" }))
    const highScore = useRecoilValue(atom({ key: "highScoreState" }))
    const setGameOver = useSetRecoilState(atom({ key: "gameOverState" }))
    return (
        <div className="score-bar">
            <div className="score-wrapper">
                {
                    frog && frog.dead ? (
                    <div
                        className='button'
                        onClick={() => {
                        setGameOver(false);
                        setFrog({ x: 4, y: 8, dir: 'up', dead: false });
                        }}
                    >
                        RESTART
                    </div>
                    ) : (
                    <>
                        <span className='score'>Points: {score ? score : 0}</span>
                        <span className='high-score'>Highscore: {highScore ? highScore : 0}</span>
                    </>
                    )
                }
            </div>
        </div>
    )
}

export default ScoreBar