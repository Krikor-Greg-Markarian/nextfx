import axios from "axios";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Card from "../src/components/Card";
import cn from "classnames";
import ResumeCard from "../src/components/ResumeCard";
import JobOpening from "../src/components/JobOpening";
import Box from "../src/components/Box";
import IntSelection from "../src/components/IntSelection";
import Router from "../src/components/Router";
import QuestionAnswer from "../src/components/QuestionAnswer";
import RightPlan from "../src/components/RightPlan";
import FiberConnection from "../src/components/FiberConnection";
import AddressBar from "../src/components/AddressBar";
import FastestSpeed from "../src/components/FastestSpeed";
import InternetProvider from "../src/components/InternetProvider";
import Unlimited from "../src/components/Unlimited";
import SmallBoxes from "../src/components/SmallBoxes";
import TextImg from "../src/components/TextImg";
// import { CircularProgressbar } from 'react-circular-progressbar';



export default function Home(props) {
  return (
    <div>
       
     
      <section>
        <Navbar />
      </section>

      <section>
        <div className={"p-11"}>
          <Card className={cn("border-t-4 border-blue-300")}>
            
             </Card>
        </div>
      </section>

      <section>
        <div className = {cn("p-2")}>
          <ResumeCard className={cn("border-blue-300")}></ResumeCard>
        </div>
      </section>

      <section>
      <JobOpening />
      </section>

      <section>
        <Box />
      </section>

      <section>
        <IntSelection />
      </section>

      <section>
      {/* <CircularProgressbar value={percentage} text={`${percentage}%`} />; */}
      <Router />
      </section>

      <section>
        <RightPlan />
      </section>

      <section>
        <QuestionAnswer />
      </section>

      <section>
        <FiberConnection />
      </section>

      <section>
        <AddressBar />
      </section>

      <section>
        <FastestSpeed />
      </section>

      <section>
        <InternetProvider />
      </section>

      <section>
        <Unlimited  />
      </section>

      <section>
        <SmallBoxes />
      </section>

      <section>
        <TextImg />
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
