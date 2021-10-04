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
    <CardShadow className={cn("relative")}>
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
        <sub className={cn("inline")}>{props.mo}</sub>
      </div>
      {props.text.map((item, idx) => (
        <Item text={item.text} key={idx} />
      ))}
      <div className={cn("flex justify-center items-center pt-3 pb-3")}>
        <Button
          className={cn(
            " pt-2 bg-blue-800 text-center text-white p-2 text-sm rounded w-8/12"
          )}
          text={props.buttonText ?? "get started"}
        />
      </div>
      <p className={cn("text-sm text-blue-800 text-center underline")}>
        {props.info}
      </p>

      {props.isMostPopular ? (
        <div className={cn("flex justify-center items-center")}>
          <div
            className={cn(
              " px-2 bg-pink-600 text-center text-white rounded text-sm absolute -top-3 "
            )}
          >
            MOST POPULAR
          </div>
        </div>
      ) : (
        ""
      )}
    </CardShadow>
  );
}

export default BestValueitem;
