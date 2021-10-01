import React from "react";
import { FaCheck } from "react-icons/fa";

const Item = (props) => {
  return (
    <div className="flex ">
      <div className="flex-shrink pt-2 text-blue-300">
        {props.icon ?? <FaCheck />}{props.children}
      </div>
      <div className="flex-shrink text-sm text-gray-400 pl-3 pt-2">
        {props.text}
      </div>
    </div>
  );
};

export default Item;
