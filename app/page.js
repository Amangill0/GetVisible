import Image from "next/image";
import Navbar from "./components/common/Navbar";
import StandOut from "./components/home/StandOut";
import Options from "./components/home/Options";
import ProudDelivered from "./components/home/ProudDelivered";
import WeWork from "./components/home/WeWork";
import Footer from "./components/common/Footer";
import Visible from "./components/home/Visible";
import Transforming from "./components/home/Transforming";
import About from "./components/about/About";
import Get from "./components/about/Get";
import HowWeWork from "./components/about/HowWeWork";

export default function Home() {
  return (
    <>
      <Navbar />

      <StandOut />
      <Options />
      <Transforming />
      <WeWork />
      <Footer />
      {/* <Get/> */}
      {/* <HowWeWork/> */}
    </>
  );
}
