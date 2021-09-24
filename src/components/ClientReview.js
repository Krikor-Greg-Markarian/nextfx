import React from "react";
import cn from "classnames";

function ClientReview(props) {
  return (
    <div>
      <p className={cn("text-sm text-blue-700")}>Testimonials</p>
      <p className={cn("font-bold text-lg")}>Our client love us!</p>
      <p className={cn("text-sm text-gray-500")}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima enim
        eaque ipsum qui voluptates, consectetur tempore quas odit!
      </p>

      <div class="flex">
        <div class="flex-shrink">
          <div className={cn("small rounded-full")}></div>
        </div>
        <div class="flex-shrink pl-2">
          <p className={cn("font-bold text-sm")}>Alex Rovia</p>
          <p className={cn("text-gray-500 text-sm inline")}>
            Los Angeles,California <span className={cn("pl-5 ")}>*****</span>{" "}
          </p>
        </div>
      </div>
      <div className = {cn("border-b-2 pt-2 border-gray-400")}></div>
      <p className = {cn("inline ")}>Global News</p> <span className = {cn("inline ml-2")}>News Tv</span> <span className = {cn("inline ml-2")}>News</span>
      <span className = {cn("inline ml-2")}>One</span>
    </div> 
  );
}

export default ClientReview;
