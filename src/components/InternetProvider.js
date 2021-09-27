import React from "react";
import cn from "classnames";

function InternetProvider() {
  return (
    <div>
      <div className={cn("camera")}>
        <div className={cn("container mx-auto pt-4")}>
          <div className={cn("grid grid-cols-2")}>
            <div className={cn("col-span-1")}>
              <p className={cn("text-white font-bold text-2xl pb-2")}>
                Your Local High Speed internet Provider
              </p>
              <button className={cn("bg-blue-700 p-2 rounded text-sm")}>
                Check Availability
              </button>

              <button className={cn("text-white text-sm pl-4 font-bold")}>
                Switch is easy
              </button>
              <div className={cn("pt-6")}></div>
              <div className={cn("border-1")}></div>
              <p className={cn("pt-4 text-sm text-white")}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis tempore porro in libero voluptatem iste officia id
                nulla laboriosam molestias. A corporis totam ex cumque rerum
                deserunt, accusantium repudiandae unde.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InternetProvider;
