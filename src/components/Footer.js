import React from "react";
import cn from "classnames";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLocationArrow,
  FaPhone,
  FaMailBulk,
} from "react-icons/fa";
import Button from "./Button";

function Footer() {
  return (
    <div className="pt-40">
      <div className=" relative">
        <div
          className={cn("container mx-auto absolute left-0 right-0 -top-24")}
        >
          <div className={cn("fire rounded")}>
            <div className={cn("text-center")}>
              <p className={cn("font-bold text-white text-2xl pt-4")}>
                Stay connected with the right NetFx internet service
              </p>
              <p className={cn("text-sm text-white pt-2 pb-2 text-center")}>
                Get a price you'll love and the reliability you deserve
              </p>
              <div className={cn("flex justify-center items-center")}>
                <Button
                  className={cn(
                    "bg-white text-sm rounded text-blue-300 text-center p-2 w-2/12"
                  )}
                  text="Let's get started "
                />
              </div>
            </div>
          </div>
        </div>
        <div className={cn("bg-gray-200 ")}>
          <div className={cn("container mx-auto pt-24")}>
            <div className={cn("grid grid-cols-6 pt-4")}>
              <div className={cn("col-span-2  ")}>
                <p className={cn("font-bold text-blue-800")}>About company</p>
                <p className={cn("text-xs pt-4 text-gray-500 ")}>
                  we're developing the ultimate communications network to power
                  high-quality, secure,affordable, fast connections.
                </p>
                <div className={cn("pt-4")}>
                  <FaFacebook className={cn("inline")} />
                  <FaTwitter className={cn("inline ml-3")} />
                  <FaYoutube className={cn("inline ml-3")} />
                  <FaInstagram className={cn("inline ml-3")} />
                </div>
              </div>
              <div className={cn("col-span-2 pl-20")}>
                <p className={cn("font-bold text-blue-800")}>Contacts</p>
                <div className="flex pt-4">
                  <div className="flex-shrink ">
                    <FaLocationArrow className={cn("inline text-blue-800 ")} />
                    <p className={cn("text-xs inline text-gray-500 pl-1")}>
                      5002 Examples Street Los Angeles, CA 90034
                    </p>
                  </div>
                </div>
                <div className="flex pt-4">
                  <div className="flex-shrink ">
                    <FaPhone className={cn("inline text-blue-800")} />
                    <p className={cn("text-xs inline text-gray-500 pl-1")}>
                      example@company.com
                    </p>
                  </div>
                </div>
                <div className="flex pt-4">
                  <div className="flex-shrink ">
                    <FaMailBulk className={cn("inline text-blue-800")} />
                    <p className={cn("text-xs inline text-gray-500 pl-1")}>
                      012-2453-6353
                    </p>
                  </div>
                </div>
              </div>

              <div className={cn("pl-8")}>
                <p className={cn("font-bold text-blue-800")}>Navigation</p>
                <li className={cn("text-xs list-none")}>
                  <a className={cn("no-underline text-gray-500")} href="#">
                    Home
                  </a>
                </li>
                <li className={cn("text-xs pt-2 list-none")}>
                  <a className={cn("no-underline text-gray-500")} href="#">
                    Services
                  </a>
                </li>
                <li className={cn("text-xs pt-2 list-none")}>
                  <a className={cn("no-underline text-gray-500")} href="#">
                    About us
                  </a>
                </li>
                <li className={cn("text-xs pt-2 list-none")}>
                  <a className={cn("no-underline text-gray-500")} href="#">
                    Testimonials
                  </a>
                </li>
                <li className={cn("text-xs pt-2 list-none")}>
                  <a className={cn("no-underline text-gray-500")} href="#">
                    Blogs
                  </a>
                </li>
              </div>
              <div className={cn("pl-7")}>
                <p className={cn("font-bold text-blue-800")}>Quick links</p>
                <li className={cn("text-xs list-none")}>
                  <a className={cn("no-underline text-gray-500")} href="#">
                    Packages
                  </a>
                </li>
                <li className={cn("text-xs pt-2 list-none")}>
                  <a className={cn("no-underline text-gray-500")} href="#">
                    Connection
                  </a>
                </li>
                <li className={cn("text-xs pt-2 list-none")}>
                  <a className={cn("no-underline text-gray-500")} href="#">
                    Service Plus
                  </a>
                </li>
                <li className={cn("text-xs pt-2 list-none")}>
                  <a className={cn("no-underline text-gray-500")} href="#">
                    Privacy Policy
                  </a>
                </li>
                <li className={cn("text-xs pt-2 list-none")}>
                  <a className={cn("no-underline text-gray-500")} href="#">
                    Coverage Maps
                  </a>
                </li>
              </div>
            </div>
            <div>
              <div className={cn("pt-4 pb-1")}>
                <p
                  className={cn(
                    "border-t-2 border-gray-300 pt-3 text-xs text-gray-500 "
                  )}
                >
                  NetFx <span className={cn("pl-4")}>|</span>{" "}
                  <span className={cn("pl-4")}>
                    Copyright &copy; 2020JWSTHEMES.{" "}
                  </span>
                  <span className={cn("float-right pl-4 text-xs")}>
                    Sitemap
                  </span>
                  <span className={cn("float-right pl-4 text-xs")}>
                    Privacy
                  </span>
                  <span className={cn("float-right text-xs")}>Legal</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
