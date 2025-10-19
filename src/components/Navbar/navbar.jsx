import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = navLinks.map((nav) => (
    <li className="ml-5" key={nav.id}>
      <a href={nav.path}>{nav.name}</a>
    </li>
  ));
  return (
    <nav className=" flex justify-between mx-7 mt-5 ">
      <span className="flex" onClick={() => setOpen(!open)}>
        {open ? (
          <X className="md:hidden"></X>
        ) : (
          <Menu className="md:hidden"></Menu>
        )}
        <ul
          className={`md:hidden absolute bg-amber-200 duration-1000 ${
            open ? "top-8" : "-top-30"
          }`}
        >
          {links}
        </ul>

        <h1 className="ml-5">My Nav</h1>
      </span>
      <ul className="md:flex hidden">{links}</ul>

      {/* //{" "}
      <ul className="flex">
        //{" "}
        <li className="ml-5">
          // <a href="/home">Home</a>
          //{" "}
        </li>
        //{" "}
        <li className="ml-5">
          // <a href="/about">About</a>
          //{" "}
        </li>
        //{" "}
        <li className="ml-5">
          // <a href="/profile">Profile</a>
          //{" "}
        </li>
        //{" "}
      </ul> */}
      <button>signUp</button>
    </nav>
  );
};

export default Navbar;
