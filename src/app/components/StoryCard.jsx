import React from "react";

const StoryCard = ({ story }) => {
  return (
    // <div className=" w-full flex flex-col pb-3 justify-center rounded-md shadow-lg shadow-gray-200 overflow-hidden">
    <div className="border border-gray-100 shadow-lg shadow-gray-400 h-72 mb-3 rounded-md">
      <img src={story.img} alt="/" className="h-1/2 w-full  object-cover" />
      <div className="p-2 h-1/2 overflow-scroll">
        <h1 className="font-bold">{story.title}</h1>
        <p title={story.desc} className="overflow-ellipsis">
          {story.desc}
        </p>
      </div>
    </div>
    // </div>
  );
};

export default StoryCard;
