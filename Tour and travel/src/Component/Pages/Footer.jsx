import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="h-30">

      <div className="flex flex-wrap justify-between w-[88%] mx-auto py-6 space-y-8 md:space-y-0">
        <div className="flex flex-col w-full md:w-1/3 text-white">
          <h3 className="mb-1 text-lg font-semibold">Useful Links</h3>
          <p className="mb-2 text-lg">Delivery Information</p>
          <p className="mb-2 text-lg">International Shipping</p>
          <p className="mb-2 text-lg">Payment Option</p>
          <p className="mb-2 text-lg">Track your order</p>
          <p className="mb-2 text-lg">Return</p>
          <p className="mb-2 text-lg">Find a Store</p>
        </div>

        <div className="flex flex-col w-full md:w-1/3 text-white">
          <h3 className="mb-1 text-lg font-semibold">Information</h3>
          <p className="mb-2 text-lg">Blog</p>
          <p className="mb-2 text-lg">Offers & Contest Detail</p>
          <p className="mb-2 text-lg">Help & FAQs</p>
          <p className="mb-2 text-lg">About Mokash's</p>
          <p className="mb-2 text-lg">High Quality</p>
          <p className="mb-2 text-lg">Trusted Institute</p>
        </div>

        <div className="flex flex-col w-full md:w-1/3 text-white">
          <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
          <p className="mb-1 text-lg">8634-452-3489</p>
          <h4 className="mb-1 text-lg">Chat With Us</h4>
          <p className="mb-4 text-lg">+91 7845620938</p>
          <hr className="border-white/50 mb-1" />
          <div className="flex space-x-4">
            <svg className="h-[30px] w-[30px] text-white" fill="currentColor" /* WhatsApp icon */>…</svg>
            <svg className="h-[30px] w-[30px] text-white" fill="currentColor" /* Email icon */>…</svg>
            <svg className="h-[30px] w-[30px] text-white" fill="currentColor" /* Chat dots icon */>…</svg>
          </div>
          <p className="mt-4 text-lg">Customer Review</p>
        </div>
      </div>
      </div>


    </footer>
  );
}
