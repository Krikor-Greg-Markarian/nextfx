import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaBlackberry,
  FaConnectdevelop,
  FaSearch,
} from "react-icons/fa";
import cn from "classnames";
import Link from 'next/link'

function Navbar() {
  return (
    <div className={cn("wall")}>
      <div className={cn("container mx-auto")}>
        <FaFacebookF className={cn("inline text-blue-400")} />
        <FaTwitter className={cn("inline ml-2 text-blue-400")} />
        <FaYoutube className={cn("inline ml-2 text-blue-400")} />
        <FaInstagram className={cn("inline ml-2 text-blue-400")} />
        <div className={cn("float-right")}>
          <p className={cn("text-sm text-blue-400 inline")}>
            contact@netflix.com
          </p>
          <p className={cn("inline text-sm text-blue-400 ml-5")}>Support</p>
          <p className={cn("inline text-sm text-blue-400 ml-5")}>Career</p>
        </div>
      </div>
      <div className={cn("container mx-auto")}>
        <div>
          <div className={cn("bg-blue-100")}>
            <p className={cn("text-sm inline")}>Residential Services</p>
            <p className={cn("text-sm inline text-gray-400 pl-4")}>
              Business Services
            </p>
            <FaBlackberry className={cn("inline float-right ml-5")} />
            <FaConnectdevelop className={cn("inline float-right ml-1")} />
          </div>
          <div className={cn("py-8 bg-white")}>
            <li className={cn("inline")}>
              <Link href="/">Home</Link>
            </li>
            <li className={cn("inline ml-3")}>
              <Link href="/packages">Packages</Link>
            </li>
            <li className={cn("inline ml-3")}>
              <Link href="/Services">Services</Link>
            </li>
            <li className={cn("inline ml-3")}>
              <a href="#">Features</a>
            </li>
            <li className={cn("inline ml-3")}>
              <a href="#">News</a>
            </li>
            <li className={cn("inline ml-3")}>
              <a href="#">Contacts</a>
            </li>

            <FaSearch className={cn("inline float-right")} />
          </div>
        </div>

        <div className={cn("w-8/12 text-center transform translate-x-28")}>
          <p className={cn("text-4xl font-bold")}>
            Switch to internet service you will love
          </p>
          <p className={cn("text-white pt-2 pb-2")}>
            This is the place to learn about NetFx internet-the high
            speed,secure, and reliable internet connection that lets you do what
            you love online
          </p>
          <div className={cn("pt-2")}>
            <button className={cn("bg-blue-700 p-2 text-white inline ")}>
              Check availability
            </button>
            <div className={cn("inline pl-2")}></div>
            <button className={cn("text-black bg-blue-300 inline p-2 px-7 ")}>
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
