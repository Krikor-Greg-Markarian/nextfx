import React from "react";
import cn from "classnames";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage = 60;

function Router(props) {
  return (
    <div>
      <div style={{ width: 100, height: 100 }}>
        <CircularProgressbar value={60} text={`${percentage}%`} />
      </div>

      <p className={cn("font-bold text-sm pt-3")}>{props.title}</p>
      <p className={cn("font-bold text-sm text-gray-500 pt-1")}>
        {props.description}
      </p>
    </div>
  );
}

export default Router;
