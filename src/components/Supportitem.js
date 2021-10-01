import React from "react";
import cn from "classnames";
import Button from "./Button";

function Supportitem(props) {
  return (
    <div>
      {props.children}
      <div className={cn("blueback")}>
        <div className={cn("container mx-auto")}>
          <div className={cn("grid grid-cols-2")}>
            <div className={cn("col-span-1 transform translate-y-16")}>
              <p className={cn("text-white text-2xl")}>{props.title}</p>
              <p className={cn("text-white text-xs")}>{props.description}</p>
            </div>
            <div className={cn("col-span-1 transform translate-y-20")}>
              <div className={cn("flex justify-center items-center")}>
                <Button
                  className={cn(
                    "bg-blue-300 text-xs text-black w-3/12 rounded text-center p-2"
                  )}
                  text="our support center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Supportitem;
