import axios from "axios";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import cn from "classnames";
import Box from "../src/components/Box";

export default function Home(props) {
  return (
    <div>
      <section>
        <Navbar />
      </section>

      <section>
        <div className={cn("container mx-auto p-12")}>
          <div className={cn("grid grid-cols-2 gap-4")}>
            <div className={cn("col-span-1")}>
              <Box />
            </div>
            <div className={cn("col-span-1")}>
              <Box />
            </div>
            <div className={cn("col-span-1 pt-4")}>
              <Box />
            </div>
            <div className={cn("col-span-1 pt-4")}>
              <Box />
            </div>
            <div className={cn("col-span-1 pt-4")}>
              <Box />
            </div>
            <div className={cn("col-span-1 pt-4")}>
              <Box />
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
