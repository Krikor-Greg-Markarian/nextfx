import React from "react";
import cn from "classnames";

function Box(props) {
  return (
    <div>
      <div className={cn("instrument rounded")}></div>
      <p className={cn("text-gray-500 text-sm pt-2")}>
        May 11,2020 / By{" "}
        <span className={cn("text-pink-600 text-sm")}>Emma Waston</span>
      </p>
      <p className={cn("text-lg text-blue-800")}>
        What is the future of enterprise internet ?
      </p>
      <p className={cn("text-sm text-gray-500 pt-3 pb-3")}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut sequi
        nesciunt obcaecati nostrum laboriosam velit explicabo temporibus maxime
        ipsa debitis corrupti vitae iure impedit, quasi quo earum sapiente
        itaque nemo?
      </p>
      <li className={cn("text-blue-800 text-sm list-none")}>
        <a href="#">Read More</a>
      </li>
    </div>
  );
}

export default Box;
