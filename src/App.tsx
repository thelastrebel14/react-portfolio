import React from 'react'
import './App.scss'
import Navbar from './components/Navbar/Navbar.component'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home.component'

function App() {

  return (
    <>
      <React.Fragment>
        <Navbar />
      </React.Fragment>
      <div>
        <Routes>
          <Route path='/' element={<Home />}/>
          {/* <Route path='/experience' element={<Experience />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/contact' element={<Contact />}/> */}
        </Routes>
      </div>
    </>
  )
}

export default App
