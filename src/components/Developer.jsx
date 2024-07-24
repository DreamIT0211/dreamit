import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import prem from "../assets/team/prem.jpg";
import siddharth from "../assets/team/sid.jpg";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1, scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0, opacity: 1,
  },
};

const Developer = ({ onSwitch, onSwitchToTeam, onSwitchToIntern }) => {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const developers = [
    {
      name: "Mr. Siddharth Sutariya",
      title: "Full Stack Developer",
      image: siddharth,
      description:
        "Hi, I'm Siddharth Sutariya. As a Full Stack Developer at DreamITInfotech, I am passionate about building robust and scalable applications. Let's innovate together and push the boundaries of technology.",
    },
    {
      name: "Mr. Prem Patel",
      title: "Full Stack Developer",
      image: prem,
      description:
        "Greetings! I'm Prem Patel, a Full Stack Developer at DreamITInfotech. I love crafting seamless and efficient user experiences. Excited to be part of this team and transform ideas into impactful solutions.",
    },
  ];

  return (
    <div ref={sectionRef} className="md:p-28 lg:p-32 p-5 bg-white h-auto flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-gray-900">Our Developers</h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10"
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {developers.map((developer, index) => (
          <motion.div
            key={index}
            variants={item}
            className="flex flex-col items-center p-10 bg-white rounded-xl shadow-xl transition duration-700 group hover:shadow-[0_35px_60px_-15px_rgba(171,71,188,0.3)]"
          >
            <img
              src={developer.image}
              alt={developer.name}
              className="w-32 h-32 rounded-xl shadow-inner mb-4 transition duration-700 group-hover:scale-105 ease-in-out"
            />
            <p className="text-xl font-semibold text-gray-800 transition duration-500 group-hover:text-purple-400">
              {developer.name}
            </p>
            <p className="text-md font-medium text-cyan-600">{developer.title}</p>
            <p className="text-justify text-gray-600 mt-4">{developer.description}</p>
          </motion.div>
        ))}
      </motion.div>
      <div className="mt-10 flex space-x-4">
        <button
          onClick={onSwitchToTeam}
          className="px-4 py-2 bg-cyan-600 font-semibold text-white rounded hover:bg-cyan-500 transition duration-300"
        >
          Our Team
        </button>
        <button
          onClick={onSwitchToIntern}
          className="px-4 py-2 bg-cyan-600 font-semibold text-white rounded hover:bg-cyan-500 transition duration-300"
        >
          Our Interns
        </button>
      </div>
    </div>
  );
};

export default Developer;
