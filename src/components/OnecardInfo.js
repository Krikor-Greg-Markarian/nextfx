import React from "react";
import cn from "classnames";
import Items from "./Items";
import Button from "./Button";
import Card from "./Card";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage = 66;

function OnecardInfo(props) {
  return (
    <div>
      <Card>
        <div className={cn("flex justify-center pb-2")}>
          <div style={{ width: 50, height: 50 }}>
            <CircularProgressbar value={66} text={`${percentage}%`} />
          </div>
        </div>
        <p className={cn("text-sm font-bold text-center mb-0")}>STANDARD</p>
        <div className={cn("text-center pb-2")}>
          <p className={cn("font-bold inline text-2xl text-blue-800")}>
            $49.99
          </p>

          <sub className={cn("text-gray-500 text-sm inline")}>/mo</sub>
        </div>
        <Items />
        <div className={cn("flex justify-center items-center pt-2 pb-2")}>
          <Button
            className={cn(
              "bg-blue-700 p-2 text-sm text-white w-8/12 rounded text-center"
            )}
            text="Get started"
          />
        </div>
        <p className={cn("underline text-sm text-center text-blue-800 pt-2")}>
          or call1(900) 232 123
        </p>
      </Card>
    </div>
  );
}

export default OnecardInfo;
