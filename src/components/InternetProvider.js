import React from "react";
import cn from "classnames";
import Button from "../components/Button";

function InternetProvider(props) {
  return (
    <div>
      <div className={cn("camera")}>
        <div className={cn("container mx-auto pt-4")}>
          <div className={cn("grid grid-cols-2")}>
            <div className={cn("col-span-1")}>
              <p className={cn("text-white font-bold text-2xl pb-2")}>
                {props.title}
              </p>
              <button className={cn("")}></button>

              <Button
                className={cn(
                  "bg-blue-700 p-2 rounded text-sm w-5/12 text-center text-white inline"
                )}
                text=" Check Availability"
              />

              <Button
                className={cn("text-white text-sm pl-4 font-bold inline ")}
                text="Switch is easy"
              />

              <div className={cn("pt-6")}></div>
              <div className={cn("border-1")}></div>
              <p className={cn("pt-4 text-sm text-white")}>
                {props.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      {props.children}
    </div>
  );
}

export default InternetProvider;
