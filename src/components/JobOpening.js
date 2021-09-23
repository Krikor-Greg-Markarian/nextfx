import React from "react";
import cn from "classnames";

function JobOpening(props) {
  return (
    <div className={cn("w-7/12 container mx-auto  p-2", props.classname)}>
      <div className={cn("grid grid-cols-4")}>
        <div className={cn("col-span-1")}>
          <p className={cn("text-blue-800 font-bold text-sm pt-2")}>
            Network Engineer
          </p>
        </div>
        <div className={cn("col-span-1 pt-2")}>
          <p className={cn("text-gray-500 text-sm")}>New York</p>
        </div>
        <div className={cn("col-span-1 pt-2")}>
          <p className={cn("text-gray-500 text-sm")}>Full time</p>
        </div>

        <button className={cn("text-sm p-2 bg-blue-400")}>Apply Now</button>
      </div>
    </div>
  );
}

export default JobOpening;
