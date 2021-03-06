import axios from "axios";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import cn from "classnames";
import QuestionAnswer from "../src/components/QuestionAnswer";
import AddressBar from "../src/components/AddressBar";
import FastestSpeed from "../src/components/FastestSpeed";
import InternetProvider from "../src/components/InternetProvider";
import SmallBoxes from "../src/components/SmallBoxes";
import TextImg from "../src/components/TextImg";
import Swiper from "../src/components/Swiper";
import ClientReview from "../src/components/ClientReview";
import ResumeCardRadio from "../src/components/ResumeCardRadio";
import NavbarText from "../src/components/NavbarText";
import Button from "../src/components/Button";
import Experienceitem from "../src/components/Experienceitem";
import BestValueitem from "../src/components/BestValueitem";
import Item from "../src/components/Item";

const favorite = [
  {
    title:
      "Streaming TV gives you instant access to all your favorite Live channels and OnDemand video at a low Price. Best of all, there are no hidden fees, equipment rentals or contracts. Stream all of your favorite shows, surf the web",
    imageUrl:
      "https://cdn.pixabay.com/photo/2021/09/20/21/32/lake-6641880__340.jpg",
  },
  {
    title:
      "We've streamlined our plans to give you the fastest internet available at your address for one low monthly price. TV you want, when you want it. Enjoy your favorite shows and movies on your own schedule.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2021/09/17/15/17/fruit-6633086__340.jpg",
  },
];

const channel = [
  {
    channel: "370+",
    available: "Available Channels",
    imageUrl:
      "https://cdn.pixabay.com/photo/2021/08/31/18/51/forest-6589852__340.jpg",
  },
  {
    channel: "32",
    available: "Covered States",
    imageUrl:
      "https://cdn.pixabay.com/photo/2021/08/22/11/09/stream-6564840__340.jpg",
  },
  {
    channel: "125k",
    available: "Happy Clients",
    imageUrl:
      "https://cdn.pixabay.com/photo/2021/09/25/10/08/road-6654573__340.jpg",
  },
];

const tvExp = [
  {
    text: "The speed you need at a price you'll love-with plans up to 100Mbps*",
  },
  {
    text: "The bandwidth to power multiple devices at once",
  },
  {
    text: "Seamless streaming,working, and gaming",
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
            <div className={cn("col-span-1 pt-12 ")}>
              <QuestionAnswer />
            </div>
          </div>
        </div>
      </section>

      <section className={cn("sm:pb-8 md:pb-0 lg:pb-0 sm:mt-20")}>
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

              {tvExp.map((item, idx) => (
                <Item text={item.text} key={idx} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={cn("bg-gray-200 py-12")}>
          <div className={cn("container mx-auto")}>
            <p className={cn("text-sm text-blue-800 mb-0")}>What We Do?</p>
            <div className={cn("grid md:grid-cols-2")}>
              <div className={cn("col-span-1")}>
                <p className={cn("text-2xl font-bold text-blue-900")}>
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
              {props.experienceThe.map((item, idx) => (
                <div className={cn("col-span-1")}>
                  <Experienceitem
                    key={idx}
                    title={item.title}
                    description={item.description}
                    imageUrl={item.imageUrl}
                    experienceThe={item.experienceThe}
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
            <div className={cn("grid md:grid-cols-3")}>
              <div className={cn("col-span-2")}>
                <div className={cn("grid md:grid-cols-2 gap-4")}>
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
                      <TextImg
                        key={idx}
                        title={item.title}
                        imageUrl={item.imageUrl}
                      />
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
                    imageUrl={item.imageUrl}
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
        </div>
      </section>

      <section>
        <div className={cn("bg-gray-200")}>
          <div className={cn("container mx-auto")}>
            <div className={cn("md:grid grid-cols-2")}>
              <div className={cn("col-span-1")}>
                <ClientReview
                  smalltitel="Testimonials"
                  title="Our client love us!"
                  description="Amazing customer service both over the phone and in person. The technician was dedicated to a thorough installation. NetFx rocks! internet speed delivery was exactly as promised, you guys are #1"
                  name="Alex Rovia"
                  location="Los Angeles,California"
                  imageUrl="https://cdn.pixabay.com/photo/2021/09/26/09/54/beans-6656979__340.jpg"
                />
              </div>
              <div className={cn("col-span-1 relative")}>
                <div className={cn("absolute right-0 top-24 pl-5")}>
                  <ResumeCardRadio />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={cn("pt-20 ")}>
        <div className={cn("container mx-auto sm:pt-96 md:pt-0")}>
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
      experienceThe: response.data.experienceThe,
      networkPackages: response.data.networkPackages,
    }, // will be passed to the page component as props
  };
}
