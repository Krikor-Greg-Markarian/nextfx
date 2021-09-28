import React from "react";
import cn from "classnames";

function IntSelection(props) {
  return (
    <div>
      <div className={cn("")}>
        <div>
          <p
            className={cn(" text-sm text-blue-800 font-bold bg-gray-200 p-3 border-r-4 border-blue-300 ")}
          >
            01.{" "}
            <span className={cn(" text-sm pl-3 text-blue-800 font-bold ")}>
              WIFI INTERNET
            </span>{" "}
          </p>
          <div className={cn("")}></div>
          <p className={cn(" text-sm text-blue-800 font-bold bg-gray-200 p-3 border-r-4 border-blue-700")}>
            03.{" "}
            <span className={cn(" text-sm pl-3 text-blue-800 font-bold")}>
              TV BOX
            </span>{" "}
          </p>
          <div className={cn("")}></div>
          <p className={cn(" text-sm text-blue-800 font-bold bg-gray-200 p-3 border-r-4 border-gray-300")}>
            04.{" "}
            <span className={cn(" text-sm pl-3 text-blue-800 font-bold")}>
              SMART HOME
            </span>{" "}
          </p>
          <div className={cn("")}></div>
          <p className={cn(" text-sm text-blue-800 font-bold bg-gray-200 p-3 border-r-4 border-gray-300")}>
            05.{" "}
            <span className={cn(" text-sm pl-3 text-blue-800 font-bold")}>
              SATELLITE TV
            </span>{" "}
          </p>
          <div className={cn("")}></div>
          <p className={cn(" text-sm text-blue-800 font-bold bg-gray-200 p-3 border-r-4 border-gray-300")}>
            06.{" "}
            <span className={cn(" text-sm pl-3 text-blue-800 font-bold")}>
              BROADBAND
            </span>{" "}
          </p>
          <div className={cn("")}></div>
          <p className={cn(" text-sm text-blue-800 font-bold bg-gray-200 p-3 border-r-4 border-gray-300")}>
            07.{" "}
            <span className={cn(" text-sm pl-3 text-blue-800 font-bold")}>
              INTERNET
            </span>{" "}
          </p>
          <div className={cn("")}></div>
          <p className={cn(" text-sm text-blue-800 font-bold bg-gray-200 p-3 border-r-4 border-gray-300")}>
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
