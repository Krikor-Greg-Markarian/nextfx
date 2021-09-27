import React from "react";
import cn from "classnames";

function FiberConnection() {
  return (
    <div>
      <div className={cn("fire relative")}>
        <div className={cn("container mx-auto")}>
          <div className="grid grid-cols-2">
            <div className="col-span-1">
              <div className={cn("pt-12")}>
                <p className={cn("text-blue-800 font-bold")}>
                  FREE{" "}
                  <span className={cn("text-white font-bold")}>
                    {" "}
                    Fiber connection
                  </span>
                </p>
                <p className={cn("text-sm text-white")}>
                  Totally Unlimited Fiber With Absolutely Free Setup
                </p>
              </div>
            </div>
            <div className="col-span-1">
              <div className={cn("flex justify-center pt-3")}>
                <div className={cn("technologyoffer relative rounded")}>
                  <div className={cn("flex justify-center items-center")}>
                    <div className={cn("free absolute -left-7 top-8")}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={cn("flex justify-center items-center ")}>
            <div className="bg-blue-400 text-black absolute -bottom-10 p-4 w-9/12 rounded">
              <p className={cn("font-bold inline")}>
                Hurry up!This offer ends in
              </p>

              <div className={cn("float-right font-bold")}>
                <span>
                  123 <sup className={cn("pr-4")}>days</sup>
                </span>
                <span>
                  15 <sup className={cn("pr-4")}>Hours</sup>
                </span>
                <span>
                  54 <sup className={cn("pr-4")}>Min</sup>
                </span>
                <span>
                  28 <sup>Secs</sup>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FiberConnection;
