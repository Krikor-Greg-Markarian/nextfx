import React from "react";
import cn from "classnames";

function AddressBar() {
  return (
    <div className={cn("pt-16")}>
      <div className={cn("firebar")}>
        <div className={cn("container mx-auto")}>
          <div className={cn("pt-4")}>
            <p className={cn("text-white")}>
              Enter your address to find deals in your area:
            </p>
            <div className="flex">
              <div className="flex-grow pl-2">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Street address"
                  className={cn("p-2")}
                />
              </div>
              <div className="flex-shrink pl-1">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Apt/Unite"
                  className={cn("p-2")}
                />
              </div>
              <div className="flex-shrink pl-1">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter zipcoide"
                  className={cn("p-2")}
                />
              </div>
              <div className="flex-grow pl-1">
                <div className = {cn("flex justify-center ritems-center")}>
                <button className = {cn("bg-blue-600 text-sm px-18")}>Check Availability</button>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddressBar;
