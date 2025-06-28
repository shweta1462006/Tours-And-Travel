import React from 'react'
import Contact from '../Pages/Contact'

export default function About() {
  return (
    <>
      <div className="text-center px-4">
        <h1 className="mt-10 text-3xl md:text-4xl font-serif font-bold">ABOUT US</h1>
        <p className="mt-7 mx-auto max-w-4xl text-lg md:text-xl font-sans leading-relaxed">
          Our Journey, Your Memories.
          <br /><br />
          At <strong>[Tour and travel]</strong>, we believe that travel is more than just reaching a destination — it's about the stories you create, the people you meet, and the memories that stay with you for a lifetime. Our passionate team is dedicated to turning every trip into a truly unforgettable experience.
          <br /><br />
          With years of expertise and a heart full of wanderlust, we specialize in crafting personalized journeys that match your dreams. Whether it's the serene valleys of Ladakh or the sunny beaches of Goa, we go the extra mile to make every moment count.
        </p>
      </div>

      <div className="h-72 w-full mt-10">
        <img src="/Images/plane2.webp" alt="Plane Travel" className="h-full w-full object-cover" />
      </div>

      <div>
        <h1 className="text-center font-bold text-3xl md:text-4xl font-serif mt-10">WHY CHOOSE US</h1>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-10 px-4">
        <div className="w-72 bg-orange-100 p-4 rounded shadow-md">
          <img src="/Images/thumb.jpg" alt="Experience" className="h-28 w-full object-cover rounded" />
          <h2 className="text-center font-serif font-bold mt-4">20+ Years of Experience</h2>
          <p className="text-center text-justify mt-4 text-sm">
            Boasting over two decades in the tourism and hospitality industry, Tour My India has amassed invaluable experience that sets us apart.
          </p>
        </div>

        <div className="w-72 bg-pink-100 p-4 rounded shadow-md">
          <h2 className="text-center font-serif font-bold mt-4">A Team of Experts</h2>
          <p className="text-center text-justify mt-4 text-sm">
            Our experienced team at Tour My India are destination experts for every corner of India. Their deep knowledge is an invaluable asset for every traveler.
          </p>
        </div>

        <div className="w-72 bg-blue-100 p-4 rounded shadow-md">
          <h2 className="text-center font-serif font-bold mt-4">Verified Hotels</h2>
          <p className="text-center text-justify mt-4 text-sm">
            We offer a carefully selected and verified list of premium hotels. Our partners consistently deliver top-tier service, ensuring a seamless stay.
          </p>
        </div>

        <div className="w-72 bg-green-100 p-4 rounded shadow-md">
          <h2 className="text-center font-serif font-bold mt-4">Value For Money</h2>
          <p className="text-center text-justify mt-4 text-sm">
            With Tour My India, your vacation isn't just about sightseeing — it's about crafting lasting memories. Our holiday packages are hassle-free and offer great value for money.
          </p>
        </div>
      </div>

      <Contact />
    </>
  )
}
