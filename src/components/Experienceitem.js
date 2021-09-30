import React from "react";
import cn from "classnames";
import CardShadowRec from "./CardShadowRec";

function Experienceitem(props) {

const styleClasses = {
  backgroundcolor:props.backgroundcolor ?? "bg-white",
  titlecolor:props.titlecolor ?? "text-black",
  description:props.description ?? "text-black",
}


  return (
    <CardShadowRec>
      <div className={cn("small rounded-full")}></div>
      <p className={cn("font-bold mb-0 pt-3", styleClasses.titlecolor)}>{props.title}</p>
      <p className={cn("text-gray-500 text-sm pt-2", styleClasses.description)}>{props.description}</p>
    </CardShadowRec>
  );
}

export default Experienceitem;
