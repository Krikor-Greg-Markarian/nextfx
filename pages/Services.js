import axios from "axios";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import cn from "classnames";
import AddressBar from "../src/components/AddressBar";
import FiberConnection from "../src/components/FiberConnection";
import Cardwithimages from "../src/components/Cardwithimages";
import CardWithoutShadow from "../src/components/CardWithoutShadow";
import NavbarWifi from "../src/components/NavbarWifi";
import React from "react";
import "react-circular-progressbar/dist/styles.css";
import PlanItem from "../src/components/PlanItem";
import BestValueitem from "../src/components/BestValueitem";
import SolutionItam from "../src/components/SolutionItam";
import RightPlanitem from "../src/components/RightPlanitem";
import ExtendSuperFasritem from "../src/components/ExtendSuperFasritem";

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
            {props.networkPackages.map((item, idx) => (
              <div className={cn("col-span-1")}>
                <BestValueitem
                  key={idx}
                  title={item.smallTitle}
                  price={item.price}
                  mo={item.mo}
                  text={item.text}
                  isMostPopular={item.isMostPopular}
                  buttonText={item.buttonText}
                  info={item.info}
                />
              </div>
            ))}
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
              {props.ourservice.map((item, idx) => (
                <div className={cn("col-span-1 sm:pt-4")}>
                  <SolutionItam
                    key={idx}
                    imageUrl={item.imageUrl}
                    title={item.title}
                    description={item.description}
                    learnMore={item.learnMore}
                  />
                </div>
              ))}
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
              <PlanItem
                title={"STANDARD"}
                price={"$49"}
                sup={"99"}
                mo={"/mo"}
                isBestValue={false}
                includes={[
                  { text: "FREE no-Contact installation" },
                  { text: "30-Day Money-Back Guarantee" },
                  { text: "Up to 100Mbps internet" },
                ]}
                addons={[
                  { text: "Whole-Home Wifi for $9.99/month" },
                  { text: "Home Phones for$9.99/month" },
                  { text: "Services Protection plan for $5/month" },
                  { text: "Internet equipment" },
                ]}
              />
            </div>
            <div className={cn("col-span-1")}>
              <PlanItem
                title={"SILVER"}
                price={"$74"}
                sup={"99"}
                mo={"/mo"}
                isBestValue={false}
                includes={[
                  { text: "FREE no-Contact installation" },
                  { text: "30-Day Money-Back Guarantee" },
                  { text: "Up to 200Mbps internet" },
                ]}
                addons={[
                  { text: "Whole-Home Wifi for $7.99/month" },
                  { text: "Home Phones for$8.99/month" },
                  { text: "Services Protection plan for $5/month" },
                  { text: "Internet equipment" },
                ]}
              />
            </div>
            <div className={cn("col-span-1")}>
              <PlanItem
                title={"GOLD"}
                price={"$84"}
                sup={"99"}
                mo={"/mo"}
                isBestValue={false}
                includes={[
                  { text: "FREE no-Contact installation" },
                  { text: "30-Day Money-Back Guarantee" },
                  { text: "Up to 100Mbps internet" },
                ]}
                addons={[
                  { text: "Whole-Home Wifi for $4.99/month" },
                  { text: "Home Phones for$4.99/month" },
                  { text: "Services Protection plan for $5/month" },
                  { text: "Internet equipment" },
                ]}
              />
            </div>
            <div className={cn("col-span-1")}>
              <PlanItem
                title={"DIAMOND"}
                price={"$94"}
                sup={"99"}
                mo={"/mo"}
                isBestValue={true}
                includes={[
                  { text: "FREE no-Contact installation" },
                  { text: "30-Day Money-Back Guarantee" },
                  { text: "Up to 100Mbps internet" },
                ]}
                addons={[
                  { text: "Free whole-Home Wifi $2.99/month" },
                  { text: "Home Phones for$9.99/month" },
                  { text: "Services Protection plan for $5/month" },
                  { text: "Internet equipment" },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <ExtendSuperFasritem
          title="Extend your super-fast internet to reach every corner of your
       home."
          description="Whole-Home Wifi, Powered by NetFx, eliminates dead and gives
       you the coverage you need with the best home Wifi solution
       around."
          price="$69.99"
          mo="/mo"
          tag="Great for several devices being used similtaneously"
          taga="Perfect for households with 1-3 users."
          tagb="Less waiting, less buffering, and more surfing and streaming"
        />
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
          <div className={cn("grid md:grid-cols-3 gap-4")}>
            {props.internetPlans.map((item, idx) => (
              <div className={cn("col-span-1")}>
                <RightPlanitem
                  key={idx}
                  smalltitle={item.smalltitle}
                  title={item.title}
                  price={item.price}
                  month={item.month}
                  listItems={item.listItems}
                  titleColor={item.titleColor}
                  priceColor={item.priceColor}
                  planBackgroundColor={item.planBackgroundColor}
                  buttonBackgroundColor={item.buttonBackgroundColor}
                  buttonTextColor={item.buttonTextColor}
                  buttonText={item.buttonText}
                />
              </div>
            ))}
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
              <Cardwithimages
                title="STANDARD"
                price="$49.99"
                mo="/mo"
                isMostPopular={false}
                isBestValue={false}
                select={[
                  { text: "Free Google Voice Remote and DVR included" },
                  { text: "60+ HD Channels" },
                  { text: "Local Channels" },
                  { text: "190 Channels" },
                ]}
              />
            </div>
            <div className={cn("col-span-1")}>
              <Cardwithimages
                title="SILVER"
                price="$74.99"
                mo="/mo"
                isMostPopular={false}
                isBestValue={false}
                select={[
                  { text: "Free Google Voice Remote and DVR included" },
                  { text: "110+ HD Channels" },
                  { text: "Local Channels" },
                  { text: "190+ Channels" },
                ]}
              />
            </div>
            <div className={cn("col-span-1")}>
              <Cardwithimages
                title="GOLD"
                price="$84.99"
                mo="/mo"
                isMostPopular={true}
                isBestValue={false}
                select={[
                  { text: "Free Google Voice Remote and DVR included" },
                  { text: "125+ HD Channels" },
                  { text: "Local Channels" },
                  { text: "240+ Channels" },
                ]}
              />
            </div>
            <div className={cn("col-span-1")}>
              <Cardwithimages
                title="DIAMOND"
                price="$94.99"
                mo="/mo"
                isMostPopular={false}
                isBestValue={true}
                select={[
                  { text: "Free Google Voice Remote and DVR included" },
                  { text: "140+ HD Channels" },
                  { text: "Local Channels" },
                  { text: "290+ Channels" },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={cn("pt-12 pb-12")}>
        <div className={cn("bg-white")}>
          <div className={cn("container mx-auto")}>
            <div className={cn("grid md:grid-cols-3")}>
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
  const response = await axios.get("http://localhost:3000/api/posts3");

  return {
    props: {
      posts_data: response.data,
      networkPackages: response.data.networkPackages,
      ourservice: response.data.ourservice,
      internetPlans: response.data.internetPlans,
    }, // will be passed to the page component as props
  };
}
