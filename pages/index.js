import axios from "axios";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Card from "../src/components/Card";
import cn from "classnames";
import ResumeCard from "../src/components/ResumeCard";
import JobOpening from "../src/components/JobOpening";
import Box from "../src/components/Box";
import IntSelection from "../src/components/IntSelection";
import Router from "../src/components/Router";
import QuestionAnswer from "../src/components/QuestionAnswer";
import RightPlan from "../src/components/RightPlan";
import FiberConnection from "../src/components/FiberConnection";
import AddressBar from "../src/components/AddressBar";
import FastestSpeed from "../src/components/FastestSpeed";
import InternetProvider from "../src/components/InternetProvider";
import Unlimited from "../src/components/Unlimited";
import SmallBoxes from "../src/components/SmallBoxes";
import TextImg from "../src/components/TextImg";
import Swiper from "../src/components/Swiper";
import { FaCheck } from "react-icons/fa";
// import { CircularProgressbar } from 'react-circular-progressbar';



export default function Home(props) {
  return (
    <div>
       
     <section>
       <Navbar />
     </section>

     <section>
       <div className = {cn("bg-white container mx-auto")}>
       <div className = {cn("md:grid grid-cols-2 gap-4 sm:pb-8 ")}>
          <div className = {cn("col-span-1 pt-12")}>
            <FastestSpeed />
          </div>
          <div className = {cn("col-span-1 pt-12 sm:pt-16")}>
           <QuestionAnswer />
          </div>
       </div>
       </div>
     </section>

     <section className  ={cn("sm:pb-8 md:pb-0 lg:pb-0")}>
       <InternetProvider />
     </section>

     <section>
       <div className = {cn("md:grid grid-cols-2")}>
         <div className = {cn("col-span-1")}>
       <div className = {cn("couch w-full")}></div>
       </div>
       <div className = {cn("col-span-1 p-11")}>
       <div className = {cn("container mx-auto")}>
         <p className = {cn("text-blue-800 text-sm")}>Unlimited possible</p>
         <p className = {cn("font-bold text-2xl text-blue-800")}>The best TV experience powered by NetFx internet</p>
         <p className = {cn("text-sm text-gray-500")}>we've streamlined our plans to give you the fastest internet available at your address for one low monthly price.</p>
         <div>
           <FaCheck className = {cn("inline")}/>
           <p className = {cn("text-gray-500 text-sm inline")}>The speed you need at a price you'll love-with plans up to 100Mbps*</p>
         </div>
         <div className = {cn("pt-3")}>
           <FaCheck className = {cn("inline")}/>
           <p className = {cn("text-gray-500 text-sm inline")}>The bandwidth to power multiple devices at once</p>
         </div>
         <div className = {cn("pt-3")}>
           <FaCheck className = {cn("inline")}/>
           <p className = {cn("text-gray-500 text-sm inline")}>Seamless streaming,working, and gaming</p>
         </div>
       </div>
       </div>
       </div>
     </section>
      
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await axios.get("http://localhost:3000/api/posts");

  return {
    props: {
      posts_data: response.data,
    }, // will be passed to the page component as props
  };
}
