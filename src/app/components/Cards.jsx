import React from "react";
import { RxAvatar } from "react-icons/rx";
import { AiOutlineLike } from "react-icons/ai";
import { FiEye } from "react-icons/fi";
import { VscComment } from "react-icons/vsc";
import { LuShare2 } from "react-icons/lu";

const Cards = ({ data }) => {
  return (
    <div className="w-full  overflow-hidden  rounded-md shadow-md border-gray-200 border shadow-gray-400 flex gap-2 p-2 ">
      <RxAvatar className="text-2xl sm:text-4xl " />
      <div className="flex flex-col flex-1 w-full gap-3">
        <div className="flex justify-start items-center gap-2">
          <h1 className="text-lg font-bold leading-none">{data.name}</h1>
          <div className="flex items-center bg-[#393A85] text-white rounded-2xl text-xs px-2  ">
            Sector 2
          </div>
        </div>

        <p className="overflow-ellipsis text-balance text-xs sm:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe animi
          ullam adipisci,
        </p>

        <ul className="flex items-center justify-between w-full gap-3 text-xs">
          <li className="flex items-center">
            <AiOutlineLike className="cursor-pointer" />
            <p>2K</p>
          </li>
          <li className="flex items-center">
            <FiEye className=" cursor-pointer" />
            <p>2K</p>
          </li>
          <li className="flex items-center">
            <VscComment className=" cursor-pointer" />
            <p>2K Comments</p>
          </li>
          <li className="flex items-center">
            <LuShare2 className=" cursor-pointer" />
            <p>Share</p>
          </li>
        </ul>
      </div>
      <p className="text-[#393A85] text-xs ml-auto ">2min ago</p>
    </div>
  );
};

export default Cards;
