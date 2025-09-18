import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/WCPA_logo.png'

function Header() {
  return (
    <div className="flex flex-col fixed top-0 left-0 px-1 justify-between items-center w-full bg-orange-400">
      
      <i className="xs:hidden ml-2 text-3xl fa-solid fa-bars"></i>

      <div className="text-6xl text-white font-serif"> Wellington Canoe Polo </div>
      <div> Mission Statement</div>

      <div className="mt-2 hidden xs:flex bg-gray-700 flex-row b-2 justify-evenly items-center w-screen">

        <HeaderButton label="National League" link="/national_league" />
        <HeaderButton label="Social League" link="/soacial_league" />
        <HeaderButton label="Registration" link="/registration" />
        <HeaderButton label="Committee" link="/committee" />

      </div>

    </div>

  );
}

function HeaderButton({ link, label }) {
  return(
    <Link to={link}>
      <button className="p-4 rounded-2xl hover:bg-white-400 hover:text-orange-400 text-xl font-medium text-white"> {label} </button>
    </Link>
  );
}

export default Header;
