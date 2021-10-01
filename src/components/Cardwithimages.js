import React from "react";
import styles from "../../styles/Card.module.css";
import cn from "classnames";
import "react-circular-progressbar/dist/styles.css";
import Item from "./Item";
import Button from "./Button";

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
        "p-4 rounded-lg border-t-4 border-blue-300 relative",
        styles.mainContainer,
        props.className
      )}
    >
      {props.children}
      <p className={cn("text-sm font-bold text-center")}>{props.title}</p>
      <div className={cn("text-center")}>
        <p className={cn("font-bold inline text-2xl text-blue-800")}>
          {props.price}
        </p>
        <sub className={cn("text-gray-500 text-sm inline")}>{props.mo}</sub>
        <div className={cn("flex justify-center items-center pt-3 pb-3")}>
          <div className={cn("small rounded-full")}></div>
        </div>
      </div>
      {props.select.map((item, idx) => (
        <Item text={item.text} key={idx} />
      ))}
      <div className={cn("flex justify-center items-center pt-4")}>
        <Button
          className={cn(
            "bg-blue-800 text-white text-center text-sm rounded p-2 w-7/12"
          )}
          text="Get started"
        />
      </div>
      <p className={cn("underline text-sm text-center text-blue-800 pt-2")}>
        or call1(900) 232 123
      </p>

      {props.isMostPopular ? (
        <div className={cn("flex justify-center items-center")}>
          <div
            className={cn(
              "bg-blue-900 text-white text-center rounded text-sm w-5/12 p-1 absolute -top-4"
            )}
          >
            Most Popular
          </div>
        </div>
      ) : (
        ""
      )}
      {props.isBestValue ? (
        <div className={cn("flex justify-center items-center")}>
          <div
            className={cn(
              "bg-blue-900 text-white text-center rounded text-sm w-5/12 p-1 absolute -top-4"
            )}
          >
            BEST VALUE
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Card;
