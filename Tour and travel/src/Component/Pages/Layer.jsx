import React from 'react';
import Data from '../Data';

export default function Layer() {
  return (
    <div className="bg-white text-gray-800 p-6 md:p-12 max-w-screen-xl mx-auto">
      {/* Section 1 - Intro & Artist List */}

      {/* Section 2 - Image Cards */}
      <section className="space-y-12 mt-12">
        <div className='flex'>
<h1 className='Uppercase text-orange-600 text-5xl font-bold'>Heritage </h1>
<h1 className='Uppercase text-slate-600 text-5xl font-bold'>Tour Packages </h1>
</div>
<p>With a rich and diverse history and culture, India is a perfect destination for heritage tours. There are a plethora of heritage sites in India including one of the seven wonders of the world, Taj Mahal that people come to witness from all over the world. With our best heritage tour
   packages, explore the top historical heritage sites and cultural heritage in India to learn more about the country. We offer the b
   est of our services in the heritage tours by arranging expert tour guides, transportation, and accommodations and ensuring a memorable 
   experience.</p>
<Data />
        {/* Card 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          
          <img
            src="https://www.tourmyindia.com/imagess/varanasi-india.webp"
            alt="Art 1"
            className="w-full max-w-md object-cover rounded-lg shadow-md"
          />
          <div>
            <div className='p-10'>
            <p className="text-[15px] mb-4 aligh-right">
                     
<h1 className='Uppercase text-orange-600 text-5xl font-bold'>About </h1>
<h1 className='Uppercase text-slate-600 text-5xl font-bold'>Incridible India</h1><br></br><br></br>


             Interesting and Intriguing, India offers incredible holiday experiences through its cultural, topography, and wildlife diversity. With these amazing and unique experiences, this south Asian country conveniently finds its way into the world tourism map as one of the finest destinations for a holistic vacation. India establishes its identity as the country of architectural masterpieces, making it an ideal travel destination to plan a heritage tour in the world. While Taj Mahal makes for the major draw on an India tour, there are a plethora of monuments and edifices in every India travel guide displaying the fine architecture and grandiose of different eras in the country.

The diverse Indian topography <br></br><br></br>adorned with the impressive Himalayas; long stretches of coastline; expansive hot, cold and white salt deserts; dense forests; alpine meadows and lakes; and scenic waterfalls pique the tourists’ interest. Along with the best nature sightseeing tours, India offers an opportunity to visitors to have a little adventure of their own. The numerous spell-binding and less-trodden trails give trekking tour opportunities in South Asia unlike any other.
            </p>
            <button className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition">
              Visit
            </button></div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
          <div>
            <p className="text-base mb-4">
                            <div className='flex'>
              <h1 className='Uppercase text-orange-600 text-5xl font-bold'>TAJ </h1>
<h1 className='Uppercase text-slate-600 text-5xl font-bold'>Mahal</h1>
</div><br></br><br></br>
India is incredible due to its rich history, diverse culture, and significant contributions to various fields. It's the birthplace of several ancient practices like yoga and Ayurveda, boasts the world's largest democracy, and is home to a stunning array of flora and fauna. Furthermore, India's contributions to mathematics, such as the concept of zero and the development of algebra, trigonometry, and calculus, have had a lasting impact on global knowledge. <br></br>
<br></br>The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan to house the tomb of his beloved wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself.
           <br></br><br></br>The Taj Mahal was designated as a UNESCO World Heritage Site in 1983 for being “the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage”. It is regarded by many as the best example of Mughal architecture and a symbol of India's rich history. </p>
            <button className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition">
              Visit
            </button>
          </div>
          <img
            src="https://images.pexels.com/photos/28888370/pexels-photo-28888370.jpeg"
            alt="Art 2"
            className="w-full max-w-md object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Card 3 */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <img
            src="https://images.pexels.com/photos/7639065/pexels-photo-7639065.jpeg"
            alt="Art 3"
            className="w-full max-w-md object-cover rounded-lg shadow-md"
          />
          <div>
            <div className='p-10'>
            <p className="text-base mb-4">
                            <div className='flex'>
              <h1 className='Uppercase text-orange-600 text-5xl font-bold'>Red </h1>
<h1 className='Uppercase text-slate-600 text-5xl font-bold'>Fort</h1>
</div><br></br><br></br>
The Red Fort, also known as Lal Qila, is famous for being a historical fort complex in Delhi, India, and a powerful symbol of India's rich political heritage and sovereignty. Built by Mughal Emperor Shah Jahan in the 17th century, it served as the main residence of the Mughal emperors. The fort is renowned for its massive red sandstone walls, intricate architecture, and its significance as a site where India's first Prime Minister, Jawaharlal Nehru, hoisted the national flag on Independence Day, a tradition that continues annually. 
<br></br><br></br>s, the Red Fort in Delhi is generally considered worth visiting. It's a significant historical site, a UNESCO World Heritage Site, and a popular tourist attraction. Its impressive architecture, rich history, and cultural significance make it a worthwhile visit for anyone interested in exploring India's heritage. 
<br></br><br></br>ral structures, but they offer distinct experiences. Agra Fort, built primarily of red sandstone, is a UNESCO World Heritage site and was the main residence of Mughal emperors until 1638. The Red Fort, also in red sandstone, is a larg
            </p>
            <button className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition">
              Visit
            </button></div>
          </div>
        </div>
      </section>

      {/* Footer Placeholder */}
    </div>
  );
}
