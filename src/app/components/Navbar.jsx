import React from "react";

function Navbar({ activeTab, setActiveTab }) {
  return (
    <>
      <div className=" w-full bg-[#393A85] text-white sm:hidden">
        <button
          type="button"
          onClick={() => setActiveTab("discussion")}
          className={`w-1/2 p-2 ${
            activeTab === "discussion"
              ? " border-b-red-600 border-0 border-b-4 bg-[#14142f]"
              : "border-b-transparent  border-0 border-b-4"
          }`}
        >
          Discussion Fourm
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("stories")}
          className={`w-1/2 p-2 ${
            activeTab === "stories"
              ? " border-b-red-600  border-0 border-b-4 bg-[#14142f]"
              : "border-b-transparent  border-0 border-b-4"
          }`}
        >
          Market Stories
        </button>
      </div>
    </>
  );
}

export default Navbar;
