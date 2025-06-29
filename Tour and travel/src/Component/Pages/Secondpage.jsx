import React from 'react';

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://www.tourmyindia.com/weekend-tours/images/lonavala-weekend-tour1.webp',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Black',
  },
    {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://www.tourmyindia.com/blog//wp-content/uploads/2025/06/Popular-Short-Treks-in-Sikkim.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Black',
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://www.tourmyindia.com/blog//wp-content/uploads/2025/06/Rabangla-to-Maenam-Hill-Trek-768x512.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Black',
  },
    {
    id: 4,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://www.tourmyindia.com/weekend-tours/images/mahabaleshwar-weekend-tour2.webp',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Black',
  },

  

  // More products...
]



export default function Secondpage() {
  return (
    <div className="container   mx-auto  lg:p-8">
{/* <h1 className="text-slate-700 font-bold uppercase my-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
  Top Trending Destinations
</h1>
<p className="text-slate-700 font-semibold my-2 text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">
  View All Tours...
</p> */}
    <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
<p className='text-slate-700 my-2 font-bold  text-lg sm:text-xl md:text-2xl lg:text-xl ' >Best Selling Heritage Tour Packages</p>

        <div className="grid h-23 grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </div>
    </div>
  );
}
