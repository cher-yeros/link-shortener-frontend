import React, { useEffect } from "react";
import Hero from "./Hero";
import Steps from "./Steps";
import "aos/dist/aos.css";
import Aos from "aos";
import Services from "./Services";
import Counts from "./Counts";
import Contact from "./Contact";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);
  return (
    <>
      <Hero />
      <Steps />
      <Services />
      <Counts />
      <Contact />
    </>
  );
}
