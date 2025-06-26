import React from 'react';

export default function Secondpage() {
  return (
    <div className="container   mx-auto p-20 lg:p-8">
<h1 className="text-black font-bold uppercase my-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
  Top Trending Destinations
</h1>
<p className="text-black font-semibold my-2 text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">
  View All Tours...
</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 auto-rows-fr">
        <div>
        <img
          src="https://www.tourmyindia.com/imagess/sikkim01-package.webp"
          alt="Sikkim"
          className="w-full h-full rounded-lg object-cover"
        />
        <p className='my-3 font-bold  font-2xl text-slate-500 '>40+ packages</p>
        <h1 className='uppercase font-bold text-slate-800 font-sans '>Sikkim</h1>
     </div>
       <div>
        <img
          src="https://www.tourmyindia.com/imagess/delhi-package.webp"
          alt="Delhi"
          className="w-full h-full rounded-lg object-cover"
        />        <p className='my-3 font-bold  font-2xl text-slate-500 '>40+ packages</p>
        <h1 className='uppercase font-bold text-slate-800 font-sans '>Delhi</h1>
</div>
        <div>
        <img
          src="https://www.tourmyindia.com/imagess/himachal-package.webp"
          alt="Himachal"
          className="w-full h-full rounded-lg object-cover"
        />        <p className='my-3 font-bold  font-2xl text-slate-500 '>40+ packages</p>
        <h1 className='uppercase font-bold text-slate-800 font-sans '>Himachal</h1>
</div>
        <div>
        <img
          src="https://www.tourmyindia.com/imagess/rajasthan-package.webp"
          alt="Rajasthan"
          className="w-full h-full rounded-lg object-cover"
        />        <p className='my-3 font-bold  font-2xl text-slate-500 '>40+ packages</p>
        <h1 className='uppercase font-bold text-slate-800 font-sans '>Rajasthan</h1>
</div>
        <div>
        <img
          src="https://www.tourmyindia.com/imagess/uttarakhand01-package.webp"
          alt="Uttarakhand"
          className="w-full h-full rounded-lg object-cover sm:col-span-2 lg:col-span-1"
        />        <p className='my-3 font-bold  font-2xl text-slate-500 '>40+ packages</p>
        <h1 className='uppercase font-bold text-slate-800 font-sans '>Uttarakhand</h1>
</div>
        <div>
          <img
          src="https://www.tourmyindia.com/imagess/himachal-package.webp"
          alt="Himachal"
          className="w-full h-full rounded-lg object-cover"
        />        <p className='my-3 font-bold  font-2xl text-slate-500 '>40+ packages</p>
        <h1 className='uppercase font-bold text-slate-800 font-sans '>Himachal</h1>
</div>
      </div>
    </div>
  );
}
