
import {  Route, Routes } from 'react-router-dom'
import Nav from './Component/Pages/Nav'
import Home from './Component/Pages/Home'
import Destinantion from './Component/Pages/Destinantion'
import Data from './Component/Data'
import Footer from './Component/Pages/Footer'
import About from './Component/Pages/About'
import Contact from './Component/Pages/Contact'

function App() {
  return(
  <>
  <Nav/>
  <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/destinantion' element={<Destinantion/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Contact' element={<Contact/>}/>

  </Routes>
  <Footer/>

  {/* <Destinantion/> */}
  </>
  )
}

export default App
