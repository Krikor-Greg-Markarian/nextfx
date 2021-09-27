import React from "react";
import cn from "classNames";

function Box(props) {
  return (
    <div>
      <div className={cn("instrument rounded w-full")}></div>
      <p className={cn("text-gray-500 text-sm pt-2 mb-0")}>
        May 11,2020 / By{" "}
        <span className={cn("text-pink-600 text-sm font-bold")}>Emma Waston</span>
      </p>
      <p className={cn("text-lg text-blue-900 font-bold")}>
        What is the future of enterprise internet ?
      </p>
      <p className={cn("text-sm text-gray-500")}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut sequi
        nesciunt obcaecati nostrum laboriosam velit explicabo temporibus maxime
        ipsa debitis corrupti vitae iure impedit, quasi quo earum sapiente
        itaque nemo?
      </p>
      <li className={cn(" text-sm list-none")}>
        <a href="#" className = {cn("text-blue-900 no-underline font-bold")}>Read More</a>
      </li>
    </div>
  );
}

export default Box;
