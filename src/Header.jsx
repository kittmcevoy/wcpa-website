import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/WCPA_logo.png'

function Header() {
  return (
    <div className="flex flex-row px-1 items-center h-20 w-full bg-orange-400">

      <Link to="/" className="pt-1">
        <button className="">
          <img src={logo} alt="WCPA Logo" className="h-14" />
        </button>
      </Link>
      <div className="flex flex-row b-2 justify-evenly items-center p-1 w-full">
        <Link to="/national_league">
          <button className="border-2 p-1 h-10 border-solid bg-gray-300 text-center text-orange-400 border-gray-400 hover:text-white hover:bg-orange-400"> National League </button>
        </Link>

        <Link to="/social_league">
          <button className="border-2 p-1 h-10 border-solid bg-gray-300 text-center text-orange-400 border-gray-400 hover:text-white hover:bg-orange-400"> Social League </button>
        </Link>

        <Link to="/registration">
          <button className="border-2 p-1 h-10 border-solid bg-gray-300 text-center text-orange-400 border-gray-400 hover:text-white hover:bg-orange-400"> Registration </button>
        </Link>

        <Link to="/committee">
          <button className="border-2 p-1 h-10 border-solid bg-gray-300 text-center text-orange-400 border-gray-400 hover:text-white hover:bg-orange-400"> Committee </button>
        </Link>
      </div>

    </div>

  );
}

export default Header;
