import './App.scss'
import Navbar from './components/Navbar/Navbar.component'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home.component'
import Footer from './components/Footer/Footer.component'

function App() {

  return (
    <div className='app'>
      <Navbar />
      <div className='body-container'>
        <Routes>
          <Route path='/react-portfolio' element={<Home />}/>
          {/* <Route path='/experience' element={<Experience />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/contact' element={<Contact />}/> */}
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
