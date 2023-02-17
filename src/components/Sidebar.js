import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const ismenuOpen = useSelector((store) => store.collapse.isMenuopen);

  return ismenuOpen ? (
    <div className="h-full shadow-md p-5 pt-3 w-[216px] text-lg">
      <ul>
        <li className="cursor-pointer  hover:bg-gray-100 rounded-lg p-2">
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer  hover:bg-gray-100 rounded-lg p-2">
          Library
        </li>
        <li className="cursor-pointer  hover:bg-gray-100 rounded-lg p-2">
          Subscriptions
        </li>
      </ul>
      <ul className="mt-3 pt-3 border-t">
        <li className="cursor-pointer  hover:bg-gray-100 rounded-lg p-2">
          Watch later
        </li>
        <li className="cursor-pointer  hover:bg-gray-100 rounded-lg p-2">
          History
        </li>
      </ul>
      <h1 className="mt-3 pt-3 border-t font-semibold m-2">Subscriptions</h1>
      <ul>
        <li className="cursor-pointer  hover:bg-gray-100 rounded-lg p-2">
          Movies
        </li>
        <li className="cursor-pointer  hover:bg-gray-100 rounded-lg p-2">
          Sports
        </li>
        <li className="cursor-pointer  hover:bg-gray-100 rounded-lg p-2">
          Gaming
        </li>
      </ul>
    </div>
  ) : null;
};

export default Sidebar;
