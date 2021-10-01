import React from "react";
import cn from "classnames";
import CardShadowRec from "./CardShadowRec";

function Experienceitem(props) {
  return (
    <CardShadowRec className = {cn("sm:mt-1 md:mt-1")}>
      <div className={cn("small rounded-full")}></div>
      <p className={cn("font-bold mb-0 pt-3")}>{props.title}</p>
      <p className={cn("text-gray-500 text-sm pt-2")}>{props.description}</p>
    </CardShadowRec>
  );
}

export default Experienceitem;
