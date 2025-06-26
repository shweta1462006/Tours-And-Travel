
import Destinantion from './Component/Pages/Destinantion'
import {  Route, Routes } from 'react-router-dom'
function App() {
  return(
  <>

  <h1>Git Changes</h1>
  
  <Routes>
    <Route path='/' element={<Destinantion/>}/>
  </Routes>

  {/* <Destinantion/> */}
  </>
  )
}

export default App
