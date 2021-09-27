import React from "react";
import styles from "../../styles/Card.module.css";
import cn from "classnames";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaCheck } from "react-icons/fa";

const percentage = 66;
const Card = (props) => {
  const renderMostPopular = () => {
    if (props.isMostPopular) {
      return <div>hi its most popular</div>;
    } else {
      return null;
    }
  };

  return (
    <div
      className={cn(
        "p-4 rounded-lg border-t-4 border-blue-300",
        styles.mainContainer,
        props.className
      )}
    >
      {renderMostPopular()}
      {props.children}
      <div className={cn("flex justify-center pb-2")}>
        <div style={{ width: 50, height: 50 }}>
          <CircularProgressbar value={66} text={`${percentage}%`} />
        </div>
      </div>
      <p className={cn("text-sm font-bold text-center")}>STANDARD</p>
      <div className={cn("text-center")}>
        <p className={cn("font-bold inline text-2xl text-blue-800")}>$49.99</p>

        <sub className={cn("text-gray-500 text-sm inline")}>/mo</sub>
      </div>
      <div className={cn("pt-3")}>
        <FaCheck className={cn("inline")} />{" "}
        <p className={cn("inline text-sm text-gray-500")}>
          Free Google Voice Remote and DVR included
        </p>
      </div>
      <div className={cn("pt-3")}>
        <FaCheck className={cn("inline")} />{" "}
        <p className={cn("inline text-sm text-gray-500")}>60+ HD Channels</p>
      </div>
      <div className={cn("pt-3")}>
        <FaCheck className={cn("inline")} />{" "}
        <p className={cn("inline text-sm text-gray-500")}>Local Channels</p>
      </div>
      <div className={cn("pt-3")}>
        <FaCheck className={cn("inline")} />{" "}
        <p className={cn("inline text-sm text-gray-500")}>190 Channels</p>
      </div>
      <div className={cn("pt-4 flex justify-center")}>
        <button className={cn("text-white bg-blue-800  rounded px-9 py-2")}>
          Get started
        </button>
      </div>
      <p className={cn("underline text-sm text-center text-blue-800 pt-2")}>
        or call1(900) 232 123
      </p>
    </div>
  );
};

export default Card;
