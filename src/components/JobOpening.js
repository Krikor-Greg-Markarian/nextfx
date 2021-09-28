import React from "react";
import cn from "classnames";

const Item = (props) => {
  return (
    <div>
      <div className={cn("grid grid-cols-4")}>
        <div className={cn("col-span-1")}>
          <p className={cn("text-blue-800 font-bold text-sm pt-2 text-center")}>
            {props.title}
          </p>
        </div>
        <div className={cn("col-span-1 pt-2")}>
          <p className={cn("text-gray-500 text-sm text-center")}>
            {props.city}
          </p>
        </div>
        <div className={cn("col-span-1 pt-2")}>
          <p className={cn("text-gray-500 text-sm text-center")}>
            {props.time}
          </p>
        </div>

        <div className={cn("flex justify-center items-center")}>
          <button className={cn("text-sm p-2 bg-blue-400 w-8/12 rounded")}>
            {props.button}
          </button>
        </div>
      </div>
    </div>
  );
};

function JobOpening(props) {
  return (
    <div className={cn("w-7/12 container mx-auto  p-2", props.classname)}>
      <Item
        title="Network Engineer"
        city="New York"
        time="Full time"
        button="Apply now"
      />
    </div>
  );
}

export default JobOpening;
