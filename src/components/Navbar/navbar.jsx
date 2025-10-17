import React, { useLayoutEffect } from "react";
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
  return (
    <nav>
      {navLinks.map((nav) => (
        <ul key={nav.id}>
          <li>
            <a href={nav.path}>{nav.name}</a>
          </li>
        </ul>
      ))}
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
    </nav>
  );
};

export default Navbar;
