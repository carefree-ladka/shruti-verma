import Head from "next/head";
import About from "../components/About";
import Events from "../components/Events";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Hobbies from "../components/Hobbies";
import Work from "../components/Work";

export default function Index() {
  return (
    <div className=" text-back h-screen">
      <Head>
        <title>Shruti | Home</title>
        <link
          rel="apple-touch-icon-precomposed"
          sizes="192x192"
          href="android-chrome-192x192.png"
          type="image/png"
        ></link>
      </Head>
      <Header />
      <main className="tracking-wide max-w-xl pl-3 pr-3 mx-auto hero container pb-10 md:max-w-3xl md:mx-auto sm:max-w-xl sm:mx-auto sm:pl-10">
        <Hero />
        <About />
        <Hobbies />
        <Work />
        <Events />
        <Footer />
      </main>
    </div>
  );
}
