import React from "react";
import cn from "classnames";

function CardWithoutShadow() {
  return (
    <div>
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
            Phone
          </label>
        </div>
      </div>
      <div className={cn("pt-4 pb-2")}>
        <button className={cn("bg-blue-800 text-white text-sm p-2 w-2/12")}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default CardWithoutShadow;
