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
              <button className={cn("bg-white text-blue-700 p-2 rounded")}>
                Let's get started
              </button>
            </div>
          </div>
        </div>
        <div className={cn("bg-gray-200 ")}>
          <div className={cn("container mx-auto pt-24")}>
            <div className={cn("grid grid-cols-6 ")}>
              <div className={cn("col-span-2  ")}>
                <p className={cn("font-bold text-blue-800")}>About company</p>
                <p className={cn("text-sm pt-4 text-gray-500 ")}>
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
                <div classname="flex pt-4">
                  <div classname="flex-shrink ">
                    <FaLocationArrow className={cn("inline text-blue-800")} />
                    <p className={cn("text-sm inline text-gray-500")}>
                      {" "}
                      5002 Examples Street Los Angeles, CA 90034
                    </p>
                  </div>
                </div>
                <div classname="flex pt-4">
                  <div classname="flex-shrink ">
                    <FaPhone className={cn("inline text-blue-800")} />
                    <p className={cn("text-sm inline text-gray-500")}>
                      {" "}
                      example@company.com
                    </p>
                  </div>
                </div>
                <div classname="flex pt-4">
                  <div classname="flex-shrink ">
                    <FaMailBulk className={cn("inline text-blue-800")} />
                    <p className={cn("text-sm inline text-gray-500")}>
                      {" "}
                      012-2453-6353
                    </p>
                  </div>
                </div>
              </div>

              <div className={cn("pl-8")}>
                <p className={cn("font-bold text-blue-800")}>Navigation</p>
                <p className={cn("text-gray-500 text-sm pt-2")}>Home</p>
                <p className={cn("text-gray-500 text-sm pt-2")}>Services</p>
                <p className={cn("text-gray-500 text-sm pt-2")}>About us</p>
                <p className={cn("text-gray-500 text-sm pt-2")}>Testimonials</p>
                <p className={cn("text-gray-500 text-sm pt-2")}>Blogs</p>
              </div>
              <div className={cn("pl-7")}>
                <p className={cn("font-bold text-blue-800")}>Quick links</p>
                <p className={cn("text-gray-500 text-sm pt-4")}>Packages</p>
                <p className={cn("text-gray-500 text-sm pt-2")}>Connection</p>
                <p className={cn("text-gray-500 text-sm pt-2")}>Service Plus</p>
                <p className={cn("text-gray-500 text-sm pt-2")}>
                  Privacy Policy
                </p>
                <p className={cn("text-gray-500 text-sm pt-2")}>
                  Coverage Maps
                </p>
              </div>
            </div>
            <div>
              <div className={cn("pt-1 pb-1")}>
                <p
                  className={cn(
                    "border-t-2 border-gray-300 pt-8 text-sm text-gray-500 "
                  )}
                >
                  NetFx <span className={cn("pl-4")}>|</span>{" "}
                  <span className={cn("pl-4")}>&copy; 2020JWSTHEMES </span>{" "}
                  <span className={cn("float-right pl-4")}>Sitemap</span>{" "}
                  <span className={cn("float-right pl-4")}>Privacy</span>{" "}
                  <span className={cn("float-right")}>Legal</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div>
                      <div className = {cn("fire container mx-auto relative")}></div>
                      <div className = {cn("bg-gray-200 absolute -top-2")}>
                        asdasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                      </div>
                    </div> */}
    </div>
  );
}

export default Footer;
