import React from 'react';

export default function Layer() {
  return (
    <div className="bg-white text-gray-800 p-6 md:p-12 max-w-screen-xl mx-auto">
      {/* Section 1 - Intro & Artist List */}

      {/* Section 2 - Image Cards */}
      <section className="space-y-12">
        <nav className="mb-6">
          <ul className="flex flex-wrap gap-4 justify-center font-medium text-gray-700 text-sm sm:text-base">
            <li className="cursor-pointer hover:text-blue-500">Home</li>
            <li className="cursor-pointer hover:text-blue-500">About</li>
            <li className="cursor-pointer hover:text-blue-500">Contact</li>
            <li className="cursor-pointer hover:text-blue-500">Services</li>
          </ul>
        </nav>

        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          New Casual Style Collection
        </h1>

        {/* Card 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <img
            src="/pic/arrrrt2.png"
            alt="Art 1"
            className="w-full max-w-md object-cover rounded-lg shadow-md"
          />
          <div>
            <p className="text-base mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
              voluptatem quam excepturi minus earum, voluptatibus similique veritatis?
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              Visit
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
          <div>
            <p className="text-base mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              nisi rerum quas et nulla dolore nobis quia. Cumque dolor quis rerum ad
              commodi impedit.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Nesciunt voluptatem quam unde.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              Visit
            </button>
          </div>
          <img
            src="https://www.tourmyindia.com/imagess/sikkim01-package.webp"
            alt="Art 2"
            className="w-full max-w-md object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Card 3 */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <img
            src="https://www.tourmyindia.com/imagess/sikkim01-package.webp"
            alt="Art 3"
            className="w-full max-w-md object-cover rounded-lg shadow-md"
          />
          <div>
            <p className="text-base mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
              nihil non facilis, corrupti fugit quos exercitationem iste facere sequi
              sed eligendi repellat, natus, incidunt consequatur dicta ullam cupiditate
              architecto officiis?
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              Visit
            </button>
          </div>
        </div>
      </section>

      {/* Footer Placeholder */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        {/* Future content */}
        &copy; {new Date().getFullYear()} Funario Art. All rights reserved.
      </div>
    </div>
  );
}
