import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/WCPA_logo.png'

function Header() {
  return (
    <div className="flex flex-row px-1 justify-between items-center h-32 w-full bg-orange-400">
      
      <i class="xs:hidden ml-2 text-3xl fa-solid fa-bars"></i>

      <Link to="/" className="pr-2 mx-auto pt-1">
        <button className="">
          <img src={logo} alt="WCPA Logo" className="h-14" />
        </button>
      </Link>

      <div className="hidden xs:flex flex-row b-2 justify-evenly items-center p-1 w-full">

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
      <button className="bg-orange-400 p-4 rounded-2xl hover:bg-slate-500 hover:text-orange-400 text-3xl font-medium text-slate-500 "> {label} </button>
    </Link>
  );
}

export default Header;
