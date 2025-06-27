import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-slate-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-12 items-center">
            {/* Logo or Brand */}
            <div className="flex-shrink-0">
              <a href="/home" className="text-lg font-bold">Logo</a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4">
              <a href="/home" className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</a>
              <a href="/destinantion" className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900">Destination</a>
              <a href="/Contact" className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900">Contact</a>
              <a href="/About" className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900">About</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md hover:bg-slate-600 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-slate-400">
            <a href="/home" className="block px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</a>
            <a href="/destinantion" className="block px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900">Destination</a>
            <a href="/Contact" className="block px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900">Contact</a>
            <a href="/About" className="block px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900">About</a>
          </div>
        )}
      </nav>
    </>
  );
}
