"use client";

import React, { useEffect, useState } from "react";
import { CiUser } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { SlArrowRight } from "react-icons/sl";
import { BiMessageDetail } from "react-icons/bi";
import { ImCoinDollar } from "react-icons/im";
import { MdOutlineArrowDropDown } from "react-icons/md";

function MenuComponent({ activeTab, setActiveTab }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div
        className={`absolute flex shrink-0 grow-0 max-w-[300px]  h-screen transition-all duration-300 ease-in-out ${
          isMenuOpen ? " sm:relative left-0" : "left-[-290px] "
        }`}
      >
        <div className="w-[300px] h-full flex flex-col bg-[#393A85]">
          {/* bg-[#393A85] */}
          <div className="flex items-center justify-between ">
            <div className="flex items-center justify-start ">
              <CiUser size={30} className="text-white" />
              <p className="text-white p-4">Hello User</p>
            </div>
            <IoNotificationsOutline size={30} className="text-white" />
          </div>

          <hr />
          <div className="flex flex-1  flex-col items-start  text-white">
            <div
              className={` p-2 flex hover w-full ${
                activeTab === "discussion" ? "bg-[#14142f]" : ""
              }`}
              onClick={() => {
                setIsMenuOpen(false);
                setActiveTab("discussion");
              }}
            >
              <BiMessageDetail size={20} />
              <button className="pl-3 ">Discussion Fourm</button>
              <MdOutlineArrowDropDown className="text-2xl ml-auto" />
            </div>
            <div
              className={`p-2 flex items-center w-full ${
                activeTab === "stories" ? "bg-[#14142f]" : ""
              }`}
              onClick={() => {
                setIsMenuOpen(false);
                setActiveTab("stories");
              }}
            >
              <ImCoinDollar size={20} className="" />
              <button className="pl-3">Market Stories</button>
            </div>
            <button className="pl-3 p-2">Sentiment</button>
            <button className="pl-3 p-2">Market</button>
            <button className="pl-3 p-2">Sector</button>
            <button className="pl-3 p-2">Wishlist</button>
            <button className="pl-3 p-2">Events</button>
            <button className="pl-3 p-2">News/Interview</button>
          </div>
        </div>

        {/* Hamberger */}
        <div
          className={`h-full w-[10px] bg-gray-200 flex flex-col justify-center items-center `}
        >
          {/* left-[300px] */}
          <button
            className="bg-[#393A85] h-[70px] "
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <SlArrowRight className="text-white" size={10} />
          </button>
        </div>
      </div>
    </>
  );
}

export default MenuComponent;
