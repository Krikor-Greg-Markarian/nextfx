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
import RecCard from "../src/components/RecCard";
import ClientReview from "../src/components/ClientReview";
import ResumeCardRadio from "../src/components/ResumeCardRadio";
import CardSwipe from "../src/components/CardSwipe";

// import { CircularProgressbar } from 'react-circular-progressbar';

export default function Home(props) {
  return (
    <div>
      <section>
        <Navbar />
      </section>

      <section>
        <div className={cn("bg-white container mx-auto")}>
          <div className={cn("md:grid grid-cols-2 gap-4 sm:pb-8 ")}>
            <div className={cn("col-span-1 pt-12")}>
              <FastestSpeed />
            </div>
            <div className={cn("col-span-1 pt-12 sm:pt-16")}>
              <QuestionAnswer />
            </div>
          </div>
        </div>
      </section>

      <section className={cn("sm:pb-8 md:pb-0 lg:pb-0")}>
        <InternetProvider />
      </section>

      <section>
        <div className={cn("md:grid grid-cols-2")}>
          <div className={cn("col-span-1")}>
            <div className={cn("couch w-full")}></div>
          </div>
          <div className={cn("col-span-1 p-11")}>
            <div className={cn("container mx-auto")}>
              <p className={cn("text-blue-800 text-sm")}>Unlimited possible</p>
              <p className={cn("font-bold text-2xl text-blue-800")}>
                The best TV experience powered by NetFx internet
              </p>
              <p className={cn("text-sm text-gray-500")}>
                we've streamlined our plans to give you the fastest internet
                available at your address for one low monthly price.
              </p>
              <div>
                <FaCheck className={cn("inline")} />
                <p className={cn("text-gray-500 text-sm inline")}>
                  The speed you need at a price you'll love-with plans up to
                  100Mbps*
                </p>
              </div>
              <div className={cn("pt-3")}>
                <FaCheck className={cn("inline")} />
                <p className={cn("text-gray-500 text-sm inline")}>
                  The bandwidth to power multiple devices at once
                </p>
              </div>
              <div className={cn("pt-3")}>
                <FaCheck className={cn("inline")} />
                <p className={cn("text-gray-500 text-sm inline")}>
                  Seamless streaming,working, and gaming
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={cn("bg-gray-200 py-12")}>
          <div className={cn("container mx-auto")}>
            <p className={cn("text-sm text-blue-800")}>What We Do?</p>
            <div className={cn("grid grid-cols-2")}>
              <div className={cn("col-span-1")}>
                <p className={cn("text-2xl font-bold")}>
                  Experience the NetFx unlimited possibilities
                </p>
              </div>
              <div className={cn("col-span-1")}>
                <p className={cn("text-sm")}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Laborum magni dolores beatae et qui! Beatae veritatis nostrum
                  amet fugit enim velit eum commodi vel.
                </p>
              </div>
            </div>
            <div className={cn("md:grid grid-cols-4 gap-4")}>
              <div className={cn("col-span-1")}>
                <RecCard>
                  <Unlimited />
                </RecCard>
              </div>
              <div className={cn("col-span-1")}>
                <RecCard>
                  <Unlimited />
                </RecCard>
              </div>
              <div className={cn("col-span-1")}>
                <RecCard>
                  <Unlimited />
                </RecCard>
              </div>
              <div className={cn("col-span-1")}>
                <RecCard>
                  <Unlimited />
                </RecCard>
              </div>
            </div>
            <div>
              <div className={cn("flex justify-center items-center pt-8")}>
                <button className={cn("bg-blue-400 text-sm p-2")}>
                  More About services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={cn("bg-white")}>
          <div className={cn("container mx-auto")}>
            <div className={cn("grid grid-cols-3")}>
              <div className={cn("col-span-1")}>
                <p>why choose up</p>
                <p>
                  all your favorite tvv for a better value and no hiddenfees.
                </p>
              </div>
            </div>
            <div className={cn("grid grid-cols-2 gap-2")}>
              <div className={cn("col-span-1")}>
                <TextImg />
              </div>
              <div className={cn("col-span-1")}>
                <TextImg />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <AddressBar />
      </section>

      <section>
        <div className={cn("bg-gray-100")}>
          <div className={cn("container mx-auto")}>
            <p className={cn("text-sm text-blue-700 text-center")}>
              Network Packages
            </p>
            <p className={cn("font-bold text-center text-2xl")}>
              Our Best Value Bundles
            </p>
            <p className={cn("text-sm text-gray-500 text-center")}>
              get the best deals on TV, internet &amp; Home phones for New York
              City, NY
            </p>
            <div className={cn(" md:grid grid-cols-4 gap-2")}>
              <div className={cn("sm:pb-2 col-span-1")}>
                <Card />
              </div>
              <div className={cn("sm:pb-2 col-span-1")}>
                <Card />
              </div>
              <div className={cn("sm:pb-2 col-span-1")}>
                <Card />
              </div>
              <div className={cn("sm:pb-2 col-span-1")}>
                <Card />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={cn("bg-gray-200")}>
          <div className={cn("container mx-auto")}>
            <div className={cn("md:grid grid-cols-2")}>
              <div className={cn("col-span-1")}>
                <ClientReview />
              </div>
              <div className={cn("col-span-1 relative")}>
                <div className={cn("absolute right-0 top-10")}>
                  <ResumeCardRadio />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={cn("pt-40 ")}>
        <div className={cn("container mx-auto ")}>
          <Swiper />
        </div>
      </section>

      <section>
        <Footer />
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
