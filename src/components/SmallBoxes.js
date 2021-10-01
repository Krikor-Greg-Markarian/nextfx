import React from "react";
import cn from "classnames";

function SmallBoxes(props) {
  return (
    <div className={cn("pt-1 pl-10")}>
      <div className="flex bg-gray-200 p-2 border-r-4 border-gray-500">
        <div className="flex-shrink">
          <img
            className={cn("rounded-full w-12 h-12")}
            src={props.imageUrl}
            alt=""
          />
        </div>
        <div className="flex-shrink pl-3">
          <p className={cn("font-bold mb-0 text-2xl")}>{props.channel}</p>
          <p className={cn("text-gray-500 text-xs")}>{props.available}</p>
        </div>
      </div>
    </div>
  );
}

export default SmallBoxes;
