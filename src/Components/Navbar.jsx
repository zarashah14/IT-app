import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';

import Container from "../Mycontainer/Container";



import Logo from "../assets/logo";
import Burger from "../assets/Hamburger";
import Close from "../assets/Close";

function Navbar() {
    const [menuClosed, setMenuClosed] = useState(true);
    return (
       <>
       <Container>
         <nav className="flex flex-col md:flex-row mt-8 md:h-0 justify-between md:items-center md:mt-8">
         <div className="mt-4 flex justify-between items-center">
            <Logo />
            <button
              className="text-3xl block md:hidden mr-4  text-primary"
              onClick={() => setMenuClosed((closed) => !closed)}
            >
              {menuClosed ? <Burger /> : <Close />}
            </button>
         </div>
          <ul className="">
          <Link
              className="md:ml-12 text-[#F18585] border-b-2 border-b-[#F18585]"
              href="/"
            >
              Home
            </Link>
            <Link
              className="md:ml-12 hover:text-[#F18585] hover:border-b-2 hover:border-b-[#F18585]"
              href="/"
            >
              About
            </Link>
            <Link
              className="md:ml-12 hover:text-[#F18585] hover:border-b-2 hover:border-b-[#F18585]"
              href="/"
            >
              Products
            </Link>
            <Link
              className="md:ml-12 hover:text-[#F18585] hover:border-b-2 hover:border-b-[#F18585]"
              href="/"
            >
              Contact
            </Link>
            <Link
              className="md:ml-12 bg-[#F18585] w-full px-2 md:px-4 lg:px-8 rounded-full hover:bg-white border-2 border-[#F18585] hover:text-[#F18585] text-white md:py-1 py-1.5"
              href="/"
            >
              Sign In
            </Link>
         </ul>
         </nav>
       </Container>
       </>
    );
  }
  
  export default Navbar;