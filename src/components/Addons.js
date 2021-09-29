import React from "react";
import cn from "classnames";

function Addons(props) {
  return (
    <div>
      <div className={cn("border-b-2 pt-2 pb-2")}></div>
      <p className={cn("text-blue-900 font-bold text-sm pt-3")}>Add-ons:</p>
      <li className={cn("text-sm text-gray-500")}>
        Whole-Home Wifi for $9.99/month
      </li>
      <li className={cn("text-sm text-gray-500")}>
        Home Phones for$9.99/month
      </li>
      <li className={cn("text-sm text-gray-500")}>
        Services Protection plan for $5/month
      </li>
      <li className={cn("text-sm text-gray-500")}>Internet equipment</li>
      <div className={cn("border-b-2 pt-3")}></div>

      <div className={cn("pt-3 pb-1")}>
        <a href="" className={cn("text-blue-900 font-bold text-sm ")}>
          View deatils
        </a>
      </div>
    </div>
  );
}

export default Addons;
