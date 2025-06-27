import React from 'react';
// import Data from '../Data';

export default function Layer() {
  return (
    <div className="bg-white text-gray-800 p-6 md:p-12 max-w-screen-xl mx-auto">

      {/* Section 1 - Title */}

      {/* Section 2 - Cards */}
      <section className="space-y-20 mt-16">

        {/* Card 1 - Incredible India */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <img
            src="https://www.tourmyindia.com/imagess/varanasi-india.webp"
            alt="Incredible India"
            className="w-full max-w-md object-cover rounded-lg shadow-md"
          />
          <div className="p-4">
            <div className="flex gap-2">
              <h1 className="uppercase text-orange-600 text-5xl font-bold">About</h1>
              <h1 className="uppercase text-slate-600 text-5xl font-bold">Incredible India</h1>
            </div>
            <p className="mt-4 text-base">
              Interesting and intriguing, India offers incredible holiday experiences through its cultural, topographical, and wildlife diversity. With these amazing and unique experiences, this South Asian country is a top destination for holistic vacations. India is known for its architectural masterpieces, making it ideal for heritage tours. From the iconic Taj Mahal to monuments in every corner of the country, each reflects grand architecture and deep historical roots.
            </p>
            <p  className="mt-4 text-base">Interesting and intriguing, India offers incredible holiday experiences through its cultural, topographical, and wildlife diversity. With these amazing and unique experiences, this South Asian country is a top destination for holistic vacations. India is known for its architectural masterpieces, making it ideal for heritage tours. From the iconic Taj Mahal to monuments in every corner of the country, each reflects grand architecture and deep historical roots.
</p>
            <p className="mt-4 text-base">
              India's diverse topography — from the Himalayas to deserts, forests, and coastal stretches — makes for unforgettable sightseeing and adventure. Whether it's trekking in remote regions or relaxing by scenic waterfalls, India has something for every traveler.
            </p>
            <button className="mt-6 bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition">
              Visit
            </button>
          </div>
        </div>

        {/* Card 2 - Taj Mahal */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
          <div className="p-4">
            <div className="flex gap-2">
              <h1 className="uppercase text-orange-600 text-5xl font-bold">Taj</h1>
              <h1 className="uppercase text-slate-600 text-5xl font-bold">Mahal</h1>
            </div>
            <p className="mt-4 text-base">
              India is incredible due to its rich history, diverse culture, and contributions to global knowledge. From yoga and Ayurveda to mathematics and science, India's influence is vast.
            </p>
                        <p  className="mt-4 text-base">Interesting and intriguing, India offers incredible holiday experiences through its cultural, topographical, and wildlife diversity. With these amazing and unique experiences, this South Asian country is a top destination for holistic vacations. India is known for its architectural masterpieces, making it ideal for heritage tours. From the iconic Taj Mahal to monuments in every corner of the country, each reflects grand architecture and deep historical roots.
</p>

            <p className="mt-4 text-base">
              The Taj Mahal is an ivory-white marble mausoleum on the Yamuna river in Agra. Commissioned in 1631 by Mughal emperor Shah Jahan for his wife Mumtaz Mahal, it remains a symbol of eternal love. It’s a UNESCO World Heritage Site and an iconic example of Mughal architecture, admired globally for its symmetry, beauty, and craftsmanship.
            </p>
            <button className="mt-6 bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition">
              Visit
            </button>
          </div>
          <img
            src="https://images.pexels.com/photos/28888370/pexels-photo-28888370.jpeg"
            alt="Taj Mahal"
            className="w-full max-w-md object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Card 3 - Red Fort */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <img
            src="https://images.pexels.com/photos/7639065/pexels-photo-7639065.jpeg"
            alt="Red Fort"
            className="w-full max-w-md object-cover rounded-lg shadow-md"
          />
          <div className="p-4">
            <div className="flex gap-2">
              <h1 className="uppercase text-orange-600 text-5xl font-bold">Red</h1>
              <h1 className="uppercase text-slate-600 text-5xl font-bold">Fort</h1>
            </div>
            <p className="mt-4 text-base">
              The Red Fort (Lal Qila) in Delhi is a powerful symbol of India’s political heritage. Built by Shah Jahan, it served as the residence of Mughal emperors and is known for its red sandstone walls and intricate architecture. Every Independence Day, India's a powerful symbol of India’s political heritage. Built by Shah Jahan, it served as the residence of Mughal emperors and is known for its red sandstone walls and intricate architecture. Every Independence Day, India's Prime Minister hoists the flag here. Prime Minister hoists the flag here.
            </p>
                        <p  className="mt-4 text-base">Interesting and intriguing, India offers incredible holiday experiences through its cultural, topographical, and wildlife diversity. With these amazing and unique experiences, this South Asian country is a top destination for holistic vacations. India is known for its architectural masterpieces, making it ideal for heritage tours. From the iconic Taj Mahal to monuments in every corner of the country, each reflects grand architecture and deep historical roots.
</p>

            <p className="mt-4 text-base">
              The Red Fort is a UNESCO World Heritage Site and a major attraction for tourists. It’s often compared to Agra Fort, both built of red sandstone but offering unique experiences.
            </p>
            <button className="mt-6 bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition">
              Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
