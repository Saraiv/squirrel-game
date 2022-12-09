import { RecoilRoot } from 'recoil'
import Game from './components/Game/Game'

const App = () => {
  return (
    <RecoilRoot>
      <div className="App">
        <Game />
      </div>
    </RecoilRoot>
  )
}

export default App