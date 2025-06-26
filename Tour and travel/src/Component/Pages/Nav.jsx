import React, { useState } from 'react';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-500 px-4 py-3">
      <div className="flex justify-center items-center">
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" s trokeLinejoin="round" strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:flex justify-center md:items-center md:space-x-4 mt-3 md:mt-0`}>
        <a href="/" className="block px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</a>
        <a href="/Destinantion" className="block px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900">Destination</a>
        <a href="/projects" className="block px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900">Projects</a>
        <a href="/reports" className="block px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900">Reports</a>
        {/* Optional Search */}
        {/* <input className="h-8 px-2 mt-2 md:mt-0 rounded" type="search" placeholder="Search here..." /> */}
      </div>
    </nav>
  );
}
