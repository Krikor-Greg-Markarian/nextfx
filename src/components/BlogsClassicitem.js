import React from "react";
import cn from "classNames";

function Box(props) {
  return (
    <div>
      <div className={cn("instrument rounded w-full")}></div>
      <p className={cn("text-gray-500 text-sm pt-2 mb-0")}>
        {props.date}{" "}
        <span className={cn("text-pink-600 text-sm font-bold")}>
          {props.name}
        </span>
      </p>
      <p className={cn("text-lg text-blue-900 font-bold")}>{props.title}</p>
      <p className={cn("text-sm text-gray-500")}>{props.description}</p>
      <li className={cn(" text-sm list-none")}>
        <a href="#" className={cn("text-blue-900 no-underline font-bold")}>
          {props.tag}
        </a>
      </li>
    </div>
  );
}

export default Box;
