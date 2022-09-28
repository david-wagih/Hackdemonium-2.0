import type { NextPage } from "next";
import Navbar from "../components/navbar";
import Hero from "../components/home/hero";
import Features from "../components/home/features";
import About from "../components/home/about";
import Team from "../components/home/team";
import Footer from "../components/footer";

const Home: NextPage = (props) => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Team />
      <Footer />
    </>
  );
};

export default Home;
