import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="grid grid-flow-col">
      <Sidebar />
      {/* <MainContainer /> */}
      <Outlet /> {/* outlet will be either maincontainer or watchpage*/}
    </div>
  );
};

export default Body;
