import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10 py-8">
      <div className="w-[88%] mx-auto flex flex-wrap justify-between gap-y-8 md:gap-y-0">
        <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 text-white text-center sm:text-left px-4">
          <h3 className="mb-2 text-lg font-semibold">Useful Links</h3>
          <p className="mb-2 text-lg cursor-pointer hover:text-orange-400">Delivery Information</p>
          <p className="mb-2 text-lg cursor-pointer hover:text-orange-400">International Shipping</p>
          <p className="mb-2 text-lg cursor-pointer hover:text-orange-400">Payment Option</p>
          <p className="mb-2 text-lg cursor-pointer hover:text-orange-400">Track your order</p>
          <p className="mb-2 text-lg cursor-pointer hover:text-orange-400">Return</p>
          <p className="mb-2 text-lg cursor-pointer hover:text-orange-400">Find a Store</p>
        </div>

        <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 text-white text-center sm:text-left px-4">
          <h3 className="mb-2 text-lg font-semibold">Information</h3>
          <p className="mb-2 text-lg cursor-pointer hover:text-orange-400">Blog</p>
          <p className="mb-2 text-lg cursor-pointer hover:text-orange-400">Offers & Contest Detail</p>
          <p className="mb-2 text-lg cursor-pointer hover:text-orange-400">Help & FAQs</p>
          <p className="mb-2 text-lg cursor-pointer hover:text-orange-400">About Mokash's</p>
          <p className="mb-2 text-lg cursor-pointer hover:text-orange-400">High Quality</p>
          <p className="mb-2 text-lg cursor-pointer hover:text-orange-400">Trusted Institute</p>
        </div>

        <div className="flex flex-col w-full sm:w-full md:w-1/3 text-white text-center md:text-left px-4">
          <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
          <p className="mb-1 text-lg">8634-452-3489</p>
          <h4 className="mb-1 text-lg">Chat With Us</h4>
          <p className="mb-4 text-lg">+91 7845620938</p>
          <hr className="border-white/50 mb-4" />
          <div className="flex justify-center md:justify-start space-x-6">
            {/* Replace with actual SVG icons */}
            <svg className="h-8 w-8 text-white" fill="currentColor" aria-label="WhatsApp icon">
              {/* SVG content */}
            </svg>
            <svg className="h-8 w-8 text-white" fill="currentColor" aria-label="Email icon">
              {/* SVG content */}
            </svg>
            <svg className="h-8 w-8 text-white" fill="currentColor" aria-label="Chat dots icon">
              {/* SVG content */}
            </svg>
          </div>
          <p className="mt-6 text-lg">Customer Review</p>
        </div>
      </div>
    </footer>
  );
}
