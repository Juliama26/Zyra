import React from "react";

import exclusive from "../../assets/exclusive_image.png";

export default function Offers() {
  return (
    <div className="max-w-6xl mx-auto p-3 flex items-center justify-around bg-[#fee2e2]">
      <div className="space-y-3 md:space-y-6">
        <h1 className="text-3xl md:text-5xl font-semibold">Exclusive</h1>
        <h1 className="text-3xl md:text-5xl font-semibold">Offers for you</h1>
        <p className="uppercase">Only on best seller products</p>
        <button className="btn-primary px-4 py-2 rounded-md">Check Now</button>
      </div>
      <div>
        <img src={exclusive} alt="assets" className="w-full md:w-64" />
      </div>
    </div>
  );
}
