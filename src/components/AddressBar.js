import React from "react";
import cn from "classnames";

function AddressBar() {
  return (
    <div className={cn("pt-40")}>
      <div className={cn("fire")}>
        <div className={cn("container mx-auto")}>
        
          <p className={cn("text-white")}>
            Enter your address to find deals in your area:
          </p>
          <div class="flex">
            <div class="flex-grow pl-2">
              <input
                type="text"
                name=""
                id=""
                placeholder="Street address"
                className={cn("p-2")}
              />
            </div>
            <div class="flex-shrink pl-1">
              <input
                type="text"
                name=""
                id=""
                placeholder="Apt/Unite"
                className={cn("p-2")}
              />
            </div>
            <div class="flex-shrink pl-1">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter zipcoide"
                className={cn("p-2")}
              />
            </div>
            <div class="flex-grow">
              <button className={cn("bg-blue-200 text-sm ")}>
                Check availability
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    
  );
}

export default AddressBar;
