import * as React from "react";
import { Link } from "react-router-dom";
import {
  AiTwotoneShopping,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

import logo from "../../assets/logo.png";
import Button from "../atoms/Button";

const menu = ["men", "women", "kids"];

export default function Header() {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="border-b-2 fixed top-0 right-0 left-0 z-50 bg-[#f1f5f9]">
      <nav className="max-w-6xl mx-auto p-3 flex items-center justify-between">
        <section className="flex items-center">
          <img src={logo} alt="assets" className="w-12" />
          <p className="text-3xl font-extrabold">
            Z<span className="text-[#ef4444]">y</span>ra
          </p>
        </section>
        <ul className="hidden lg:flex items-center gap-x-4 capitalize text-lg">
          <Link
            to={"/"}
            className="relative hover:text-[#f59e0b] after:contents-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#f59e0b] after:transition-all after:duration-300 hover:after:w-full"
          >
            shop
          </Link>
          {menu.map((item, index) => (
            <li
              key={index}
              className="relative hover:text-[#f59e0b] after:contents-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#f59e0b] after:transition-all after:duration-300 hover:after:w-full"
            >
              <Link to={`/${item}`}>{item}</Link>
            </li>
          ))}
        </ul>
        <section className="hidden lg:flex items-center gap-x-4">
          <Button>
            <Link to={"/login"} className="text-lg">
              Login
            </Link>
          </Button>
          <Link to={"/cart"} className="relative">
            <AiTwotoneShopping size={35} />
            <p className="primary absolute top-1 right-0 text-xs px-1 rounded-full">
              10
            </p>
          </Link>
        </section>
        <button onClick={() => setOpen(!open)} className="lg:hidden">
          {open ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </button>
      </nav>
    </header>
  );
}
