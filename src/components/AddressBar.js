import React from "react";
import cn from "classnames";
import Button from "./Button";

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
                    className={cn("p-1 w-full rounded")}
                  />
                </div>

                <div className={cn("col-span-1")}>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Apt/unit"
                    className={cn("p-1 w-full rounded")}
                  />
                </div>
                <div className={cn("col-span-1")}>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter zipcode"
                    className={cn("p-1 w-full rounded")}
                  />
                </div>
                <div className={cn("col-span-1")}>
                  <Button
                    className={cn("bg-blue-300 text-sm p-2 rounded")}
                    text="Check Availability"
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

export default AddressBar;
