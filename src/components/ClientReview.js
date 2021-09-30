import React from "react";
import cn from "classnames";

function ClientReview(props) {
  return (
    <div className={cn("py-28")}>
      <p className={cn("text-sm text-blue-700 mb-0")}>{props.smalltitle}</p>
      <p className={cn("font-bold text-2xl text-blue-900")}>{props.title}</p>
      <p className={cn("text-sm text-gray-500 pt-2 pb-2")}>
        {props.description}
      </p>
      <div class="flex">
        <div class="flex-shrink">
          <div className={cn("small rounded-full")}></div>
        </div>
        <div class="flex-shrink pl-2">
          <p className={cn("font-bold text-sm mb-0")}>{props.name}</p>
          <p className={cn("text-gray-500 text-sm inline")}>
            {props.location} <span className={cn("pl-5")}>*****</span>{" "}
          </p>
        </div>
      </div>
   <div className= {cn("grid grid-cols-4 pt-6")}>
     <div className = {cn("col-span-1")}>
     <div class="flex">
  <div class="flex-shrink">
    <div className = {cn("small rounded-lg")}></div>
  </div>
  <div class="flex-shrink pl-1">
   <p className = {cn("text-blue-900 text-sm font-bold pl-1")}>Global News</p>
  </div>
  
</div>
     </div>

     <div className = {cn("col-span-1 pl-6 relative")}>
       
    <div className = {cn("bg-blue-300 w-14 text-sm text-blue-900 font-bold relative p-1")}>NEWS  <div className = {cn("bg-blue-900 w-6 text-white text-xs absolute left-11 top-5 text-center p-1")}>TV</div> </div>
    
    </div>
     

     <div className = {cn("col-span-1")}>
     <div class="flex">
 
  <div class="flex-shrink pl-6">
   <p className = {cn("text-blue-900 text-sm font-bold mb-0")}>N E W S</p>
   <p className = {cn("text-xs text-blue-900 font-bold")}>BUSINESS</p>
  </div>
 
  
</div>
     </div>
     <div className = {cn("col-span-1 pl-6")}>
     <div className = {cn("bg-blue-300 rounded-full w-11 h-11 relative font-bold p-2 text-center text-white")}>One <div className = {cn("bg-blue-800 rounded-full w-6 h-6 absolute text-xs -top-1 left-9 p-1 text-white text-center")}>TV</div></div>
     </div>
   </div>

    </div>
  );
}

export default ClientReview;
