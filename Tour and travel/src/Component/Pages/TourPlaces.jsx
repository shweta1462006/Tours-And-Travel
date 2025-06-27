import React from 'react'

export default function() {
  return (
    <>
    <div className='flex  flex-row justify-evenly w-full h-96 mt-8'>
<div className='rounded-lg  brightness-75 w-96 '>
<img src="/public/Images/climbing.webp" alt="Climbimg"  className='h-full w-full'/>
<div className="absolute inset-0 ">
        <h2 className="text-white text-xl font-bold bg-black bg-opacity-50 p-4 rounded">
          Trakking
        </h2>
        <button class="rounded-xl h-10 w-40 shadow-lg mt-64 mx-24 shadow-orange-900 hover:bg-orange-600 hover:text-white bg-orange-500 align-center">Learn More</button>
      </div> 

</div>
<div className='rounded-lg brightness-75  w-96'>
<img src="/public/Images/ride.webp" alt="bike ride" className='h-full w-full' />
<div className="absolute inset-0 ">
        <h2 className="text-white text-xl font-bold bg-black bg-opacity-50 p-4 rounded">
          Bike Ride
        </h2>
        <button class="rounded-xl h-10 w-40 shadow-lg mt-64 mx-24 shadow-orange-900 hover:bg-orange-600 hover:text-white bg-orange-500 align-center">Learn More</button>
      </div>
</div>
<div className='rounded-lg brightness-75  w-96'>
  <img src="/public/Images/safari.webp" alt="safari" className='h-full w-full' />
  <div className="absolute inset-0 ">
        <h2 className="text-white text-xl font-bold bg-black bg-opacity-50 p-4 rounded">
          Jeep Safari
        </h2>
        <button class="rounded-xl h-10 w-40 shadow-lg mt-64 mx-24 shadow-orange-900 hover:bg-orange-600 hover:text-white bg-orange-500 align-center">Learn More</button>
      </div>
</div>
    </div>
     <div className='flex flex-row justify-evenly w-full h-96 mt-8'>
<div className='rounded-lg brightness-75 w-96 '>
<img src="/public/Images/spritiual.webp" alt="Spritiual"  className='h-full w-full'/>
<div className="absolute inset-0 ">
        <h2 className="text-white text-xl font-bold bg-black bg-opacity-50 p-4 rounded">
         Spritiual Places
        </h2>
        <button class="rounded-xl h-10 w-40 shadow-lg mt-64 mx-24 shadow-orange-900 hover:bg-orange-600 hover:text-white bg-orange-500 align-center">Learn More</button>
      </div>
</div>
<div className='rounded-lg brightness-75 w-96'>
  <img src="/public/Images/valley.webp" alt="Valley" className='h-full w-full' />
  <div className="absolute inset-0 ">
        <h2 className="text-white text-xl font-bold bg-black bg-opacity-50 p-4 rounded">
          Local Valley Of Ladakh
        </h2>
        <button class="rounded-xl h-10 w-40 shadow-lg mt-64 mx-24 shadow-orange-900 hover:bg-orange-600 hover:text-white bg-orange-500 align-center">Learn More</button>
      </div>
</div>
<div className='rounded-lg brightness-75 w-96'>
  <img src="/public/Images/Frozen river trak.webp" alt="Frozen"  className='h-full w-full'/>
  <div className="absolute inset-0 ">
        <h2 className="text-white text-xl font-bold bg-black bg-opacity-50 p-4 rounded">
          Frozen River
        </h2>
        <button class="rounded-xl h-10 w-40 shadow-lg mt-64 mx-24 shadow-orange-900 hover:bg-blue hover:bg-orange-600 hover:text-white bg-orange-500 align-center">Learn More</button>
      </div>
</div>
    </div>
    </>
  )
}
