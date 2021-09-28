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
import Link from "next/link";



const Item = (props)=>{
  return (
    <div className = {cn("pt-24")}>
        <p className = {cn("text-5xl text-blue-400")}>{props.title}</p>
        <li className = {cn("inline")}><a href="" className = {cn("no-underline text-gray-500 font-bold text-sm ")}>{props.home} / </a></li>
        <li className = {cn("inline")}><a href="" className = {cn("no-underline text-gray-500 font-bold text-sm ")}>{props.career} </a></li>
    </div>
  );
};

function Navbar(props) {
  return (
    <div className={cn("wall")}>
      <div className={cn("container mx-auto")}>
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
      <div className={cn("container mx-auto")}>
        <div className="">
          <div className={cn("bg-blue-100")}>
            <p className={cn("text-sm inline")}>Residential Services</p>
            <p className={cn("text-sm inline text-gray-400 pl-4")}>
              Business Services
            </p>
            <FaBlackberry className={cn("inline float-right ml-5")} />
            <FaConnectdevelop className={cn("inline float-right ml-1")} />
          </div>

          <div className={cn("py-3 bg-white")}>
            <li className={cn("inline")}>
              <Link href="/">Home</Link>
            </li>
            <li className={cn("inline ml-3")}>
              <Link href="/packages">Packages</Link>
            </li>
            <li className={cn("inline ml-3")}>
              <Link href="/services">Services</Link>
            </li>
            <li className={cn("inline ml-3")}>
              <Link className ={cn("no-underline")} href="/features">Features</Link>
            </li>
            <li className={cn("inline ml-3")}>
              <Link href="news">News</Link>
            </li>
            <li className={cn("inline ml-3")}>
              <a href="#">Contacts</a>
            </li>

            <FaSearch className={cn("inline float-right")} />
          </div>
        </div>
        {/* <div>
          <Item title = "Careers" home = "Home" career = "Career"/>
        </div> */}
      </div>{props.children}
    </div>
  );
}

export default Navbar;
