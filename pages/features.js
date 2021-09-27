import axios from "axios";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import cn from "classnames";
import IntSelection from "../src/components/IntSelection";

export default function Home(props) {
  return (
    <div>
      <section>
        <Navbar />
      </section>

      <section>
        <div className={cn("container mx-auto")}>
          <div className={cn("grid grid-cols-4")}>
            <div className={cn("col-span-1 pt-14")}>
              <IntSelection />
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
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium sit tempora reprehenderit minima accusantium quia
                sunt laborum cum voluptates temporibus dolores odit aspernatur.
                Quas obcaecati esse ab repellat praesentium odit quo. Ex nobis
                voluptas delectus praesentium consectetur, saepe assumenda odio
                et quibusdam asperiores, error, ullam dicta laboriosam illo.
              </p>

              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium sit tempora reprehenderit minima accusantium quia
                sunt laborum cum voluptates temporibus dolores odit aspernatur.
                Quas obcaecati esse ab repellat praesentium odit quo. Ex nobis
                voluptas delectus praesentium consectetur, saepe assumenda odio
                et quibusdam asperiores, error, ullam dicta laboriosam illo.
              </p>
              <div className = {cn("towers w-full")}></div>
              <div className = {cn("grid grid-cols-3")}>
                <div className = {cn("col-span-1")}>
                    
                </div>
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
