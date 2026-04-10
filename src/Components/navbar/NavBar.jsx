import React from "react";
import dollerImg from "../../assets/Coin.png"

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <button className="btn flex justify-between items-center gap-2 font-bold text-xl">
        0 Coins
          <img src={dollerImg} alt="" />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
