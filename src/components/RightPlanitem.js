import React from "react";
import cn from "classnames";
import { FaCheck } from "react-icons/fa";
import Item from "./Item";
import Button from "./Button";

function RightPlanitem(props) {
  return (
    <div className={cn("bg-blue-100 rounded")}>
      <div className={cn("p-3")}>
        <p className={cn("text-sm font-bold")}>{props.smalltitle}</p>
        <p className={cn("font-bold text-lg mb-0 text-blue-900")}>
          {props.title}
        </p>
        <p className={cn("font-bold text-blue-800 text-lg")}>
          {props.price}{" "}
          <sub className={cn("text-sm text-gray-500")}>{props.month}</sub>{" "}
        </p>

        {props.item.map((item, idx) => (
          <Item text={item.text} />
        ))}
        <div className={cn("pt-3 flex justify-center items-center")}>
          <Button
            className={cn(
              "bg-blue-800 text-white text-center p-2 rounded w-9/12"
            )}
            text="Order now"
          />
        </div>
      </div>
    </div>
  );
}

export default RightPlanitem;
