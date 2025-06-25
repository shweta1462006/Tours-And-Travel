
import Destinantion from './Component/Pages/Destinantion'
import {  Route, Routes } from 'react-router-dom'
function App() {
  return(
  <>
  
  <Routes>
    <Route path='/' element={<Destinantion/>}/>
  </Routes>

  {/* <Destinantion/> */}
  </>
  )
}

export default App
