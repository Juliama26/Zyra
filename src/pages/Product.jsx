import * as React from "react";

import { ShopContext } from "../components/organisms/Context/ShopContext";
import { useParams } from "react-router-dom";

export default function Product() {
  const { all_product } = React.useContext(ShopContext);
  const { productId } = useParams();

  const product = all_product.find((item) => item.id === Number(productId));

  return (
    <div>
      <h1>Product</h1>
    </div>
  );
}
