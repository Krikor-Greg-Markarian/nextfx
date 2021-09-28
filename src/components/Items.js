import React from "react";
import cn from "classnames";
import { FaCheck } from "react-icons/fa";

const Item = (props) => {
  return (
    <div>
      <div class="flex ">
        <div class="flex-shrink pt-2">
          <FaCheck />
        </div>
        <div class="flex-shrink text-sm text-gray-500 pl-3 pt-1">
          {props.text}
        </div>
      </div>
    </div>
  );
};

function Items(props) {
  return (
    <div>
      <Item text="Free Google Voice Remote and DVR included" />
      <Item text="60+ HD Channels" />
      <Item text="Local Channels" />
      <Item text="190 Channels" />
    </div>
  );
}

export default Items;
