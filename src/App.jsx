import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from 'locomotive-scroll';

function App() {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen text-white bg-zinc-900">
      <Navbar></Navbar>
      <LandingPage></LandingPage>
      <Marquee></Marquee>
      <About></About>
      <Eyes></Eyes>
      <Featured></Featured>
      <Cards></Cards>
      <Footer></Footer>
    </div>
  );
}

export default App;
