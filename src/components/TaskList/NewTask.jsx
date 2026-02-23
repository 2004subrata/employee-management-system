import React from "react";

const NewTask = () => {
  return (
    <div className="shrink-0 h-full w-75 p-5 bg-green-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-3 py-1 text-sm rounded">High</h3>
        <h4 className="text-sm">20 feb 2024</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">Make a Youtube video</h2>
      <p className="text-sm mt-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa facere
        voluptate quis voluptas eligendi natus.
      </p>
      <div className="mt-4">
        <button>Accept Task</button>
      </div>
    </div>
  );
};

export default NewTask;
