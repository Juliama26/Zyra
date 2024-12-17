import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./AppRoutes";
import ShopProvider from "./components/organisms/Context/ShopContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ShopProvider>
      <AppRoutes />
    </ShopProvider>
  </StrictMode>
);
