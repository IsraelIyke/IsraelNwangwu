import Nav from "./components/nav";
import Banner from "./components/Banner";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Testimonial from "./components/Testimonial";
import Insights from "./components/Insights";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
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
