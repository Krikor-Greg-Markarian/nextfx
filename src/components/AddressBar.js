import React from "react";
import cn from "classnames";

function AddressBar() {
  return (
    <div className={cn("pt-16")}>
      <div className={cn("firebar")}>
        <div className={cn("container mx-auto")}>
          <div className={cn("pt-4")}>
            <p className={cn("text-white text-center")}>
              Enter your address to find deals in your area:
            </p>

            <div className="flex justify-center items-center">
              <div className={cn("grid grid-cols-4 gap-2 w-9/12")}>
                <div className={cn("col-span-1")}>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Street address"
                    className={cn("p-1 w-full")}
                  />
                </div>
                <div className={cn("col-span-1")}>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Apt/unit"
                    className={cn("p-1 w-full")}
                  />
                </div>
                <div className={cn("col-span-1")}>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter zipcode"
                    className={cn("p-1 w-full")}
                  />
                </div>
                <div className={cn("col-span-1")}>
                  <button className={cn("bg-blue-700 text-sm p-2")}>
                    Check Availibility
                  </button>
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
