"use client";
import React, { useEffect, useRef, useState } from "react";
import Sidebar from "@/components/dashboard/SideBar";
import NavBar from "@/components/dashboard/NavBar";
import MainUperPart from "@/components/dashboard/MainUperPart";


const Dashboard = () => {
  const name = "Elkovi's Restraunt"
  return (
    <>
      <div className="flex bg-backColor h-screen w-screen  overflow-x-hidden">
        <Sidebar/>
        <div className="flex flex-col flex-grow ">
          <NavBar page={"Dashboard"}/>
          <div className="px-10 text-white text-4xl font-bold mt-4">{name}</div>
          <MainUperPart className="p-10" />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
