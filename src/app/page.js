"use client";
import Navbar from "./components/Navbar";
import Stories from "./components/Stories";
import MenuComponent from "./components/MenuComponent";
import Discussion from "./components/Discussion";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("discussion");

  return (
    <div className="flex max-h-screen overflow-hidden  h-screen">
      <MenuComponent activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex flex-col w-full">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex flex-1 h-full shrink-0  pl-[10px]">
          <Discussion activeTab={activeTab} />
          <Stories activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
}
