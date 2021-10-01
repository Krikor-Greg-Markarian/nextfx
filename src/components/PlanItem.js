import React from "react";
import Card from "./Card";
import Button from "./Button";
import Item from "./Item";
import cn from "classnames";

const PlanItem = (props) => {
  return (
    <Card className={cn("relative")}>
      <div className={cn("flex justify-center items-center")}>
        <div className={cn("small rounded-lg")}></div>
      </div>
      <p className={cn("text-center pt-2")}>{props.title}</p>
      <div className={cn("flex justify-center items-center")}>
        <p className={cn("text-center text-2xl text-blue-900 font-bold ")}>
          {props.price}
        </p>
        <sup className={cn("font-bold text-blue-900 pl-2")}>{props.sup}</sup>
        <sub className={cn("text-center text-gray-500")}>{props.mo}</sub>
      </div>
      <Button
        className={cn("bg-blue-700 p-2 rounded text-white text-center")}
        text={"Check Availability"}
      />
      <p className={cn("text-sm font-bold text-blue-900 pt-3")}>
        Offer includes:
      </p>
      {props.includes.map((item, idx) => (
        <Item text={item.text} key={idx} />
      ))}
      <hr />
      <p className={cn("text-sm font-bold text-blue-900")}>Add-ons:</p>
      {props.addons.map((item, idx) => (
        <Item text={item.text} key={idx} />
      ))}
      <hr />
      <p className={cn("text-sm text-blue-900 font-bold underline")}>
        View Details
      </p>

      {props.isBestValue ? (
        <div className={cn("flex justify-center items-center")}>
          <div
            className={cn(
              "text-sm bg-pink-600 text-white text-center rounded w-5/12 absolute -top-3"
            )}
          >
            BEST VALUE
          </div>
        </div>
      ) : (
        ""
      )}
    </Card>
  );
};

export default PlanItem;
