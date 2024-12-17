import * as React from "react";

import all_product from "../../../assets/all_product";

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = React.createContext(null);
// eslint-disable-next-line react/prop-types
export default function ShopProvider({ children }) {
  const contextValue = { all_product };
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
}
