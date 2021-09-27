import React from "react";
import cn from "classnames";

function IntSelection(props) {
  return (
    <div>
      <div className={cn("")}>
        <div>
          <p
            className={cn(" text-sm text-blue-800 font-bold bg-gray-200 p-3 ")}
          >
            01.{" "}
            <span className={cn(" text-sm pl-3 text-blue-800 font-bold")}>
              WIFI INTERNET
            </span>{" "}
          </p>
          <div className={cn("pt-1")}></div>
          <p className={cn(" text-sm text-blue-800 font-bold bg-gray-200 p-3")}>
            03.{" "}
            <span className={cn(" text-sm pl-3 text-blue-800 font-bold")}>
              TV BOX
            </span>{" "}
          </p>
          <div className={cn("pt-1")}></div>
          <p className={cn(" text-sm text-blue-800 font-bold bg-gray-200 p-3")}>
            04.{" "}
            <span className={cn(" text-sm pl-3 text-blue-800 font-bold")}>
              SMART HOME
            </span>{" "}
          </p>
          <div className={cn("pt-1")}></div>
          <p className={cn(" text-sm text-blue-800 font-bold bg-gray-200 p-3")}>
            05.{" "}
            <span className={cn(" text-sm pl-3 text-blue-800 font-bold")}>
              SATELLITE TV
            </span>{" "}
          </p>
          <div className={cn("pt-1")}></div>
          <p className={cn(" text-sm text-blue-800 font-bold bg-gray-200 p-3")}>
            06.{" "}
            <span className={cn(" text-sm pl-3 text-blue-800 font-bold")}>
              BROADBAND
            </span>{" "}
          </p>
          <div className={cn("pt-1")}></div>
          <p className={cn(" text-sm text-blue-800 font-bold bg-gray-200 p-3")}>
            07.{" "}
            <span className={cn(" text-sm pl-3 text-blue-800 font-bold")}>
              INTERNET
            </span>{" "}
          </p>
          <div className={cn("pt-1")}></div>
          <p className={cn(" text-sm text-blue-800 font-bold bg-gray-200 p-3")}>
            08.{" "}
            <span className={cn(" text-sm pl-3 text-blue-800 font-bold")}>
              BUSINESS
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default IntSelection;
