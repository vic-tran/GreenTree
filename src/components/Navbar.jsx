import React, { useState } from "react";
import { Link } from "react-router-dom";
import GT from "../assets/GT.png";

const Navbar = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] text-current">
      <div className="flex justify-between items-center w-full px-2 2xl:px-16">
        <a href="/" className="cursor-pointer">
          <img src={GT} alt="/" width="100" height="50" className="pt-1" />
        </a>
        <div>
          <ul className="flex justify-between items-center w-full px-5 2xl:px-16 ml-5 text-lg uppercase cursor-pointer">
            <li>
              <Link to="/" className="ml-10 text-lg uppercase hover:border-b">
                Home
              </Link>
            </li>
            {/*<li>
              <Link
                to="/about"
                className="ml-10 text-lg uppercase hover:border-b"
              >
                About
              </Link>
              </li> */}

             <li>
              <Link
                to="/events"
                className="ml-10 text-lg uppercase hover:border-b"
              >
                Events
              </Link>
            </li> 

            <li>
              <Link
                to="/architectural"
                className="ml-10 text-lg uppercase hover:border-b"
              >
                {" "}
                Architectural
              </Link>
            </li>

            {/*<li>
              <Link
                to="/amenities"
                className="ml-10 text-lg uppercase hover:border-b"
              >
                {" "}
                Amenities
              </Link>
            </li>
            {/*<li> 
                <Link to="/support" className='ml-10 text-lg uppercase hover:border-b'>Support</Link>
              </li> */}
            <li>
              <Link
                to="/contact"
                className="ml-10 text-lg uppercase hover:border-b"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
