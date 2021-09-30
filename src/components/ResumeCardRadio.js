import React from "react";
import styles from "../../styles/Card.module.css";
import cn from "classnames";
import Button from "./Button";

const CardResume = (props) => {
  const renderMostPopular = () => {
    if (props.isMostPopular) {
      return <div>hi its most popular</div>;
    } else {
      return null;
    }
  };

  return (
    <div
      className={cn("p-3 rounded-lg", styles.mainContainer, props.className)}
    >
      {renderMostPopular()}
      {props.children}
      <p className={cn("font-bold text-blue-900 text-2xl mb-2")}>
        Request a call back
      </p>
      <p className={cn("text-sm text-gray-500")}>
        Were are commited to providing excellent service and creating a
        stress-free experience for our customers.
      </p>
      <div className={cn("inline ")}>
        <input
          type="text"
          name=""
          id=""
          placeholder="First Name"
          className={cn(" border-2 p-1")}
        />
      </div>
      <div className={cn("inline pl-1")}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Last Name"
          className={cn(" border-2 p-1")}
        />
      </div>
      <div className={cn("pt-2")}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Job You're Applying For:"
          className={cn("w-full border-2  p-1")}
        />
        <div className={cn("pt-2")}>
          <input
            type="text"
            name=""
            id=""
            placeholder="Phone number"
            className={cn("w-full border-2 p-1 ")}
          />
        </div>
        <div className={cn("pt-2")}>
          <input
            type="text"
            name=""
            id=""
            placeholder="Business email"
            className={cn("w-full border-2 p-1")}
          />
        </div>
        <p className={cn("text-sm pt-3")}>
          How do you prefer to be contracted? (Optional)
        </p>
        <div className={cn("inline")}>
          <input type="radio" name="" id="" />
          <label htmlFor="" className={cn("pl-3")}>
            {" "}
            Email
          </label>
        </div>
        <div className={cn("pl-20 inline")}>
          <input type="radio" name="" id="" />
          <label htmlFor="" className={cn("pl-3")}>
            {" "}
            Phone
          </label>
        </div>
      </div>
      <div className={cn("pt-4 pb-2")}>
        <Button
          className={cn(
            "bg-blue-800 text-white text-sm p-2 w-full rounded text-center"
          )}
          text="Submit request"
        />
      </div>
    </div>
  );
};

export default CardResume;
