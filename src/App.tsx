import './App.scss'
import Coin from './components/FlipIcon/Coin.component'
import ReactImg from './assets/react.svg'
import { CoinSize } from './components/FlipIcon/Coin.definitions'

function App() {

  return (
    <>
      <Coin frontImg={ReactImg} imgAlt='react' label='React' size={CoinSize.SMALL}/>
    </>
  )
}

export default App
