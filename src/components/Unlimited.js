import React from "react";
import cn from "classnames";

function Unlimited() {
  return (
    <div>
      <div className={cn("bg-white p-2 w-2/12 border-8")}>
        <p className={cn("font-bold")}>Wifi internet</p>
        <p className={cn("text-sm text-gray-500")}>
          High-speed internet access that is always on &amp; fast.
        </p>
      </div>
    </div>
  );
}

export default Unlimited;
