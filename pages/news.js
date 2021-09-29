import axios from "axios";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import cn from "classnames";
import { FaCheck } from "react-icons/fa";
import NavbarBlogs from "../src/components/NavbarWifi";
import ResumeCard from "../src/components/ResumeCard";
import CUrrentJobItem from "../src/components/CUrrentJobItem";

const Item = (props) => {
  return (
    <div>
      <div className={cn("blueback")}>
        <div className={cn("container mx-auto")}>
          <div className={cn("grid grid-cols-2")}>
            <div className={cn("col-span-1")}>
              <p className={cn("text-white font-bold text-lg")}>{props.text}</p>
              <p className={cn("text-white text-sm")}>{props.subtitle}</p>
            </div>

            <div className={cn("flex justify-center items-center")}>
              <div className={cn("col-span-1")}>
                <div className={cn("float-right")}>
                  <button className={cn("bg-blue-500 p-2 text-sm rounded")}>
                    {props.button}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const itembu = (props) => {
  return <div></div>;
};

export default function Home(props) {
  return (
    <div>
      <section>
        <Navbar>
          <div className={cn("container mx-auto")}>
            <NavbarBlogs />
          </div>
        </Navbar>
      </section>

      <section>
        <CUrrentJobItem
          select={[
            {
              title: "Network Engineer",
              city: "New York",
              time: "Full time",
              button: "Apply now",
            },
            {
              title: "Technical Support",
              city: "New York",
              time: "Full time",
              button: "Apply now",
            },
            {
              title: "Corporate Sales Executive",
              city: "New York",
              time: "Full time",
              button: "Apply now",
            },
          ]}
        />
      </section>

      <section className={cn("pt-10 pb-10")}>
        <Item
          text="we're here to support you."
          subtitle="We've streamlined our plans to give you the fastest internet available at your address for one low monthly price."
          button="our supprt center"
        />
      </section>

      <section>
        <div className={cn("container mx-auto")}>
          <div className={cn("grid grid-cols-2")}>
            <div className={cn("col-span-1 w-10/12")}>
              <p className={cn("text-sm text-blue-700 pt-12 mb-0")}>
                Join our team!
              </p>
              <p className={cn("font-bold text-2xl text-blue-900")}>
                Benefits for Employee
              </p>
              <p className={cn("text-sm text-gray-500 pb-3")}>
                We've streamlined our plans to give you the fastest internet
                available at your address for one low monthly price.
              </p>

              <div class="flex">
                <div class="flex-srink">
                  <FaCheck />
                </div>
                <div class="flex-shrink ">
                  <p
                    className={cn("font-bold text-blue-800 text-sm mb-0 pl-2")}
                  >
                    HEALTH INSURANCE
                  </p>
                  <p className={cn("text-sm text-gray-500 pl-2 pt-1")}>
                    Comprehensive Medical, Dental, and Vision for Employee +
                    Dependents.
                  </p>
                </div>
              </div>
              <div class="flex">
                <div class="flex-srink">
                  <FaCheck />
                </div>
                <div class="flex-shrink ">
                  <p
                    className={cn("font-bold text-blue-800 text-sm mb-0 pl-2")}
                  >
                    COMPETITIVE SALARY
                  </p>
                  <p className={cn("text-sm text-gray-500 pl-2 pt-1")}>
                    We offer highly competitive salaries based on skill set and
                    experience.
                  </p>
                </div>
              </div>
              <div class="flex">
                <div class="flex-srink">
                  <FaCheck />
                </div>
                <div class="flex-shrink ">
                  <p
                    className={cn("font-bold text-blue-800 text-sm mb-0 pl-2")}
                  >
                    WORK-LIFE BALANCE
                  </p>
                  <p className={cn("text-sm text-gray-500 pl-2 pt-1")}>
                    Paid Time Off, 10 company Holidays and paid sick leave.
                  </p>
                </div>
              </div>
            </div>
            <div className={cn("col-span-1")}>
              <div className={cn("pt-14")}>
                <ResumeCard />
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
