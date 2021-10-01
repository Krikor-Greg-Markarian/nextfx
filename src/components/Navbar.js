import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaBlackberry,
  FaConnectdevelop,
  FaSearch,
} from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import cn from "classnames";
import Link from "next/link";

const Item = (props) => {
  return (
    <div className={cn("pt-24")}>
      <p className={cn("text-5xl text-blue-400")}>{props.title}</p>
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

function Navbar(props) {
  return (
    <div className={cn("wall")}>
      <div className={cn("container mx-auto ")}>
        <FaFacebookF className={cn("inline text-blue-900")} />
        <FaTwitter className={cn("inline ml-2 text-blue-900")} />
        <FaYoutube className={cn("inline ml-2 text-blue-900")} />
        <FaInstagram className={cn("inline ml-2 text-blue-900")} />
        <div className={cn("float-right")}>
          <p className={cn("text-sm text-blue-900 inline")}>
            contact@netflix.com
          </p>
          <p className={cn("inline text-sm text-blue-900 ml-5")}>Support</p>
          <p className={cn("inline text-sm text-blue-900 ml-5")}>Career</p>
        </div>
      </div>
      <div className={cn("container mx-auto ")}>
        <div className={cn("pb-8")}>
          <div className={cn("container mx-auto")}>
            <div className={cn("grid grid-cols-4")}>
              <div className={cn("col-span-1 border-1")}>
                <div
                  className={cn(
                    "flex justify-center items-center pt-3 text-blue-900 bg-white"
                  )}
                >
                  <p className={cn("font-bold text-2xl p-2")}>NetFx</p>
                </div>
              </div>
              <div className={cn("col-span-3")}>
                <div className={cn("border-1")}>
                  <div className={cn("bg-blue-100 p-1")}>
                    <p className={cn("text-sm inline")}>Residential Services</p>
                    <p className={cn("text-sm inline pl-5")}>
                      Business services
                    </p>
                    <div className={cn("float-right")}>
                      <div className={cn("inline")}>
                        <FaBlackberry className={cn("inline")} />
                      </div>
                      <div className={cn("inline pl-3")}>
                        <FaConnectdevelop className={cn("inline")} />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex border-1">
                    <div className="flex-grow bg-white p-1 pt-2">
                      <li className={cn("text-sm list-none inline")}>
                        <Link className={cn("no-underline")} href="/">
                          <a className={cn("no-underline")}>Home</a>
                        </Link>
                      </li>
                      <li className={cn("text-sm list-none inline pl-2")}>
                        <Link className={cn("no-underline")} href="/packages">
                          <a className={cn("no-underline")}>Packages</a>
                        </Link>
                      </li>
                      <li className={cn("text-sm list-none inline pl-2")}>
                        <Link className={cn("no-underline")} href="/services">
                          <a className={cn("no-underline")}>Services</a>
                        </Link>
                      </li>
                      <li className={cn("text-sm list-none inline pl-2")}>
                        <Link className={cn("no-underline")} href="/features">
                          <a className={cn("no-underline")}>Features</a>
                        </Link>
                      </li>
                      <li className={cn("text-sm list-none inline pl-2")}>
                        <Link className={cn("no-underline")} href="/news">
                          <a className={cn("no-underline")}>News</a>
                        </Link>
                      </li>
                      <li className={cn("text-sm list-none inline pl-2")}>
                        <Link className={cn("no-underline")} href="/">
                          <a className={cn("no-underline")}>Contacts</a>
                        </Link>
                      </li>
                    </div>
                    <div className="flex-shrink pt-3 bg-white"></div>
                    <div className="flex-grow bg-blue-800 p-1">
                      <div>
                        <div className="flex">
                          <div className="flex-grow  pt-3">
                            <AiFillPhone />
                            <div></div>
                          </div>
                          <div className="flex-shrink  ">
                            <p className={cn("text-sm text-gray-500 mb-0")}>
                              call us now
                            </p>
                            <p className={cn("text-sm text-white mb-0")}>
                              (+012)-2453-6353
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {props.children}
    </div>
  );
}

export default Navbar;
