import React from "react";
import cn from "classnames";
import styles from "../../styles/Card.module.css"

function RecCard(props) {
  return (
    <div className = {cn("p-3 rounded", props.classname, styles.mainContainer)}>{props.children}
     
    </div>
  );
}

export default RecCard;
