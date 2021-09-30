import React from "react";
import cn from "classnames";
import Item from "./Item";
import Button from "./Button";
import { prop } from "dom7";

function RightPlanitem(props) {
  const styleClasses = {
    planBackgroundColor: props.planBackgroundColor ?? "bg-white",
    smallTextColor: "text-gray-500",
    titleColor: "text-blue-900",
    priceColor: "text-blue-800",
    buttonBackgroundColor: "bg-gray-200",
    buttonTextColor: "text-blue-600",
  };

  return (
    <div className={cn("rounded shadow-md", styleClasses.planBackgroundColor)}>
      <div className={cn("p-3")}>
        <p className={cn("text-sm font-bold", styleClasses.smallTextColor)}>
          {props.smalltitle}
        </p>
        <p className={cn("font-bold text-lg mb-0", styleClasses.titleColor)}>
          {props.title}
        </p>
        <p className={cn("font-bold text-lg", styleClasses.price)}>
          {props.price}{" "}
          <sub className={cn("text-sm ", styleClasses.smallTextColor)}>
            {props.month}
          </sub>{" "}
        </p>

        {props.item.map((item, idx) => (
          <Item text={item.text} />
        ))}
        <div className={cn("pt-3 flex justify-center items-center")}>
          <Button
            className={cn(
              "text-center p-2 rounded w-9/12",
              styleClasses.buttonBackgroundColor,
              styleClasses.buttonTextColor
            )}
            text={props.text}
          />
        </div>
      </div>
    </div>
  );
}

export default RightPlanitem;
