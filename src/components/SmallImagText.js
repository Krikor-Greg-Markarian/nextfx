import React from "react";
import cn from "classnames";

const Info = (props) => {
  return (
    <div>
      <div className={cn("small rounded-full")}> </div>
      <p className={cn("text-blue-900 pt-3 font-bold")}>
        Network &amp; Connectivity{props.title}
      </p>
      <p className={cn("text-sm text-gray-500")}>{props.subtitle}</p>
      <a href="" className={cn("text-blue-900 font-bold no-underline text-sm")}>
        {props.subsubtitle}
      </a>
    </div>
  );
};

function SmallImagText() {
  return (
    <div>
      <Info
        subtitle=" Solutions to optimize performance and deliver the bandwith and
        reliability needed to support IT transformation."
        subsubtitle="Learn more"
      />
    </div>
  );
}

export default SmallImagText;
