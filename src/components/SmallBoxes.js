import React from "react";
import cn from "classNames";

function SmallBoxes() {
  return (
    <div className={cn("")}>
      <div className={cn("pt-1 pl-10")}>
        <div class="flex bg-gray-200 p-2 border-r-4 border-gray-500 ">
          <div class="flex-shrink ">
            <div className={cn("small rounded-full")}></div>
          </div>
          <div class="flex-shrink ">
            <p className={cn("font-bold")}>370+</p>
            <p className={cn("text-gray-500 text-sm")}>Available Channels</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmallBoxes;
