import Nav from "./components/nav";
import Banner from "./components/Banner";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Testimonial from "./components/Testimonial";
import Insights from "./components/Insights";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="blur"></div>

      <Nav />
      <Banner />
      <About />
      <Portfolio />
      <Skills />
      <Testimonial />
      <Insights />
      <Newsletter />
      <Footer />
    </div>
  );
}
