import React from "react";
import styles from "../../styles/Card.module.css";
import cn from "classnames";

const Card = (props) => {
  const renderMostPopular = () => {
    if (props.isMostPopular) {
      return <div>hi its most popular</div>;
    } else {
      return null;
    }
  };

  return (
    <div className={cn("p-3 rounded-lg", styles.mainContainer, props.className)}
    >{renderMostPopular()}{props.children}
    </div>
  );
};

export default Card;
