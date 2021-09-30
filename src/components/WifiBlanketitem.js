import React from "react";
import cn from "classnames";
import IntSelection from "./IntSelection";

function WifiBlanketitem(props) {
  return (
    <div>
      {props.select.map((item, idx) => (
        <IntSelection number={item.number} descrition={item.descrition} />
      ))}
    </div>
  );
}

export default WifiBlanketitem;
