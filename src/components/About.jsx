import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Video from "../assets/about/about.mp4";
import tab from "../assets/about/tab.png";

const About = () => {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.5, 
  });

  return (
    <div
      ref={sectionRef}
      className="p-10 pb-[100px] -mb-10 bg-white flex flex-col justify-center items-center"
    >
      <h1 className="text-4xl font-bold text-black">About Us</h1>

      <div className="flex md:flex-row flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={inView ? { opacity: 1, x: 20 } : { opacity: 0, x: -200 }}
          transition={{ duration: 2 }}
          className="text-center mb-12"
        >
          <p className="mt-4 text-lg text-left text-gray-900 px-4 md:px-0 max-w-3xl mx-auto mr-16">
            Discover the essence of relentless innovation and transformative
            technology with <span className="text-black font-medium"> DreamITInfotech </span>. At the intersection of creativity
            and functionality, we redefine possibilities, crafting digital
            solutions that not only meet but exceed expectations. Embrace a
            journey of technological excellence as we propel your dreams into
            the future.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.3 }}
          transition={{ duration: 0.8 }}
          className="h-64 w-96 relative rounded-3xl bg-transparent transition duration-700 ease-in-out hover:shadow-2xl"
        >
          <img src={tab} alt="tab" className="w-full h-full" />
          <div className="absolute top-[8.2%] left-[10.5%] w-[80%] h-[83.8%]">
            <video
              loop
              muted
              autoPlay
              className="w-full h-full object-cover rounded-sm"
            >
              <source src={Video} type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
