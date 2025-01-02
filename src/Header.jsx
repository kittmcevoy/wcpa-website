import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/WCPA_logo.png'

function Header() {
  return (
    <div className="flex flex-row px-1 justify-between items-center h-20 w-full bg-orange-400">

      <i class="xs:hidden ml-2 text-3xl fa-solid fa-bars"></i>

      <Link to="/" className="pr-2 mx-auto pt-1">
        <button className="">
          <img src={logo} alt="WCPA Logo" className="h-14" />
        </button>
      </Link>

      <div className="hidden xs:flex flex-row b-2 justify-evenly items-center p-1 w-full">

        <Link to="/national_league">
          <button className="text-white text-2xl hover:text-gray-400"> National League </button>
        </Link>

        <Link to="/social_league">
          <button className="text-white text-2xl hover:text-gray-400"> Social League </button>
        </Link>

        <Link to="/registration">
          <button className="text-white text-2xl hover:text-gray-400"> Registration </button>
        </Link>

        <Link to="/committee">
          <button className="text-white text-2xl hover:text-gray-400"> Committee </button>
        </Link>
      </div>

    </div>

  );
}

export default Header;
