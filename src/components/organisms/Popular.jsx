import React from "react";
import data_product from "../../assets/data";
import Item from "./Item";

export default function Popular() {
  return (
    <section className="flex flex-col items-center gap-y-2 py-10">
      <h2 className="uppercase text-2xl font-semibold">Popular in women</h2>
      <hr className="w-1/4 border-t-2 border-[#f59e0b]" />
      <div className="flex flex-wrap justify-center gap-4 p-3">
        {data_product.map((item, index) => (
          <Item
            key={index}
            image={item.image}
            name={item.name}
            new_price={item.new_price}
            old_price={item.old_price}
          ></Item>
        ))}
      </div>
    </section>
  );
}
