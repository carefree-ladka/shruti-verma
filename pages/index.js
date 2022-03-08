import Head from "next/head";
import { useRef } from "react";
import About from "../components/About";
import Events from "../components/Events";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Hobbies from "../components/Hobbies";
import Reading from "../components/Reading";
import Work from "../components/Work";
import { motion } from 'framer-motion';

export default function Index() {
  const aboutRef = useRef("");
  const hobbiesRef = useRef("");
  const workRef = useRef("");
  const eventRef = useRef("");
  const gotoAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const gotoHobbies = () => {
    hobbiesRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const gotoWork = () => {
    workRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const gotoEvent = () => {
    eventRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const props = {
    gotoAbout,
    gotoHobbies,
    gotoWork,
    gotoEvent,
  };
  return (
    <div className=" text-back ">
      <Head>
        <title>Shruti | Home</title>
        <link
          rel="apple-touch-icon-precomposed"
          sizes="192x192"
          href="android-chrome-192x192.png"
          type="image/png"
        ></link>
      </Head>
      <Header {...props} />
      <main className="pt-10 tracking-wide max-w-xl pl-3 pr-3 mx-auto hero container pb-10 md:max-w-4xl md:mx-auto sm:max-w-xl sm:mx-auto sm:pl-10">
        <Hero />
        <About ref={aboutRef} />
        <Hobbies ref={hobbiesRef} />
        <Work ref={workRef} />
        <Events ref={eventRef} />
        <Reading />
        <Footer />
      </main>
    </div>
  );
}
