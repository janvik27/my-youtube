import React from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { HiUserCircle } from "react-icons/hi";
import youtube from "../assets/images/youtube.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/collapseSlice";

const Head = () => {
  const dispatch = useDispatch();
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg  h-[56px] bg-white ">
      {/* 1st div  */}
      <div className="col-span-1 flex">
        <div className="mt-1 mr-3 cursor-pointer">
          <FiMenu
            size="1.6rem"
            onClick={() => {
              handleToggleMenu();
            }}
          />
        </div>
        <a href="/">
          <img
            className="h-8 mx-2 cursor-pointer"
            src={youtube}
            alt="youtube"
          />
        </a>
      </div>

      {/* 2nd div  */}
      <div className="col-span-10 flex pl-40 h-[40px]">
        <input
          type="text"
          placeholder="Search"
          className="w-1/2 border-solid border-[1px] border-gray-400 rounded-l-3xl px-4 py-2 focus:outline-gray-400"
        ></input>
        <button className=" w-14 px-4 border-gray-400 border rounded-r-3xl bg-gray-100">
          <AiOutlineSearch size="1.2rem" color="gray" />
        </button>
      </div>

      {/* 3rd div  */}
      <div className="col-span-1">
        <HiUserCircle size="2.2rem" />
      </div>
    </div>
  );
};

export default Head;
