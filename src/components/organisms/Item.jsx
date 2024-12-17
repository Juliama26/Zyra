import React from "react";

export default function Item(props) {
  // eslint-disable-next-line react/prop-types
  const { image, name, new_price, old_price } = props;
  return (
    <section className="md:max-w-64 border-2 p-3">
      <img src={image} alt={name} className="w-full h-auto object-cover" />
      <p className="text-xl font-semibold py-2">{name}</p>
      <div className="flex justify-between items-center">
        <p className="text-lg text-green-500">${new_price}</p>
        <p className="text-md text-gray-500 line-through">${old_price}</p>
      </div>
    </section>
  );
}
