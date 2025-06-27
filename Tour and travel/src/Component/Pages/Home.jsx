'use client'

import { useState } from 'react'
import "../CSS/Home.css"
import Secondpage from './Secondpage'
import Layer from './Layer'
import Data from '../../Component/Data'
// import Card290 from './Card290'





export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    
    <div className="bg-white">
      <div className="bg-[url('https://www.tourmyindia.com/blog//wp-content/uploads/2022/01/Best-Places-to-Visit-in-March-in-India.jpg')] bg-cover bg-center h-64 w-full flex items-center justify-center text-white text-2xl font-bold">


      <div className='h-[300px] w-fullrounded-sm'>
        <div className=''>
       <h1 className='text-9xl mt-10 text-center relative font-serif w-full  text-black text-bold'>LADAKH</h1>
      <h1 className='text-normal  tracking-[5px]  w-full  text-center  text-black text-bold'>Explore the distant Coner of the world....</h1>
      </div>
      </div>
      </div>

<Layer/>
{/* <Card290/> */}
    </div>
  )
}
