import React from "react";
import cn from "classnames";

function NavbarText() {
  return (
    <div>
      <div className={cn("w-8/12 text-center transform translate-x-28")}>
        <p className={cn("text-4xl font-bold")}>
          Switch to internet service you will love
        </p>
        <p className={cn("text-white pt-2 pb-2")}>
          This is the place to learn about NetFx internet-the high speed,secure,
          and reliable internet connection that lets you do what you love online
        </p>
        <div className={cn("pt-2")}>
          <button className={cn("bg-blue-700 p-2 text-white inline ")}>
            Check availability
          </button>
          <div className={cn("inline pl-2")}></div>
          <button className={cn("text-black bg-blue-300 inline p-2 px-7 ")}>
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavbarText;
