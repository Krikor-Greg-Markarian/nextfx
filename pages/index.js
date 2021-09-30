import axios from "axios";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Card from "../src/components/Card";
import cn from "classnames";
import QuestionAnswer from "../src/components/QuestionAnswer";
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
import NavbarText from "../src/components/NavbarText";
import Button from "../src/components/Button";
import Experienceitem from "../src/components/Experienceitem";
import CardShadowRec from "../src/components/CardShadowRec";
import BestValueitem from "../src/components/BestValueitem";

// import { CircularProgressbar } from 'react-circular-progressbar';

const netFx = [
  {
    title: "Wifi internet",
    description: "High-Speed internet access that is always on & fast.",
  },
  {
    title: "Wifi internet",
    description: "High-Speed internet access that is always on & fast.",
  },
  {
    title: "Wifi internet",
    description: "High-Speed internet access that is always on & fast.",
  },
  {
    title: "Wifi internet",
    description: "High-Speed internet access that is always on & fast.",
  },
];

const favorite = [
  {
    title:
      "Streaming TV gives you instant access to all your favorite Live channels and OnDemand video at a low Price. Best of all, there are no hidden fees, equipment rentals or contracts. Stream all of your favorite shows, surf the web",
  },
  {
    title:
      "We've streamlined our plans to give you the fastest internet available at your address for one low monthly price. TV you want, when you want it. Enjoy your favorite shows and movies on your own schedule.",
  },
];

const channel = [
  {
    channel: "370+",
    available: "Available Channels",
  },
];

export default function Home(props) {
  return (
    <div>
      <section>
        <Navbar>
          <NavbarText />
        </Navbar>
      </section>

      <section>
        <div className={cn("bg-white container mx-auto")}>
          <div className={cn("md:grid grid-cols-2 gap-4 sm:pb-8 ")}>
            <div className={cn("col-span-1 pt-12")}>
              <FastestSpeed
                smalltitle="Unlimited Possibilities"
                description="Get your fastest speed"
              />
              <div className={cn("flex justify-center items-center")}>
                <Button
                  className={cn(
                    "bg-blue-800 w-6/12 text-sm text-white p-2 rounded text-center"
                  )}
                  text="Check coverage map"
                />
              </div>
            </div>
            <div className={cn("col-span-1 pt-12 sm:pt-16")}>
              <QuestionAnswer />
            </div>
          </div>
        </div>
      </section>

      <section className={cn("sm:pb-8 md:pb-0 lg:pb-0")}>
        <InternetProvider
          title="Your Local High Speed internet Provider"
          description="NetFx is an award winning high speed internet provider offering reliable and affordable internet services in NYC, with gigabit internet speeds up to 940* Mbps."
        />
      </section>

      <section>
        <div className={cn("md:grid grid-cols-2")}>
          <div className={cn("col-span-1")}>
            <div className={cn("couch w-full")}></div>
          </div>
          <div className={cn("col-span-1 p-8")}>
            <div className={cn("container mx-auto")}>
              <p className={cn("text-blue-800 text-sm mb-0")}>
                Unlimited possible
              </p>
              <p className={cn("font-bold text-2xl text-blue-800")}>
                The best TV experience powered by NetFx internet
              </p>
              <p className={cn("text-sm text-gray-500")}>
                we've streamlined our plans to give you the fastest internet
                available at your address for one low monthly price.
              </p>
              <div>
                <FaCheck className={cn("inline")} />
                <p className={cn("text-gray-500 text-sm inline pl-4")}>
                  The speed you need at a price you'll love-with plans up to
                  100Mbps*
                </p>
              </div>
              <div className={cn("pt-3")}>
                <FaCheck className={cn("inline")} />
                <p className={cn("text-gray-500 text-sm inline pl-4")}>
                  The bandwidth to power multiple devices at once
                </p>
              </div>
              <div className={cn("pt-3")}>
                <FaCheck className={cn("inline")} />
                <p className={cn("text-gray-500 text-sm inline pl-4")}>
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
            <p className={cn("text-sm text-blue-800 mb-0")}>What We Do?</p>
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
            <div className={cn("md:grid grid-cols-4 gap-4 pt-2")}>
              {netFx.map((item, idx) => (
                <div className={cn("col-span-1")}>
                  <Experienceitem
                    key={idx}
                    title={item.title}
                    description={item.description}
                  />
                </div>
              ))}
            </div>
            <div>
              <div className={cn("flex justify-center items-center pt-8")}>
                <Button
                  className={cn(
                    "bg-blue-800 text-white text-center p-2 w-3/12 rounded"
                  )}
                  text="More about services"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={cn("w-10/12 p-12")}>
        <div className={cn("bg-white")}>
          <div className={cn("container mx-auto")}>
            <div className={cn("grid grid-cols-3")}>
              <div className={cn("col-span-2")}>
                <div className={cn("grid grid-cols-2 gap-4")}>
                  <div className={cn("col-span-2")}>
                    <p className={cn("text-blue-800 text-sm mb-0")}>
                      Why Choose us
                    </p>
                    <p className={cn("font-bold text-2xl text-blue-800")}>
                      All your favorite TV for a better value and no hidden
                      fees.
                    </p>
                  </div>

                  {favorite.map((item, idx) => (
                    <div className={cn("col-span-1")}>
                      <TextImg key={idx} title={item.title} />
                    </div>
                  ))}
                </div>
              </div>
              <div className={cn("col-span-1")}>
                {channel.map((item, idx) => (
                  <SmallBoxes
                    key={idx}
                    channel={item.channel}
                    available={item.available}
                  />
                ))}
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
            <p className={cn("text-sm text-blue-700 text-center pt-12 mb-0")}>
              Network Packages
            </p>
            <p className={cn("font-bold text-center text-2xl text-blue-900")}>
              Our Best Value Bundles
            </p>
            <p className={cn("text-sm text-gray-500 text-center pb-3")}>
              Get the best deals on TV,internet &amp; Home Phone for New York
              City, NY.
            </p>
            <div
              className={cn(
                "grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-4 gap-2 pb-12"
              )}
            >
              <div className={cn("sm:pb-2 col-span-1")}>
                <BestValueitem
                  title={"STANDARD"}
                  price={"$49.99"}
                  text={[
                    { text: "Free Google Voice Remote and DVR included" },
                    { text: "60+ HD Channels" },
                    { text: "Local Channels" },
                    { text: "190 Channel" },
                  ]}
                />
              </div>
              <div className={cn("sm:pb-2 col-span-1")}>
                <BestValueitem
                  title={"SILVER"}
                  price={"$74.99"}
                  text={[
                    { text: "Free Google Voice Remote and DVR included" },
                    { text: "110+ HD Channels" },
                    { text: "Local Channels" },
                    { text: "190+ Channel" },
                  ]}
                />
              </div>
              <div className={cn("sm:pb-2 col-span-1")}>
                <BestValueitem
                  title={"GOLD"}
                  price={"$84.99"}
                  text={[
                    { text: "Free Google Voice Remote and DVR included" },
                    { text: "125+ HD Channels" },
                    { text: "Local Channels" },
                    { text: "240+ Channel" },
                  ]}
                />
              </div>
              <div className={cn("sm:pb-2 col-span-1")}>
                <BestValueitem
                  title={"DIAMON"}
                  price={"$94.99"}
                  text={[
                    { text: "Free Google Voice Remote and DVR included" },
                    { text: "140+ HD Channels" },
                    { text: "Local Channels" },
                    { text: "290+ Channel" },
                  ]}
                />
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

      <section className={cn("pt-20 ")}>
        <div className={cn("container mx-auto ")}>
          <p className={cn("text-sm text-blue-700 text-center mb-0")}>
            Phone and devices
          </p>
          <p className={cn("font-bold text-2xl text-blue-900 text-center")}>
            Buy trending products
          </p>
          <p className={cn("text-sm text-gray-500 text-center pb-4")}>
            order online today! Get FREE express shipping &amp; FREE returs
          </p>
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
