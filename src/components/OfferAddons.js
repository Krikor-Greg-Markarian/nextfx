import React from "react";
import CardShadow from "./CardShadow";
import cn from "classnames";
import Button from "./Button";
import Addons from "./Addons";
import Offerinc from "./OfferInc";

function OfferAddons(props) {
  return (
    <div>
      <CardShadow>
        <div className={cn("flex justify-center items-center")}>
          <div className={cn("small rounded-lg")}></div>
        </div>
        <p className={cn("text-sm text-center mb-0 pt-2")}>STANDARD</p>
        <div className={cn("text-center pb-4")}>
          <p className={cn("font-bold inline text-2xl text-blue-900")}>
            $49 <sup className={cn("text-sm")}>99</sup>
          </p>
          <sub className={cn("text-gray-500 text-sm inline")}>/mo</sub>
        </div>
        <div className={cn("pb-2")}>
          <Button
            className={cn("text-white bg-blue-700 rounded text-center p-2")}
            text="Check Availability"
          />
        </div>
        <Offerinc />
        <Addons />
      </CardShadow>
    </div>
  );
}

export default OfferAddons;
