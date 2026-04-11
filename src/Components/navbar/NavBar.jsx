import React from "react";
import dollerImg from "../../assets/Coin.png"
import logoImg from '../../assets/logo.png'

const NavBar = ({coin}) => {
  return (
    <div className="navbar bg-base-100 shadow-sm container mx-auto mb-4 mt-4 rounded-xl">
      <div className="flex-1">
        {/* <a className="btn btn-ghost text-xl"></a> */}
        <img src={logoImg} alt="" />
      </div>
     
      <div className="flex justify-center items-center gap-4">
      <div className="">
        <ul className="flex items-center gap-4">
          <li><a href="/">Home</a></li>
          <li><a href="/Fixture">Fixture</a></li>
          <li><a href="/Teams">Teams</a></li>
          <li><a href="/Schedules">Schedules</a></li>
        </ul>
      </div>
       <div className="">
         <button className="btn flex justify-between items-center gap-2 font-bold text-xl">
        {coin} Coins
          <img src={dollerImg} alt="" />
        </button>
       </div>
      </div>
    </div>
  );
};

export default NavBar;
