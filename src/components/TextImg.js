import React from "react";
import cn from "classnames";

function TextImg(props) {
  return (
    <div>
      <div>
        <p className={cn("text-sm text-gray-400")}>{props.title}</p>
        <div className={cn("new w-full")}></div>
      </div>
    </div>
  );
}

export default TextImg;
