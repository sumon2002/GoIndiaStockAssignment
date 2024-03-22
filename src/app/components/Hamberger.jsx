import React from "react";
import { SlArrowRight } from "react-icons/sl";
// import MenuComponent from "./MenuComponent";

function Hamberger() {
  //   const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className="absolute top-[50%] w-[10px] bg-blue-900 h-[70px] flex items-center">
        {/* left-[150px] */}
        <button>
          <SlArrowRight className="text-white" size={10} />
        </button>
      </div>
    </>
  );
}

export default Hamberger;

// import React, { useState } from "react";
// import { CiUser } from "react-icons/ci";
// import { IoNotificationsOutline } from "react-icons/io5";
// import { SlArrowRight } from "react-icons/sl";

// function MenuComponent() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   return (
//     <>
//       {isMenuOpen ? (
//         <div className="bg-blue-900 h-screen flex flex-col">
//           <div>
//             <div className="flex items-center p-3 justify-around">
//               <div className="flex items-center justify-start">
//                 <CiUser size={30} />
//                 <p>Hello User</p>
//               </div>
//               <IoNotificationsOutline size={30} />
//             </div>
//           </div>
//           <div>Lists</div>

//           {/* Hamberger */}
//           <div className="absolute top-[50%] left-[300px] w-[10px] bg-blue-900 h-[70px] flex items-center">
//             {/* left-[300px] */}
//             <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
//               <SlArrowRight className="text-white" size={10} />
//             </button>
//           </div>
//         </div>
//       ) : (
//         <div className="absolute top-[50%] w-[10px] bg-blue-900 h-[70px] flex items-center">
//           {/* left-[300px] */}
//           <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             <SlArrowRight className="text-white" size={10} />
//           </button>
//         </div>
//       )}
//     </>
//   );
// }

// export default MenuComponent;

// Card
// import React from "react";
// import { RxAvatar } from "react-icons/rx";
// import { AiOutlineLike } from "react-icons/ai";
// import { FiEye } from "react-icons/fi";
// import { VscComment } from "react-icons/vsc";
// import { LuShare2 } from "react-icons/lu";
// import Datas from "../Data";

// function Cards() {
//   return (
//     <div className=" h-screen ">
//       <div className=" h-[150px] w-[90%] rounded-md shadow-lg shadow-gray-400 flex flex-col justify-around ">
//         <div className="flex justify-between">
//           <div className="flex items-center">
//             <RxAvatar size={40} className="mx-4" />
//             <h1 className=" text-[20px] font-bold">Sumon Pal</h1>
//             <h2 className="w-[70px] bg-[#393A85] text-white rounded-2xl px-2 ml-4 text-[12px]">
//               Sector 2
//             </h2>
//           </div>
//           <p className="text-[#393A85] text-[12px] pr-3">2min ago</p>
//         </div>
//         <div className="flex items-center ">
//           <p className="ml-[73px]">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe animi
//             ullam adipisci, quia quae quidem reprehenderit corporis doloribus
//             laudantium aliquam!
//           </p>
//         </div>
//         <div className="mt-4">
//           <ul className="flex items-center justify-between ml-[73px] mr-[73px] text-[13px]">
//             <li className="flex items-center">
//               <AiOutlineLike size={18} />
//               <p className="ml-1.5">2K</p>
//             </li>
//             <li className="flex items-center">
//               <FiEye size={18} />
//               <p className="ml-1.5">2K</p>
//             </li>
//             <li className="flex items-center">
//               <VscComment size={18} />
//               <p className="ml-1.5">2K Comments</p>
//             </li>
//             <li className="flex items-center">
//               <LuShare2 size={18} />
//               <p className="ml-1.5">Share</p>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className=" h-[150px] w-[90%] rounded-md shadow-lg shadow-gray-400 flex flex-col justify-around mt-4">
//         <div className="flex justify-between">
//           <div className="flex items-center">
//             <RxAvatar size={40} className="mx-4" />
//             <h1 className=" text-[20px] font-bold">Sumon Pal</h1>
//             <h2 className="w-[70px] bg-[#393A85] text-white rounded-2xl px-2 ml-4 text-[12px]">
//               Sector 2
//             </h2>
//           </div>
//           <p className="text-[#393A85] text-[12px] pr-3">2min ago</p>
//         </div>
//         <div className="flex items-center ">
//           <p className="ml-[73px]">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe animi
//             ullam adipisci, quia quae quidem reprehenderit corporis doloribus
//             laudantium aliquam!
//           </p>
//         </div>
//         <div className="mt-4">
//           <ul className="flex items-center justify-between ml-[73px] mr-[73px] text-[13px]">
//             <li className="flex items-center">
//               <AiOutlineLike size={18} />
//               <p className="ml-1.5">2K</p>
//             </li>
//             <li className="flex items-center">
//               <FiEye size={18} />
//               <p className="ml-1.5">2K</p>
//             </li>
//             <li className="flex items-center">
//               <VscComment size={18} />
//               <p className="ml-1.5">2K Comments</p>
//             </li>
//             <li className="flex items-center">
//               <LuShare2 size={18} />
//               <p className="ml-1.5">Share</p>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className=" h-[150px] w-[90%] rounded-md shadow-lg shadow-gray-400 flex flex-col justify-around mt-4">
//         <div className="flex justify-between">
//           <div className="flex items-center">
//             <RxAvatar size={40} className="mx-4" />
//             <h1 className=" text-[20px] font-bold">Sumon Pal</h1>
//             <h2 className="w-[70px] bg-[#393A85] text-white rounded-2xl px-2 ml-4 text-[12px]">
//               Sector 2
//             </h2>
//           </div>
//           <p className="text-[#393A85] text-[12px] pr-3">2min ago</p>
//         </div>
//         <div className="flex items-center ">
//           <p className="ml-[73px]">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe animi
//             ullam adipisci, quia quae quidem reprehenderit corporis doloribus
//             laudantium aliquam!
//           </p>
//         </div>
//         <div className="mt-4">
//           <ul className="flex items-center justify-between ml-[73px] mr-[73px] text-[13px]">
//             <li className="flex items-center">
//               <AiOutlineLike size={18} />
//               <p className="ml-1.5">2K</p>
//             </li>
//             <li className="flex items-center">
//               <FiEye size={18} />
//               <p className="ml-1.5">2K</p>
//             </li>
//             <li className="flex items-center">
//               <VscComment size={18} />
//               <p className="ml-1.5">2K Comments</p>
//             </li>
//             <li className="flex items-center">
//               <LuShare2 size={18} />
//               <p className="ml-1.5">Share</p>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className=" h-[150px] w-[90%] rounded-md shadow-lg shadow-gray-400 flex flex-col justify-around mt-4">
//         <div className="flex justify-between">
//           <div className="flex items-center">
//             <RxAvatar size={40} className="mx-4" />
//             <h1 className=" text-[20px] font-bold">Sumon Pal</h1>
//             <h2 className="w-[70px] bg-[#393A85] text-white rounded-2xl px-2 ml-4 text-[12px]">
//               Sector 2
//             </h2>
//           </div>
//           <p className="text-[#393A85] text-[12px] pr-3">2min ago</p>
//         </div>
//         <div className="flex items-center ">
//           <p className="ml-[73px]">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe animi
//             ullam adipisci, quia quae quidem reprehenderit corporis doloribus
//             laudantium aliquam!
//           </p>
//         </div>
//         <div className="mt-4">
//           <ul className="flex items-center justify-between ml-[73px] mr-[73px] text-[13px]">
//             <li className="flex items-center">
//               <AiOutlineLike size={18} />
//               <p className="ml-1.5">2K</p>
//             </li>
//             <li className="flex items-center">
//               <FiEye size={18} />
//               <p className="ml-1.5">2K</p>
//             </li>
//             <li className="flex items-center">
//               <VscComment size={18} />
//               <p className="ml-1.5">2K Comments</p>
//             </li>
//             <li className="flex items-center">
//               <LuShare2 size={18} />
//               <p className="ml-1.5">Share</p>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cards;
