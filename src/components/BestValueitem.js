import { prop } from "dom7";
import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import CardShadow from "./CardShadow";
import Item from "./Item";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import Button from "./Button";
import cn from "classnames";

const percentage = 66;

function BestValueitem(props) {
  return (
    <CardShadow>
      <div className={cn("flex justify-center pb-2")}>
        <div style={{ width: 50, height: 50 }}>
          <CircularProgressbar value={66} text={`${percentage}%`} />
        </div>
      </div>
      <p className={cn("font-bold text-center mb-0")}>{props.title}</p>
      <div className={cn("flex justify-center items-center")}>
        <p className={cn("font-bold text-2xl text-blue-800 inline")}>
          {props.price}
        </p>
        <sub className={cn("inline")}>/mo</sub>
      </div>
      {props.text.map((item, idx) => (
        <Item text={item.text} />
      ))}
      <div className={cn("flex justify-center items-center pt-3 pb-3")}>
        <Button
          className={cn(
            " pt-2 bg-blue-800 text-center text-white p-2 text-sm rounded w-8/12"
          )}
          text="Get started"
        />
      </div>
      <p className={cn("text-sm text-blue-800 text-center underline")}>
        or call1(900) 232 123
      </p>
    </CardShadow>
  );
}

export default BestValueitem;