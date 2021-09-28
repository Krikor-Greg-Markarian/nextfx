import React from "react";
import cn from "classnames";

const Item = (props) => {
  return (
    <div className={cn("pt-20")}>
      <p className={cn("text-3xl text-blue-900 font-bold mb-0")}>{props.title}</p>
      <li className={cn("inline")}>
        <a
          href=""
          className={cn("no-underline text-gray-500 font-bold text-sm ")}
        >
          {props.home} /{" "}
        </a>
      </li>
      <li className={cn("inline")}>
        <a
          href=""
          className={cn("no-underline text-gray-500 font-bold text-sm ")}
        >
          {props.career}{" "}
        </a>
      </li>
      <li className={cn("inline")}>
        <a
          href=""
          className={cn("no-underline text-gray-500 font-bold text-sm ")}
        >
          {props.wifi}{" "}
        </a>
      </li>
    </div>
  );
};

function NavbarBlogs() {
  return (
    <div>
      <Item
        title="Wifi internet"
        home="Home"
        career="Our Services"
        Wifi="Wifi internet"
      />
    </div>
  );
}

export default NavbarBlogs;
