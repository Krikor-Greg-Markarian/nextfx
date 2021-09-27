import React from "react";
import cn from "classnames";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage = 60;

function Router() {
  return (
    <div>
      <div className={cn("")}>
        <div style={{ width: 100, height: 100 }}>
          <CircularProgressbar value={60} text={`${percentage}%`} />
        </div>

        <p className={cn("font-bold text-sm pt-3")}>Whole Home WIFI</p>
        <p className={cn("font-bold text-sm text-gray-500 pt-1")}>
          Delivering fast, reliable WIFI throughout your home.
        </p>
      </div>
    </div>
  );
}

export default Router;
