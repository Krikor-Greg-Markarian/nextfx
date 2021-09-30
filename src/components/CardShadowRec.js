import React from "react";
import styles from "../../styles/Card.module.css";
import cn from "classnames";
import "react-circular-progressbar/dist/styles.css";

function CardShadow(props) {
  return (
    <div className={cn("p-4", styles.mainContainer, props.className)}>{props.children}</div>
  );
}

export default CardShadow;
