import React from "react";
import cn from "classnames";
import styles from "../../styles/Card.module.css";
import { FaCheck } from "react-icons/fa";

function RecCard(props) {
  return (
    <div
      className={cn(
        "p-3 border-t-4 rounded-t-lg border-blue-300",
        props.classname,
        styles.mainContainer
      )}
    >
      {props.children}
      <div className={cn("text-center")}>
        <div className={cn("flex justify-center items-center")}>
          <div className={cn("small rounded-lg")}></div>
        </div>
        <p className={cn("text-sm pt-2")}>STANDARD</p>
        <p className={cn("inline text-blue-900 font-bold text-2xl")}>$49</p>
        <sup className={cn("inline text-blue-900 font-bold pl-1")}>99</sup>
        <sub className={cn("inline text-gray-500")}>/mo</sub>
        <div className={cn("pt-2 pb-2")}>
          <button
            className={cn("bg-blue-700 p-2 text-sm text-white rounded w-11/12")}
          >
            Check Availability
          </button>
        </div>
      </div>
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
        <div className={cn("border-b-2 pt-2 pb-2")}></div>
        <p className={cn("text-blue-900 font-bold text-sm pt-3")}>Add-ons:</p>
        <li className={cn("text-sm text-gray-500")}>
          Whole-Home Wifi for $9.99/month
        </li>
        <li className={cn("text-sm text-gray-500")}>
          Home Phones for$9.99/month
        </li>
        <li className={cn("text-sm text-gray-500")}>
          Services Protection plan for $5/month
        </li>
        <li className={cn("text-sm text-gray-500")}>Internet equipment</li>
        <div className={cn("border-b-2 pt-3")}></div>
        <div className={cn("pt-2 pb-2")}>
          <a href="" className={cn("text-blue-900 font-bold text-sm")}>
            View deatils
          </a>
        </div>
      </div>
    </div>
  );
}

export default RecCard;
