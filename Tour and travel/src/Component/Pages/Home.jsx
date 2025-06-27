'use client'

import { useState } from 'react'
<<<<<<< HEAD
import "../CSS/Home.css";
import Layer from './Layer'
import Data from '../../Component/Data'
import Section from './Section';
=======
// import "../CSS/Home.css"
// import Secondpage from './Secondpage'
import Layer from './Layer'
// import Data from '../../Component/Data'
>>>>>>> 2c284e6c6980caf9d801ee509ee3ce8fec578abd
// import Card290 from './Card290'





export default function Home() {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
     <>
    <div className="bg-white">
      <div class="bg-[url('https://www.tourmyindia.com/blog//wp-content/uploads/2022/01/Best-Places-to-Visit-in-March-in-India.jpg')] bg-cover bg-center h-64 w-full">


      <div className="bg-cover bg-center h-64 w-full flex items-center justify-center text-white text-2xl font-bold">


        <div className='h-[300px] w-fullrounded-sm'>
          <div className=''>
            <h1 className='text-9xl mt-10 text-center relative font-serif w-full  text-black text-bold'>LADAKH</h1>
            <h1 className='text-normal  tracking-[5px]  w-full  text-center  text-black text-bold'>Explore the distant Coner of the world....</h1>
          </div>
        </div>
      </div>
      </div>
          <div className="bg-white text-gray-800 p-6 md:p-12 max-w-screen-xl mx-auto">
    
<Section/>
<Data/>
    </div>

      <Layer />
      {/* <Card290/> */}
    </div>
    </>
  )
}
