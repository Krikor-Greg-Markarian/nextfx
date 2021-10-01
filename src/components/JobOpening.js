import React from "react";
import cn from "classnames";

function JobOpening(props) {
  const styleClass = {
    backgroundcolor: props.backgroundcolor ?? "bg-white",
  };

  return (
    <div className={cn("grid grid-cols-4", styleClass.backgroundcolor)}>
      <div className={cn("col-span-1 ")}>
        <p className={cn("text-blue-800 font-bold text-xs pt-2 text-center")}>
          {props.title}
        </p>
      </div>
      <div className={cn("col-span-1 pt-2")}>
        <p className={cn("text-gray-500 text-xs text-center")}>{props.city}</p>
      </div>
      <div className={cn("col-span-1 pt-2")}>
        <p className={cn("text-gray-500 text-xs text-center")}>{props.time}</p>
      </div>

      <div className={cn("flex justify-center items-center")}>
        <button className={cn("text-xs p-2 bg-blue-400 w-8/12 rounded")}>
          {props.button}
        </button>
      </div>
    </div>
  );
}

export default JobOpening;
