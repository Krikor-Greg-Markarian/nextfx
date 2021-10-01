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
            <div className={cn("col-span-1")}>
              <BlogClassicitem
                date="May 11,2020 / By"
                name="Emma Waston"
                title=" What is the future of enterprise internet ?"
                description="Given the rate in which technology evolves and, and given thta the next wave of infrastructure revolution is upon us with 5G, it's useful to know the direction that enterprise internet will be heading, particularly thta these trends[...]"
                tag="Read More"
              />
            </div>
            <div className={cn("col-span-1")}>
              <BlogClassicitem
                date="May 11,2020 / By"
                name="Emma Waston"
                title="Is Your Business Ready For Business Process Automation ?"
                description="Given the rate in which technology evolves and, and given thta the next wave of infrastructure revolution is upon us with 5G, it's useful to know the direction that enterprise internet will be heading, particularly thta these trends[...]"
                tag="Read More"
              />
            </div>
            <div className={cn("col-span-1")}>
              <BlogClassicitem
                date="May 11,2020 / By"
                name="Emma Waston"
                title="Six Tips To Make Your Mobile Phone Your Primary Work Device"
                description="Given the rate in which technology evolves and, and given thta the next wave of infrastructure revolution is upon us with 5G, it's useful to know the direction that enterprise internet will be heading, particularly thta these trends[...]"
                tag="Read More"
              />
            </div>
            <div className={cn("col-span-1")}>
              <BlogClassicitem
                date="May 11,2020 / By"
                name="Emma Waston"
                title="Tech Tips: protecting your network"
                description="Given the rate in which technology evolves and, and given thta the next wave of infrastructure revolution is upon us with 5G, it's useful to know the direction that enterprise internet will be heading, particularly thta these trends[...]"
                tag="Read More"
              />
            </div>
            <div className={cn("col-span-1")}>
              <BlogClassicitem
                date="May 11,2020 / By"
                name="Emma Waston"
                title="Wearables and More: 5 Tech Trends for Pet Parents"
                description="Given the rate in which technology evolves and, and given thta the next wave of infrastructure revolution is upon us with 5G, it's useful to know the direction that enterprise internet will be heading, particularly thta these trends[...]"
                tag="Read More"
              />
            </div>
            <div className={cn("col-span-1")}>
              <BlogClassicitem
                date="May 11,2020 / By"
                name="Emma Waston"
                title="How To Choose The ideal Enterprise internet provider"
                description="Given the rate in which technology evolves and, and given thta the next wave of infrastructure revolution is upon us with 5G, it's useful to know the direction that enterprise internet will be heading, particularly thta these trends[...]"
                tag="Read More"
              />
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
