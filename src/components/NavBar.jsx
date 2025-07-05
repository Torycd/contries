import React from "react";
import { FaMoon, FaRegMoon } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="flex justify-between shadow-xl py-4 px-20 font-bold bg-white border-b-gray-50">
      <h2 className="">Where in the world?</h2>
      <div className="flex items-center gap-4 text-gray-600">
        <span>
          <FaRegMoon className="" />
        </span>
        <p className="">Dark Mode</p>
      </div>
    </div>
  );
};

export default NavBar;
