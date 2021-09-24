import React from "react";
import cn from "classnames";

function SmallBoxes() {
  return (
    <div className={cn("w-3/12 ")}>
      <div className={cn("bg-gray-200 border-r-2 border-gray-800 p-3")}>
        <div classname="flex ">
          <div classname="flex-shrink flex justify-center items-center">
            <div className={cn("small rounded-full")}></div>
          </div>
          <div classname="flex-shrink ">
            <p className={cn("font-bold text-lg pl-2")}>370+</p>
            <p className={cn("pl-2")}>Available Channels</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmallBoxes;
