import React from "react";
import styles from "../../styles/Card.module.css";
import cn from "classnames";
import "react-circular-progressbar/dist/styles.css";

const percentage = 66;
const CardSwipe = (props) => {
  const renderMostPopular = () => {
    if (props.isMostPopular) {
      return <div>hi its most popular</div>;
    } else {
      return null;
    }
  };

  return (
    <div className={cn("rounded-lg", styles.mainContainer, props.className)}>
      {renderMostPopular()}
      {props.children}
      <div>
        <div className={cn("iphone6 relative")}>
          <div className={cn("flex justify-center items-center")}>
            <div className={cn("absolute top-28")}>
              <button
                className={cn("text-white text-sm bg-blue-800 p-2 rounded")}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <p className={cn("font-bold text-sm text-center pt-4")}>Iphone 11</p>
        <p className={cn("text-sm text-gray-500 text-center")}>$699.00</p>
      </div>
    </div>
  );
};

export default CardSwipe;
