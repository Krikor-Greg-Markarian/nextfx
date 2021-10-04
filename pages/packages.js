import axios from "axios";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import cn from "classnames";
import Box from "../src/components/Box";
import NavbarBlogs from "../src/components/NavbarBlogs";
import BlogClassicitem from "../src/components/BlogsClassicitem";

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
        <div className={cn("container mx-auto p-12")}>
          <div className={cn("grid grid-cols-2 gap-4")}>
            {props.blogClassic.map((item, idx) => (
              <div className={cn("col-span-1")}>
                <BlogClassicitem
                  date={item.date}
                  name={item.name}
                  title={item.title}
                  description={item.description}
                  tag={item.tag}
                />
              </div>
            ))}
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
      blogClassic: response.data.blogClassic,
    }, // will be passed to the page component as props
  };
}
