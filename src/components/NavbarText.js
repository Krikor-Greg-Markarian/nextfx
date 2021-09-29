import React from "react";
import cn from "classnames";
import Button from "./Button";

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
          <Button
            className={cn("bg-blue-700 p-2 text-white inline")}
            text="Check Availability"
          />
          <div className={cn("inline pl-2")}></div>

          <Button
            className={cn("bg-blue-400 p-2 text-white inline")}
            text=" Learn more"
          />
        </div>
      </div>
    </div>
  );
}

export default NavbarText;
