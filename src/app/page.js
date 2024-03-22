"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Stories from "./components/Stories";
// import Hamberger from "./components/Hamberger";
import MenuComponent from "./components/MenuComponent";
import Discussion from "./components/Discussion";
import DiscussionMobile from "@/Mobile/DiscussionMobile";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("discussion");

  return (
    <div className="flex max-h-screen overflow-hidden  h-screen">
      <MenuComponent activeTab={activeTab} />
      <div className="flex flex-col w-full">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex flex-1 h-full shrink-0  pl-[10px]">
          <Discussion activeTab={activeTab} setActiveTab={setActiveTab} />
          <Stories activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>
    </div>
  );
}
// export default function Home() {
//   return (
//     <div className="flex max-h-screen overflow-hidden h-screen ">
//       <MenuComponent />
//       <div className="flex flex-col">
//         <Navbar />
//         <DiscussionMobile />
//       </div>
//       {/* <div className="flex flex-1 h-full shrink-0"></div> */}
//     </div>
//   );
// }
