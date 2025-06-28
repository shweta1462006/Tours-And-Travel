import React from 'react';

export default function() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-evenly w-full mt-8 space-y-6 md:space-y-0 md:h-96">
        <div className="relative rounded-lg brightness-75 w-full md:w-96 h-64 md:h-full">
          <img src="/public/Images/climbing.webp" alt="Climbing" className="h-full w-full object-cover rounded-lg" />
          <div className="absolute inset-0 flex flex-col justify-between p-4 bg-black bg-opacity-30 rounded-lg">
            <h2 className="text-white text-xl font-bold bg-black bg-opacity-50 p-2 rounded">Trakking</h2>
            <button className="rounded-xl h-10 w-40 shadow-lg shadow-orange-900 hover:bg-orange-600 hover:text-white bg-orange-500 self-center">
              Learn More
            </button>
          </div>
        </div>

        <div className="relative rounded-lg brightness-75 w-full md:w-96 h-64 md:h-full">
          <img src="/public/Images/ride.webp" alt="Bike Ride" className="h-full w-full object-cover rounded-lg" />
          <div className="absolute inset-0 flex flex-col justify-between p-4 bg-black bg-opacity-30 rounded-lg">
            <h2 className="text-white text-xl font-bold bg-black bg-opacity-50 p-2 rounded">Bike Ride</h2>
            <button className="rounded-xl h-10 w-40 shadow-lg shadow-orange-900 hover:bg-orange-600 hover:text-white bg-orange-500 self-center">
              Learn More
            </button>
          </div>
        </div>

        <div className="relative rounded-lg brightness-75 w-full md:w-96 h-64 md:h-full">
          <img src="/public/Images/safari.webp" alt="Safari" className="h-full w-full object-cover rounded-lg" />
          <div className="absolute inset-0 flex flex-col justify-between p-4 bg-black bg-opacity-30 rounded-lg">
            <h2 className="text-white text-xl font-bold bg-black bg-opacity-50 p-2 rounded">Jeep Safari</h2>
            <button className="rounded-xl h-10 w-40 shadow-lg shadow-orange-900 hover:bg-orange-600 hover:text-white bg-orange-500 self-center">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-evenly w-full mt-8 space-y-6 md:space-y-0 md:h-96">
        <div className="relative rounded-lg brightness-75 w-full md:w-96 h-64 md:h-full">
          <img src="/public/Images/spritiual.webp" alt="Spiritual" className="h-full w-full object-cover rounded-lg" />
          <div className="absolute inset-0 flex flex-col justify-between p-4 bg-black bg-opacity-30 rounded-lg">
            <h2 className="text-white text-xl font-bold bg-black bg-opacity-50 p-2 rounded">Spiritual Places</h2>
            <button className="rounded-xl h-10 w-40 shadow-lg shadow-orange-900 hover:bg-orange-600 hover:text-white bg-orange-500 self-center">
              Learn More
            </button>
          </div>
        </div>

        <div className="relative rounded-lg brightness-75 w-full md:w-96 h-64 md:h-full">
          <img src="/public/Images/valley.webp" alt="Valley" className="h-full w-full object-cover rounded-lg" />
          <div className="absolute inset-0 flex flex-col justify-between p-4 bg-black bg-opacity-30 rounded-lg">
            <h2 className="text-white text-xl font-bold bg-black bg-opacity-50 p-2 rounded">Local Valley Of Ladakh</h2>
            <button className="rounded-xl h-10 w-40 shadow-lg shadow-orange-900 hover:bg-orange-600 hover:text-white bg-orange-500 self-center">
              Learn More
            </button>
          </div>
        </div>

        <div className="relative rounded-lg brightness-75 w-full md:w-96 h-64 md:h-full">
          <img src="/public/Images/Frozen river trak.webp" alt="Frozen River" className="h-full w-full object-cover rounded-lg" />
          <div className="absolute inset-0 flex flex-col justify-between p-4 bg-black bg-opacity-30 rounded-lg">
            <h2 className="text-white text-xl font-bold bg-black bg-opacity-50 p-2 rounded">Frozen River</h2>
            <button className="rounded-xl h-10 w-40 shadow-lg shadow-orange-900 hover:bg-orange-600 hover:text-white bg-orange-500 self-center">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
