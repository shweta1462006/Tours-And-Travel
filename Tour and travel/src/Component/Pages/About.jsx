import React from 'react'

export default function About() {
  return (
   
     <>
     <div className='text-center '>
      <h1 className='mt-10 text-3xl font-serif font-bold'>ABOUT US</h1>
<p className='mt-7 mx-36 text-xl font-sans'>Our Journey, Your Memories.

At [Your Company Name], we believe that travel is more than just reaching a destination — it's about the stories you create, the people you meet, and the memories that stay with you for a lifetime. Our passionate team is dedicated to turning every trip into a truly unforgettable experience.<br>
</br>

         With years of expertise and a heart full of wanderlust, we specialize in crafting personalized journeys that match your dreams. Whether it's the serene valleys of Ladakh or the sunny beaches of Goa, we go the extra mile to make every moment count.
</p>
     </div>
     <div className='h-72 w-full mt-20'>
      <img src="/public/Images/plane.webp" alt=""  className='h-full w-full'/>
     </div>
     <div>
      <h1 className='text-center font-bold text-3xl font-serif mt-10'>WHY CHOOSE US</h1>
     </div>
     <div className='flex justify-evenly h-full w-full mt-20'>
<div className='w-64 h-96 bg-slate-600 gap-6'> 
  <img src="/public/Images/thumb.jpg" alt=""  className='h-28 w-full '/>
  <h2>20+ Year of Experience</h2>
</div>
<div className='w-64 h-96 bg-slate-600 gap-6'></div>
<div className='w-64 h-96 bg-slate-600 gap-6'></div>
<div className='w-64 h-96 bg-slate-600 gap-6'></div>
     </div>
     </>
   
  )
}
