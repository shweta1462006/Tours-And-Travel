
import Destinantion from './Component/Pages/Destinantion'
import {  Route, Routes } from 'react-router-dom'
import Nav from './Component/Pages/Nav'
function App() {
  return(
  <>
  <Nav/>
  <Routes>
    <Route path='/' element={<Destinantion/>}/>
  </Routes>

  {/* <Destinantion/> */}
  </>
  )
}

export default App
