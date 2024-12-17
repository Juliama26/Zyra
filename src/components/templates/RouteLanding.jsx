import React from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

// eslint-disable-next-line react/prop-types
export default function RouteLanding({ children }) {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <Header></Header>
      {children}
      <Footer></Footer>
    </main>
  );
}
