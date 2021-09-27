import React from "react";
import cn from "classnames";

function SmallImagText() {
  return (
    <div>
      <div className={cn("small rounded-full")}> </div>
        <p className={cn("text-blue-900 pt-3 font-bold")}>Network &amp; Connectivity</p>
        <p className={cn("text-sm text-gray-500")}>
          Solutions to optimize performance and deliver the bandwith and
          reliability needed to support IT transformation.
        </p>
        <a href="" className={cn("text-blue-900 font-bold no-underline text-sm")}>
          Learn more
        </a>
     
    </div>
  );
}

export default SmallImagText;
