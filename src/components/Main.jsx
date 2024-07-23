import React, { useRef, useEffect } from "react";
import ContactForm from "./ContactForm";
import Services from "./Services";
import About from "./About";
import Technologies from "./Technologies";
import SwitchableComponent from "./SwitchableComponent";
import Work from "./Work";
import Hero from "./Hero";

const Main = () => {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const workRef = useRef(null);
  const aboutRef = useRef(null);
  const technologiesRef = useRef(null);
  const switchableRef = useRef(null);
  const contactFormRef = useRef(null);

  useEffect(() => {
    const sectionRefs = {
      home: homeRef.current,
      services: servicesRef.current,
      work: workRef.current,
      about: aboutRef.current,
      technologies: technologiesRef.current,
      team: switchableRef.current,
      contactus: contactFormRef.current,
    };
    // Save sectionRefs to window for access in StickyNavbar
    window.sectionRefs = sectionRefs;
  }, []);

  return (
    <div>
      <div id="home" ref={homeRef} className="pt-28">
        <Hero />
      </div>
      <div id="services" ref={servicesRef} className="pt-4 md:pt-28 lg:pt-28">
        <Services />
      </div>
      <div id="work" ref={workRef} className="pt-4 md:pt-28 lg:pt-28">
        <Work />
      </div>
      <div id="about" ref={aboutRef} className="pt-4 md:pt-28 lg:pt-28">
        <About />
      </div>
      <div id="technologies" ref={technologiesRef} className="pt-4 md:pt-28 lg:pt-28">
        <Technologies />
      </div>
      <div id="team" ref={switchableRef} className="pt-4 md:pt-28 lg:pt-28">
        <SwitchableComponent />
      </div>
      <div id="contactus" ref={contactFormRef} className="pt-4 md:pt-28 lg:pt-28">
        <ContactForm />
      </div>
    </div>
  );
};

export default Main;
