import axios from "axios";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import cn from "classnames";
import IntSelection from "../src/components/IntSelection";
import Router from "../src/components/Router";
import QuestionAnswer from "../src/components/QuestionAnswer";
import NavbarPackages from "../src/components/NavbarPackages";
import WifiBlanketitem from "../src/components/WifiBlanketitem";

export default function Home(props) {
  return (
    <div>
      <section>
        <Navbar>
          <div className={cn("container mx-auto")}>
            <NavbarPackages />
          </div>
        </Navbar>
      </section>

      <section>
        <div className={cn("container mx-auto")}>
          <div className={cn("grid grid-cols-4")}>
            <div className={cn("col-span-1 pt-14")}>
              <WifiBlanketitem
                select={[
                  { number: "01.", descrition: "WIFI INTERNET" },
                  { number: "02.", descrition: "MOBILE CONNECTION" },
                  { number: "03.", descrition: "TV BOX" },
                  { number: "04.", descrition: "SMART HOME" },
                  { number: "05.", descrition: "SATELITE TV" },
                  { number: "06.", descrition: "BROADBAND" },
                  { number: "07.", descrition: "INTERNET" },
                  { number: "08.", descrition: "BUSNINESS" },
                ]}
              />
            </div>

            <div className={cn("col-span-3 pl-10")}>
              <p className={cn("text-sm text-blue-700  pt-12 mb-0")}>
                What we offer?
              </p>
              <p className={cn("font-bold text-2xl text-blue-900")}>
                Finally, Wifi that blankets every corner of your office
              </p>
              <p className={cn("text-sm text-gray-500 pb-3")}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
                illo temporibus voluptate voluptatem doloremque dolorem,
                perferendis corporis nihil facere soluta ex debitis labore, eum
                ut vero! Doloribus fugiat ut alias.
              </p>
              <div className={cn("grid grid-cols-2 gap-4")}>
                <div className={cn("col-span-1")}>
                  <div className={cn("building w-full")}></div>
                </div>
                <div className={cn("col-span-1")}>
                  <div className={cn("building w-full")}></div>
                </div>
              </div>
              <p className={cn("pt-8 text-sm text-gray-500")}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium sit tempora reprehenderit minima accusantium quia
                sunt laborum cum voluptates temporibus dolores odit aspernatur.
                Quas obcaecati esse ab repellat praesentium odit quo. Ex nobis
                voluptas delectus praesentium consectetur, saepe assumenda odio
                et quibusdam asperiores, error, ullam dicta laboriosam illo.
              </p>

              <p className={cn("pt-2 text-sm text-gray-500 pb-4")}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium sit tempora reprehenderit minima accusantium quia
                sunt laborum cum voluptates temporibus dolores odit aspernatur.
                Quas obcaecati esse ab repellat praesentium odit quo. Ex nobis
                voluptas delectus praesentium consectetur, saepe assumenda odio
                et quibusdam asperiores, error, ullam dicta laboriosam illo.
              </p>
              <div className={cn("towers w-full")}></div>
              <div
                className={cn(
                  "grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 pt-4"
                )}
              >
                <div className={cn("col-span-1 pt-2 w-10/12")}>
                  <Router
                    title="WHOLE HOME WIFI"
                    description="Delivering fast, relaible Wifi throughout your home."
                  />
                </div>
                <div className={cn("col-span-1 pt-2 w-10/12")}>
                  <Router
                    title="STANDARD WIFI ROUTER"
                    description="Get the right modern for your speed and a router."
                  />
                </div>
                <div className={cn("col-span-1 pt-2 w-10/12")}>
                  <Router
                    title="MODEM ONLY WIFI"
                    description="Including full 24/7 support and upgrades as needed."
                  />
                </div>
              </div>
              <p className={cn("text-sm text-blue-700  pt-12 mb-0")}>FAQs</p>
              <p className={cn("font-bold text-2xl text-blue-900")}>
                Get your fastest answer
              </p>
              <p className={cn("text-sm text-gray-500 pb-3")}>
                Can't find what you're Looking for? view all FAQs.
              </p>
              <QuestionAnswer />
            </div>
          </div>
        </div>
      </section>

      <section></section>

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
