import React from "react";
import cn from "classnames";
import { FaCheck } from "react-icons/fa";


function Offerinc(props) {
  return (
    <div>
      <p className={cn("font-bold mb-2 pt-2 text-blue-900 text-sm")}>
        Offer includes:
      </p>
      <div>
        <FaCheck className={cn("inline")} />
        <p className={cn("text-sm text-gray-500 inline pl-2")}>
          FREE no-Contact installation
        </p>
      </div>
      <div>
        <FaCheck className={cn("inline")} />
        <p className={cn("text-sm text-gray-500 inline pl-2")}>
          30-Day Money-Back Guarantee
        </p>
      </div>
      <div>
        <FaCheck className={cn("inline")} />
        <p className={cn("text-sm text-gray-500 inline pl-2")}>
          Up to 100Mbps internet
        </p>
      </div>
    </div>
  );
}

export default Offerinc;
