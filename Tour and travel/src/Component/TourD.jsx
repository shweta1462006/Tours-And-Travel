import React from 'react';

export default function TourD() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center px-4 py-8 gap-6">
        {/* Text Section */}
        <div className="w-full md:w-3/5">
          <h1 className="text-3xl md:text-4xl font-bold text-center tracking-wider uppercase font-serif mb-4">
            Ladakh Tour Packages
          </h1>
          <h3 className="text-xl md:text-lg font-serif  text-justify">
            Explore Leh-Ladakh, the land of high passes, mountains, and scenic lakes, with affordable Ladakh tour packages offered by Tour My India. Ladakh is the world's most scenic destination, where you have the opportunity to experience adventure, nature, culture, and pilgrimage all together in one trip.<br /><br />
            Who would not want to visit such an amazing destination once in their lifetime? Our best Ladakh tour packages offer you an incredible travel experience to explore the wonderful treasures of Ladakh's natural beauty, trekking trails, lakes, fairs & festivals, rare Himalayan wildlife, and popular Buddhist monasteries.<br /><br />
            Special deals and discounts are available on the booking of 2025/2026 Leh Ladakh holiday packages for Honeymoon Tour, Family Tour, Cultural & Festival Tour, and Ladakh Trekking tour packages. Our all-inclusive Ladakh tours provide everything you have and have not expected it to be. So, prepare for the adventure with Tour My India!
          </h3>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-2/5 flex justify-center">
          <img
            src="/Images/ladakh-lake-tour-img.webp"
            alt="Ladakh Lake"
            className="w-full h-auto max-w-md rounded shadow-lg"
          />
        </div>
      </div>
    </>
  );
}
