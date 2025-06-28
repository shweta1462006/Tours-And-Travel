'use client'

import { useState } from 'react'
import "../CSS/Home.css";
import Layer from './Layer'
import Data from '../../Component/Data'
import Section from './Section';

export default function Home() {
  return (
    <div className="bg-white">
      <div className="bg-[url('https://www.tourmyindia.com/blog//wp-content/uploads/2022/01/Best-Places-to-Visit-in-March-in-India.jpg')] bg-cover bg-center h-[300px] sm:h-[400px] md:h-[250px] w-full flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-8xl sm:text-6xl md:text-7xl lg:text-9xl font-serif font-bold text-black mb-4">
            India
           </h1>
          <p className="text-sm sm:text-base tracking-[9px] md:text-lg  text-black font-medium">
                  We are Unveiling the distant corner of the world ...
          </p>
        </div>
      </div>

      <div className="bg-white text-gray-800 p-6 sm:p-8 md:p-12 max-w-screen-xl mx-auto">
        <Section />
        <Data />
        <Layer />
      </div>
    </div>
  )
}
