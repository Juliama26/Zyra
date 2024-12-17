import React from "react";
import { FiArrowRight } from "react-icons/fi";

import hero from "../../assets/hero_image.png";

export default function Hero() {
  return (
    <main className="bg-[#fee2e2]">
      <section className="h-screen max-w-6xl mx-auto p-3 flex flex-col md:flex-row items-center justify-around">
        <section className="flex flex-col gap-y-10">
          <h2 className="uppercase text-xl font-semibold">New Arrivals Only</h2>
          <div className="text-6xl font-semibold">
            <p>new 👋</p>
            <p>colection</p>
            <p>for everyone</p>
          </div>
          <div>
            <button className="btn-red">
              <span>Laste Colaction</span>
              <FiArrowRight />
            </button>
          </div>
        </section>
        <img
          src={hero}
          alt="assets"
          className="max-w-64 mx-auto md:mx-0 md:max-w-sm"
        />
      </section>
    </main>
  );
}
