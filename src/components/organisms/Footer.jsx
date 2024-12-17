import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/logo.png";

const menu = ["Company", "Products", "Offers", "About", "Contact"];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="max-w-6xl mx-auto p-3 flex flex-col items-center gap-y-4">
      <section className="flex items-center">
        <img src={logo} alt="assets" className="w-12" />
        <p className="text-3xl font-extrabold">
          Z<span className="text-[#ef4444]">y</span>ra
        </p>
      </section>
      <ul className="flex items-center gap-x-4">
        {menu.map((item, index) => (
          <li key={index}>
            <Link to={`#${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-x-4">
        <Link to={"#"}>
          <FaInstagram size={25} />
        </Link>
        <Link to={"#"}>
          <FaYoutube size={25} />
        </Link>
        <Link to={"#"}>
          <FaWhatsapp size={25} />
        </Link>
      </div>
      <hr className="w-full border-t-2" />
      <p>Copyright &copy; {year} All rights reserved</p>
    </footer>
  );
}
