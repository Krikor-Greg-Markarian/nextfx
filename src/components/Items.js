import React from "react";
import { FaCheck } from "react-icons/fa";

const Items = (props) => {
  return (
    <div className="flex ">
      <div className="flex-shrink pt-2">{props.icon ?? <FaCheck />}</div>
      <div className="flex-shrink text-sm text-gray-500 pl-3 pt-1">
        {props.text}
      </div>
    </div>
  );
};

export default Items;
