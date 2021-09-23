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
    <div
      className={cn(
        "p-3 rounded-lg w-96 p",
        styles.mainContainer,
        props.className
      )}
    >
      {renderMostPopular()}
      {props.children}
      <p className={cn("font-bold pb-4")}>Submit your resume</p>
      <div className={cn("inline")}>
        <input
          type="text"
          name=""
          id=""
          placeholder="First Name"
          className={cn(" border-2 ")}
        />
      </div>
      <div className={cn("inline pl-1")}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Last Name"
          className={cn(" border-2 ")}
        />
      </div>
      <div className={cn("pt-2")}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Job You're Applying For:"
          className={cn("w-full border-2  ")}
        />
        <div className={cn("pt-2")}>
          <input
            type="text"
            name=""
            id=""
            placeholder="Phone number"
            className={cn("w-full border-2  ")}
          />
        </div>
        <div className={cn("pt-2")}>
          <input
            type="text"
            name=""
            id=""
            placeholder="Business email"
            className={cn("w-full border-2")}
          />
        </div>
        <p className={cn("text-sm pt-2")}>Resume Upload</p>
        <div className={cn("pt-2 inline")}>
          <button
            className={cn(
              "border-2 border-black text-sm p-1 inline bg-gray-200 pt-2"
            )}
          >
            Choose File
          </button>
        </div>
        <p className={cn("text-gray-500 text-sm inline pl-4 ")}>
          No File Choosen
        </p>
      </div>
      <div className={cn("pt-2")}>
        <button className={cn("bg-blue-800 text-white text-sm p-2 w-full")}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Card;
