
import React from "react";
import { Link } from "react-router-dom";
import Logo from ".././images/Component 40.png";

export default function Nav() {
  return (
    <nav className="text-white p-4">
    <div className="container mx-auto flex items-center justify-between">
      {/* Logo and Home link */}
      <div className="flex items-center gap-">
        <img src={Logo} alt="Logo" className="mr-3 h-6 sm:h-9" />
        <div className="ml-[43rem]">
          <Link
            to={''}
            className="text-black px-3 py-2 rounded-md text-sm font-medium hover:text-gray-300"
          >
            Home
          </Link>
          <Link
            to={''}
            className="text-black px-3 py-2 rounded-md text-sm font-medium hover:text-gray-300"
          >
            Flashcard
          </Link>
          <Link
            to={''}
            className="text-black px-3 py-2 rounded-md text-sm font-medium hover:text-gray-300"
          >
            Contact
          </Link>
          <Link
            to={''}
            className="text-black px-3 py-2 rounded-md text-sm font-medium hover:text-gray-300"
          >
           FAQ
          </Link>
        </div>
      </div>
  
      {/* Login Button */}
      <Link className="text-white bg-gradient-to-bl  from-deep-blue via-darker-blue via-blue to-medium-blue px-7 py-3 rounded-full text-sm font-medium ml-auto">
        Login
      </Link>
    </div>
  </nav>
  
  );
}
