import React from "react";
import cn from "classnames";

function ClientReview(props) {
  return (
    <div className={cn("py-28")}>
      <p className={cn("text-sm text-blue-700 mb-0")}>{props.smalltitle}</p>
      <p className={cn("font-bold text-2xl text-blue-900")}>{props.title}</p>
      <p className={cn("text-sm text-gray-500 pt-2 pb-2")}>
        {props.description}
      </p>
      <div class="flex">
        <div class="flex-shrink">
          <div className={cn("small rounded-full")}></div>
        </div>
        <div class="flex-shrink pl-2">
          <p className={cn("font-bold text-sm mb-0")}>{props.name}</p>
          <p className={cn("text-gray-500 text-sm inline")}>
            {props.location} <span className={cn("pl-5")}>*****</span>{" "}
          </p>
        </div>
      </div>
      <div className={cn("border-b-2 pt-4 border-gray-400")}></div>
      <p className={cn("inline")}>Global News</p>{" "}
      <span className={cn("inline ml-2")}>News Tv</span>{" "}
      <span className={cn("inline ml-2")}>News</span>
      <span className={cn("inline ml-2")}>One</span>
    </div>
  );
}

export default ClientReview;
