import React from "react";
import cn from "classnames";

const Item = (props) => {
  return (
    <div className={cn("pt-20")}>
      <p className={cn("text-3xl font-bold text-blue-900 mb-0")}>{props.title}</p>
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
    </div>
  );
};

function NavbarBlogs() {
  return (
    <div>
      <Item
        title="Packages"
        home="Home"
        career="Packages"
      />
    </div>
  );
}

export default NavbarBlogs;
