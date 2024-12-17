import React from "react";

export default function NewsLetter() {
  return (
    <section className="max-w-6xl mx-auto p-3 flex flex-col items-center gap-y-4 py-10 bg-[#fffbeb] ">
      <h1 className="text-3xl md:text-5xl font-semibold">
        Get exclusive offers on your email
      </h1>
      <p className="text-lg">
        Subscribe to our news letter and stay up to date
      </p>
      <div className="flex items-center gap-x-4">
        <input
          type="text"
          placeholder="Enter your email"
          className=" px-4 py-2 outline-none border-2 rounded-full"
        />
        <button className="btn-red">Subscribe</button>
      </div>
    </section>
  );
}
