// import React from "react";

// function Stories() {
//   return (
//     <div className="bg-lime-500 w-1/5">
//       {/* w-1/3 */}
//       <h1>
//         <span className="bg-gray-200 text-red-900"> Market Stories</span>
//       </h1>
//     </div>
//   );
// }

// export default Stories;

import { Story } from "../Data";
import StoryCard from "./StoryCard";

function Stories({ activeTab }) {
  return (
    <div
      className={` sm:flex flex-col h-full sm:w-1/4 w-full  gap-2 px-4 ${
        activeTab === "stories" ? "flex" : "hidden"
      }`}
    >
      <h1 className=" text-2xl hidden sm:block">
        <span className="text-red-700 bg-gray-200 ">Market Stories</span>
      </h1>
      {/* <div className=" overflow-scroll no-scrollbar"> */}
      <div className=" overflow-scroll no-scrollbar w-full flex-1 p-3">
        {/* Stories */}
        {Story.map((story) => {
          return <StoryCard key={story.id} story={story} />;
        })}
      </div>
    </div>
  );
}

export default Stories;
