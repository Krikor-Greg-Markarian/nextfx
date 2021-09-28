import axios from "axios";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import cn from "classnames";
import SmallImagText from "../src/components/SmallImagText";
import AddressBar from "../src/components/AddressBar";
import RightPlan from "../src/components/RightPlan";
import FiberConnection from "../src/components/FiberConnection";
import Cardwithimages from "../src/components/Cardwithimages";
import CardWithoutShadow from "../src/components/CardWithoutShadow";
import NavbarWifi from "../src/components/NavbarWifi";
import React from "react";
import "react-circular-progressbar/dist/styles.css";
import OnecardInfo from "../src/components/OnecardInfo";
import OfferAddons from "../src/components/OfferAddons";

export default function Home(props) {
  return (
    <div>
      <section>
        <Navbar>
          <div className={cn("container mx-auto")}>
            <NavbarWifi />
          </div>
        </Navbar>
      </section>

      <section>
        <p className={cn("text-sm text-blue-700 text-center pt-12 mb-0")}>
          Network Packages
        </p>
        <p className={cn("font-bold text-center text-2xl text-blue-900")}>
          Our Best Value Bundles
        </p>
        <p className={cn("text-sm text-gray-500 text-center pb-3")}>
          Get the best deals on TV, internet &amp; Home phones for New York
          City, NY
        </p>
        <div className={cn("container mx-auto")}>
          <div
            className={cn(
              "grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            )}
          >
            <div className={cn("col-span-1")}>
              <OnecardInfo />
            </div>
            <div className={cn("col-span-1")}>
              <OnecardInfo />
            </div>
            <div className={cn("col-span-1")}>
              <OnecardInfo />
            </div>
            <div className={cn("col-span-1")}>
              <OnecardInfo />
            </div>
          </div>
        </div>
      </section>

      <section className={cn("pt-5")}>
        <div className={cn("bg-gray-100 pb-10")}>
          <p className={cn("text-sm text-blue-700 text-center pt-12 mb-0")}>
            Our Services
          </p>
          <p className={cn("font-bold text-center text-2xl text-blue-900")}>
            Find a solution that meets your needs
          </p>
          <p className={cn("text-sm text-gray-500 text-center pb-3")}>
            Lorem ipsum dolor sit amet, consecteur adipiscing elit. Prooin
            bibendum, est ac faucibus henderit
          </p>
          <div className={cn("container mx-auto")}>
            <div className={cn("md:grid grid-cols-4 gap-4")}>
              <div className={cn("col-span-1 sm:pt-4")}>
                <SmallImagText />
              </div>
              <div className={cn("col-span-1 sm:pt-4")}>
                <SmallImagText />
              </div>
              <div className={cn("col-span-1 sm:pt-4")}>
                <SmallImagText />
              </div>
              <div className={cn("col-span-1 sm:pt-4")}>
                <SmallImagText />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <AddressBar />
      </section>

      <section>
        <p className={cn("text-sm text-blue-700 text-center pt-12 mb-0")}>
          Network Package
        </p>
        <p className={cn("font-bold text-center text-2xl text-blue-900")}>
          Choose a plan that fit your needs
        </p>
        <p className={cn("text-sm text-gray-500 text-center pb-3")}>
          Get the best deals on TV, internet &amp; Home Phone for New York City,
          Ny
        </p>
        <div className={cn("container mx-auto")}>
          <div
            className={cn(
              "grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3"
            )}
          >
            <div className={cn("col-span-1")}>
              <OfferAddons />
            </div>
            <div className={cn("col-span-1")}>
              <OfferAddons />
            </div>
            <div className={cn("col-span-1")}>
              <OfferAddons />
            </div>
            <div className={cn("col-span-1")}>
              <OfferAddons />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={cn("pt-16 pb-16")}>
          <div className={cn("stars")}>
            <div className={cn("container mx-auto ")}>
              <div className={"grid grid-cols-2"}>
                <div className={cn("col-span-1 w-12/12 pl-16 py-8")}>
                  <p className={cn("font-bold text-blue-900 text-2xl")}>
                    Extend your super-fast internet to reach every corner of
                    your home.
                  </p>
                  <p className={cn("text-gray-500 text-sm")}>
                    Whole-Home Wifi, Powered by NetFx, eliminates dead and gives
                    you the coverage you need with the best home Wifi solution
                    around.
                  </p>
                  <p className={cn("text-2xl text-blue-900 font-bold inline")}>
                    $69.99
                  </p>
                  <sub className={cn("text-gray-500 text-sm")}>/mo</sub>
                  <li className={cn("text-sm text-gray-500 pt-3")}>
                    Great for several devices being used similtaneously.
                  </li>
                  <li className={cn("text-sm text-gray-500 pt-2")}>
                    Perfect for households with 1-3 users.
                  </li>
                  <li className={cn("text-sm text-gray-500 pt-2")}>
                    Less waiting, less buffering, and more surfing and streaming
                  </li>
                  <div className={cn("pt-4")}>
                    <button
                      className={cn("bg-blue-700 text-white p-2 rounded")}
                    >
                      Customize order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <p className={cn("text-sm text-blue-700 text-center pt-12 mb-0")}>
          Internet Plans
        </p>
        <p className={cn("font-bold text-center text-2xl text-blue-900")}>
          Choose the right plan
        </p>
        <p className={cn("text-sm text-gray-500 text-center pb-3")}>
          Flexible pricing option and we know how to make it a breeze. Get the
          reliable, affordable coverage you deserve in a jiffy.
        </p>
        <div className={cn("text-center")}>
          <p className={cn("inline text-sm")}>Billed Yearly</p>
          <span className={cn("inline text-sm pl-20")}>Billed monthly</span>
        </div>
        <div className={cn("container mx-auto pt-3")}>
          <div className={cn("md:grid grid-cols-3 gap-4")}>
            <div className={cn("col-span-1")}>
              <RightPlan />
            </div>
            <div className={cn("col-span-1")}>
              <RightPlan />
            </div>
            <div className={cn("col-span-1")}>
              <RightPlan />
            </div>
          </div>
        </div>
      </section>

      <section className={cn("pt-14 pb-14")}>
        <FiberConnection />
      </section>

      <section>
        <p className={cn("text-sm text-blue-700 text-center pt-12 mb-0")}>
          Network Package
        </p>
        <p className={cn("font-bold text-center text-2xl text-blue-900")}>
          Combine internet, Tv &amp; Phone
        </p>
        <p className={cn("text-sm text-gray-500 text-center pb-3")}>
          Get the best deals on TV, internet &amp; Home Phone for New York City,
          Ny
        </p>
        <div className={cn("container mx-auto")}>
          <div
            className={cn(
              "grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            )}
          >
            <div className={cn("col-span-1")}>
              <Cardwithimages />
            </div>
            <div className={cn("col-span-1")}>
              <Cardwithimages />
            </div>
            <div className={cn("col-span-1")}>
              <Cardwithimages />
            </div>
            <div className={cn("col-span-1")}>
              <Cardwithimages />
            </div>
          </div>
        </div>
      </section>

      <section className={cn("pt-12 pb-12")}>
        <div className={cn("bg-white")}>
          <div className={cn("container mx-auto")}>
            <div className={cn("grid grid-cols-3")}>
              <div className={cn("col-span-2 pt-12")}>
                <CardWithoutShadow />
              </div>
              <div className={cn("col-span-1 p-10")}>
                <p className={cn("text-sm text-blue-700")}>
                  Request a callback
                </p>
                <p className={cn("font-bold text-3xl text-blue-900")}>
                  How can we help accelerate your business?
                </p>
                <p className={cn("text-sm text-gray-500 pt-3")}>
                  We'll deep to understand your technology and business
                  challenges. We'll discuss how our cloud-op-timized soolutions
                  align to your needs.
                </p>
                <p className={cn("text-gray-500 text-sm")}>
                  You'll receive a free reccomendation tailored for your
                  business goals.
                </p>
                <p className={cn("text-gray-500 text-sm pt-3 ")}>
                  Looking for Customer Support? Visit our
                  <a href="" className={cn("underline")}>
                    Support
                  </a>
                  page.
                </p>
                <p className={cn("text-gray-500 text-sm ")}>
                  Or call us direct:
                </p>
                <p className={cn("text-sm")}>1-232-111-1234</p>
              </div>
            </div>
          </div>
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
