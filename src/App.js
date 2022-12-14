import React from 'react'
import { RecoilRoot } from 'recoil'
import ScoreBar from './components/Game/ScoreBar'
import Game from './components/Game/Game'

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <ScoreBar />
        <Game />
      </div>
    </RecoilRoot>
  )
}

export default App
