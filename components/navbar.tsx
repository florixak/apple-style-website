import Image from "next/image";
import React from "react";
import Logo from "@/public/logo.svg";
import Cart from "@/public/cart.svg";
import Search from "@/public/search.svg";
import { navLinks } from "@/constants";
import Link from "next/link";

const NavBar = () => {
  return (
    <header>
      <nav>
        <Image src={Logo} alt="Apple Logo" />
        <ul>
          {navLinks.map(({ label }) => (
            <li key={label}>
              <Link href={label}>{label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex-center gap-3">
          <button>
            <Image src={Search} alt="Search" />
          </button>
          <button>
            <Image src={Cart} alt="Cart" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
