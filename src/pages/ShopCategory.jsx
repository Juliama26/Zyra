import * as React from "react";
import { FiChevronDown } from "react-icons/fi";
import { ShopContext } from "../components/organisms/Context/ShopContext";
import RouteLanding from "../components/templates/RouteLanding";
import Item from "../components/organisms/Item";

export default function ShopCategory(props) {
  // eslint-disable-next-line react/prop-types
  const { banner, category } = props;
  const { all_product } = React.useContext(ShopContext);
  return (
    <>
      <RouteLanding>
        <section className="max-w-6xl mx-auto px-3 mt-20 md:mt-24 lg:mt-28">
          <img src={banner} alt="assets" className="h-32 md:h-40 lg:h-56" />
          <section className="flex items-center justify-between my-4">
            <p>
              <span>Showing 1-12</span> out off {all_product.length} products
            </p>
            <div className="flex items-center gap-x-1">
              <p>Sort By</p>
              <FiChevronDown size={22} />
            </div>
          </section>
          <section className="flex flex-wrap justify-center gap-4 p-3">
            {all_product
              .filter((item) => item.category === category)
              .map((item) => (
                <Item
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              ))}
          </section>
        </section>
      </RouteLanding>
    </>
  );
}
