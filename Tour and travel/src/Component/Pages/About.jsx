import React from 'react'
import Contact from '../Pages/Contact'
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
      <img src="/public/Images/plane2.webp" alt=""  className='h-full w-full'/>
     </div>
     <div>
      <h1 className='text-center font-bold text-3xl font-serif mt-10'>WHY CHOOSE US</h1>
     </div>
     <div className='flex justify-evenly h-full w-full mt-20'>
<div className='w-64 h-96 bg-orange-100 gap-6'> 
  <img src="/public/Images/thumb.jpg" alt=""  className='h-28 w-full '/>
  <h2 className='text-center font-serif font-bold mt-4'>20+ Year of Experience</h2>
  <p className='text-center text-justify mx-3 mt-4'>Boasting over tow decade in the tourism and hospilatiy industry, tour my india has amassed invaluable experience thats ets us apart.</p>
</div>
<div className='w-64 h-96 bg-pink-100 gap-6'> 
  <h2 className='text-center font-serif font-bold mt-4'>A Team of Experts</h2>
  <p className='text-center text-justify mx-3 mt-4'>Our experienced team at Tour My India is more than just proficient, they aro destination experts for every location within the mesmerizing landscape of India. Their knowledge is an Invaluabile asset for every traveler
</p>
  
</div>
<div className='w-64 h-96 bg-blue-100 gap-6'>
  <h2 className='text-center font-serif font-bold mt-4'> Verified Hotels</h2>
  <p className='text-center text-justify mx-3 mt-4'>
We offer a meticulously selected and verified list of high-grade hotels. Our partners consistontiy deliver top-notch service, ensuring an exceptional experience for our guests
</p>
</div>
<div className='w-64 h-96 bg-green-100 gap-6'>
  <h2 className='text-center font-serif font-bold mt-4'>Value For Money Tour</h2>
  <p className='text-center text-justify mx-3 mt-4'>
    With Tour My india, your vacation is not just about sightseeing it's about creating memories that last a lifetime. Our holiday packages are hasato-tree and designed with a focus an value for money frustus to wouve unforgettable experiancis into voca
</p>
</div>
     </div>
      <Contact/>
     </>
  
  )
}
