'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import "../CSS/Home.css"
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Secondpage from './Secondpage'



export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <div className='h-[300px] w-fullrounded-sm'>
        <div className=''>
       <h1 className='text-9xl mt-10 text-center relative font-serif w-full  text-black text-bold'>LADAKH</h1>
      <h1 className='text-normal  tracking-[5px]  w-full  text-center  text-black text-bold'>Explore the distant Coner of the world....</h1>
      
      </div>
      </div>

          <Secondpage/>

    </div>
  )
}
