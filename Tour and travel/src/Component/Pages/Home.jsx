'use client'

import "../CSS/Home.css";
import Layer from './Layer'
import Data from '../../Component/Data'
import Section from './Section'

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-[url('https://www.tourmyindia.com/blog//wp-content/uploads/2022/01/Best-Places-to-Visit-in-March-in-India.jpg')] bg-cover bg-center w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif font-bold text-black mb-4 leading-tight">
            India
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg tracking-wide text-black font-medium">
            We are unveiling the distant corners of the world...
          </p>
        </div>
      </div>

      {/* Main Section */}
      <div className="bg-white text-gray-800 px-4 sm:px-6 md:px-12 lg:px-20 py-8 md:py-12 max-w-screen-xl mx-auto">
        <Section />
        <Data />
        <Layer />
      </div>
    </div>
  )
}
