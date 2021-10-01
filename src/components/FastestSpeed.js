import React from "react";
import cn from "classnames";

function FastestSpeed(props) {
  return (
    <div>
      <div>
        <p className={cn("text-sm text-blue-700  pt-12 mb-0")}>
          {props.smalltitle}
        </p>
        <p className={cn("font-bold  text-2xl text-blue-900")}>
          {props.description}
        </p>
        <div className={cn("earth  w-full")}></div>
        <div className="flex justify-center items-center"></div>
      </div>
    </div>
  );
}

export default FastestSpeed;
