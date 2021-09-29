import React from "react";
import cn from "classnames";

function SolutionItam(props) {
  return (
    <div>
      <div className={cn("small rounded-full")}> </div>
      <p className={cn("text-blue-900 pt-3 font-bold")}>{props.title}</p>
      <p className={cn("text-sm text-gray-500")}>{props.description}</p>
      <a href="" className={cn("text-blue-900 font-bold no-underline text-sm")}>
        {props.tag}
      </a>
    </div>
  );
}

export default SolutionItam;
