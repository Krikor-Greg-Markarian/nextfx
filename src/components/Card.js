import React from "react";
import styles from "../../styles/Card.module.css";
import cn from "classnames";
import "react-circular-progressbar/dist/styles.css";

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
      <div>{props.children}</div>
    </div>
  );
};

export default Card;
