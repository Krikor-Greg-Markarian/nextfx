import React from "react";
import cn from "classnames";

function IntSelection(props) {
  return (
    <div>
      <p className={cn("bg-gray-100 p-3 text-xs text-blue-900 font-bold mb-1")}>
        {props.number}
        <span className={cn(" pl-2 text-xs text-blue-900 ")}>
          {props.descrition}
        </span>
      </p>
    </div>
  );
}

export default IntSelection;
