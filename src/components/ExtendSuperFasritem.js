import React from "react";
import cn from "classnames";
import Button from "./Button";

function ExtendSuperFasritem(props) {
  return (
    <div>
      <div className={cn("pt-16 pb-16")}>
        <div className={cn("stars")}>
          <div className={cn("container mx-auto ")}>
            <div className={"grid grid-cols-2"}>
              <div className={cn("col-span-1 w-12/12 pl-16 py-8")}>
                <p className={cn("font-bold text-blue-900 text-2xl")}>
                  {props.title}
                </p>
                <p className={cn("text-gray-500 text-sm")}>
                  {props.description}
                </p>
                <p className={cn("text-2xl text-blue-900 font-bold inline")}>
                  {props.price}
                </p>
                <sub className={cn("text-gray-500 text-sm")}>{props.mo}</sub>
                <li className={cn("text-sm text-gray-500 pt-3")}>
                  {props.tag}
                </li>
                <li className={cn("text-sm text-gray-500 pt-2")}>
                  {props.taga}
                </li>
                <li className={cn("text-sm text-gray-500 pt-2")}>
                  {props.tagb}
                </li>
                <div className={cn("pt-4")}>
                  <Button
                    className={cn(
                      "text-center rounded bg-blue-800 text-white text-sm p-2 w-5/12 "
                    )}
                    text="customize order"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExtendSuperFasritem;
