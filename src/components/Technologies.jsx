import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import reactLogo from "../assets/technologies/reactjs.svg";
import nextjsLogo from "../assets/technologies/nextjs.svg";
import nodeLogo from "../assets/technologies/nodejs.svg";
import sqlLogo from "../assets/technologies/mssql.svg";
import mongoLogo from "../assets/technologies/mongodb.svg";
import reactNativeLogo from "../assets/technologies/react-native-firebase.svg";
import androidLogo from "../assets/technologies/android.svg";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Technologies = () => {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: false, // Trigger animation every time the section comes into view
    threshold: 0.5, // Adjust threshold as needed
  });

  const technologies = [
    { name: "React.js", logo: reactLogo },
    { name: "Next.js", logo: nextjsLogo },
    { name: "Node.js", logo: nodeLogo },
    { name: "SQL", logo: sqlLogo },
    { name: "MongoDB", logo: mongoLogo },
    { name: "React Native", logo: reactNativeLogo },
    { name: "Android", logo: androidLogo },
  ];

  return (
    <div
      ref={sectionRef}
      className="p-5 md:p-20 lg:pb-20 pb-[550px] bg-gray-50 flex flex-col justify-center items-center"
    >
      <h1 className="text-2xl md:text-4xl font-bold text-gray-900">Technologies</h1>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-8 mt-5 md:mt-10"
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            variants={item}
            className="flex flex-col items-center p-2 md:p-4 bg-white rounded-xl shadow-lg hover:shadow-[0_35px_60px_-15px_rgba(38,198,218,0.3)] transition duration-700 group"
          >
            <img src={tech.logo} alt={tech.name} className="w-12 h-12 md:w-16 md:h-16 mb-2 md:mb-4" />
            <p className="text-sm md:text-xl text-center font-semibold text-gray-800 group-hover:text-cyan-300 transition duration-700 ease-in">{tech.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
